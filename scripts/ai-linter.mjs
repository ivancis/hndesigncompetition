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

const filterTargetFiles = (files) =>
  files.filter((file) => /^src\/.*\.(ts|tsx|js|jsx)$/i.test(file));

const intersectFiles = (stagedFiles, argFiles) => {
  if (argFiles.length === 0) return stagedFiles;
  const argSet = new Set(argFiles.map((file) => normalizePath(file)));
  return stagedFiles.filter((file) => argSet.has(file));
};

const readStagedFile = (file) => {
  return execFileSync("git", ["show", `:${file}`], { encoding: "utf8" });
};

const main = async () => {
  if (!process.env.OPENAI_API_KEY) {
    console.error("AI linter: OPENAI_API_KEY is not set.");
    process.exit(1);
  }

  const stagedFiles = getStagedFiles();
  const targetFiles = filterTargetFiles(stagedFiles);
  const argFiles = process.argv.slice(2).map((file) => normalizePath(file));
  const filesToScan = intersectFiles(targetFiles, argFiles);

  if (filesToScan.length === 0) {
    console.log("PASS");
    return;
  }

  const instructionsPath = path.resolve(process.cwd(), "AGENTS.md");
  const instructions = await fs.readFile(instructionsPath, "utf8");

  const filePayload = filesToScan
    .map((file) => {
      const contents = readStagedFile(file);
      return `File: ${file}\n---\n${contents}\n---`;
    })
    .join("\n\n");

  const prompt = [
    "Review the staged files against the rules below.",
    "Only use the provided rules; do not invent new ones.",
    "Return PASS if no issues are found.",
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

  console.log("PASS");
};

main().catch((error) => {
  console.error("AI linter: unexpected error.");
  console.error(error);
  process.exit(1);
});
