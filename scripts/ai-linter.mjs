import fs from "node:fs/promises";
import path from "node:path";
import { execFileSync } from "node:child_process";
import OpenAI from "openai";

const MODEL = process.env.AI_LINTER_MODEL || "gpt-4o-mini";

const normalizePath = (filePath) => filePath.replace(/\\/g, "/");

const getStagedFiles = () => {
  const output = execFileSync(
    "git",
    ["diff", "--name-only", "--cached", "--diff-filter=ACMR"],
    { encoding: "utf8" }
  ).trim();
  if (!output) return [];
  return output
    .split("\n")
    .map((file) => normalizePath(file.trim()))
    .filter(Boolean);
};

const intersectFiles = (stagedFiles, argFiles) => {
  if (argFiles.length === 0) return stagedFiles;
  const argSet = new Set(argFiles.map((file) => normalizePath(file)));
  return stagedFiles.filter((file) => argSet.has(file));
};

const readStagedFile = (file) =>
  execFileSync("git", ["show", `:${file}`], { encoding: "utf8" });

const HEX_COLOR_REGEX = /#[0-9a-fA-F]{3,8}\b/g;
const FORBIDDEN_WET_REGEX = /\bWET\b/g;

const findHexIssues = (file, contents) => {
  const matches = contents.match(HEX_COLOR_REGEX);
  if (!matches) return [];
  return [
    {
      file,
      rule:
        "Use design tokens only; do not introduce raw hex color codes like #fff or #123456.",
      recommendation:
        "Replace the hex color with a design token (e.g., Tailwind token or CSS variable).",
      example: matches[0],
    },
  ];
};

const findWetIssues = (file, contents) => {
  const matches = contents.match(FORBIDDEN_WET_REGEX);
  if (!matches) return [];
  return [
    {
      file,
      rule: 'The word "WET" on the running site is forbidden; replace it with "MOIST".',
      recommendation: 'Replace "WET" with "MOIST" in user-facing text.',
      example: matches[0],
    },
  ];
};

const formatIssues = (issues) =>
  issues
    .map(
      (issue) =>
        `${issue.file}: ${issue.rule} Recommendation: ${issue.recommendation}`
    )
    .join("\n");

const main = async () => {
  if (!process.env.OPENAI_API_KEY) {
    console.error("AI linter: OPENAI_API_KEY is not set.");
    process.exit(1);
  }

  const stagedFiles = getStagedFiles();
  const argFiles = process.argv.slice(2).map((file) => normalizePath(file));
  const filesToScan = intersectFiles(stagedFiles, argFiles);

  if (filesToScan.length === 0) {
    console.log("PASS");
    return;
  }

  const instructionsPath = path.resolve(process.cwd(), "AGENTS.md");
  const instructions = await fs.readFile(instructionsPath, "utf8");

  const fileEntries = filesToScan.map((file) => ({
    file,
    contents: readStagedFile(file),
  }));
  const deterministicIssues = fileEntries.flatMap((entry) => [
    ...findHexIssues(entry.file, entry.contents),
    ...findWetIssues(entry.file, entry.contents),
  ]);
  const filePayload = fileEntries
    .map((entry) => `File: ${entry.file}\n---\n${entry.contents}\n---`)
    .join("\n\n");

  const prompt = [
    "Review the staged files against the rules below.",
    "Only use the provided rules; do not invent new ones.",
    "Return PASS if no issues are found.",
    "Explicitly search for raw hex colors (e.g., #fff, #f4f4f4) and flag them.",
    'Explicitly search for the word "WET" and flag it.',
    "",
    instructions,
    "",
    "Staged files:",
    filePayload,
  ].join("\n");

  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const response = await client.chat.completions.create({
    model: MODEL,
    messages: [
      { role: "system", content: "You are a strict UI linting agent." },
      { role: "user", content: prompt },
    ],
    temperature: 0,
  });

  const output = response.choices?.[0]?.message?.content?.trim() || "";
  if (!output) {
    console.error("AI linter: empty response.");
    process.exit(1);
  }

  if (!/^PASS\b/i.test(output)) {
    console.log(output);
    process.exit(1);
  }

  if (deterministicIssues.length > 0) {
    console.log(formatIssues(deterministicIssues));
    process.exit(1);
  }

  console.log("PASS");
};

main().catch((error) => {
  console.error("AI linter: unexpected error.");
  console.error(error);
  process.exit(1);
});
