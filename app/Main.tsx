'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import TabItemCard from '@/components/TabItemCard'
import MyCustomComponent4 from '@/components/MyCustomComponent4'
import MyCustomComponent5 from '@/components/MyCustomComponent5'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { Tab } from '@headlessui/react'

const MAX_DISPLAY = 5

function MyCustomComponentBase({ label }: { label: string }) {
  return (
    <div className="rounded-sm border border-gray-200 bg-white p-2 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200">
      Custom component: {label}
    </div>
  )
}

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{children}</h3>
)
const ScenarioTitle = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{children}</p>
)
const Divider = () => <hr className="border-gray-200 dark:border-gray-700" />

function CheckCircleIcon({
  className,
  ...props
}: { className?: string } & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
function AlertCircleIcon({
  className,
  ...props
}: { className?: string } & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
function AlertTriangleIcon({
  className,
  ...props
}: { className?: string } & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
function TrendingUpIcon({
  className,
  ...props
}: { className?: string } & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.69 12.69 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.43-.969Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
function ExternalLinkIcon({
  className,
  ...props
}: { className?: string } & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81l-8.97 8.97a.75.75 0 1 1-1.06-1.06l8.97-8.97h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function MyCustomComponent1() {
  return (
    <div
      role="region"
      aria-label="UI pattern playbook scenarios"
      className="max-h-[70vh] overflow-y-auto rounded-md border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
    >
      <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
        UI pattern playbook — Scenarios
      </h2>

      <div className="mt-6 space-y-8">
        {/* ——— 1. Typography ——— */}
        <section className="space-y-4">
          <SectionTitle>1. Typography</SectionTitle>
          <ScenarioTitle>Type scale: Display, Heading, Subheading, Body, Subtext</ScenarioTitle>
          <div className="space-y-2">
            <h1 className="text-5xl font-extrabold text-gray-900 dark:text-gray-100">
              Main Headline
            </h1>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Section Title</h2>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Subsection</h3>
            <p className="text-base font-normal text-gray-700 dark:text-gray-300">
              Main content text…
            </p>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Helper text</p>
          </div>
          <ScenarioTitle>Content rules: ellipsis, curly quotes, non‑breaking space</ScenarioTitle>
          <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
            <p>Loading… please wait</p>
            <p>She said, "Hello world."</p>
            <p>File size: 10&nbsp;MB</p>
          </div>
          <ScenarioTitle>Typography vertical spacing (space-y-1)</ScenarioTitle>
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Heading</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Subtitle</p>
          </div>
        </section>

        <Divider />

        {/* ——— 2. Spacing ——— */}
        <section className="space-y-4">
          <SectionTitle>2. Spacing</SectionTitle>
          <ScenarioTitle>
            Vertical: groups (space-y-8), default (space-y-4), related (space-y-2)
          </ScenarioTitle>
          <div className="flex flex-wrap gap-4">
            <div className="space-y-8 rounded-md border border-gray-200 p-3 dark:border-gray-700">
              <span className="text-xs font-medium text-gray-500">space-y-8</span>
              <div className="h-4 w-16 rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-4 w-16 rounded bg-gray-200 dark:bg-gray-700" />
            </div>
            <div className="space-y-4 rounded-md border border-gray-200 p-3 dark:border-gray-700">
              <span className="text-xs font-medium text-gray-500">space-y-4</span>
              <div className="h-4 w-16 rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-4 w-16 rounded bg-gray-200 dark:bg-gray-700" />
            </div>
            <div className="space-y-2 rounded-md border border-gray-200 p-3 dark:border-gray-700">
              <span className="text-xs font-medium text-gray-500">space-y-2</span>
              <div className="h-4 w-16 rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-4 w-16 rounded bg-gray-200 dark:bg-gray-700" />
            </div>
          </div>
          <ScenarioTitle>Horizontal: icon + label (gap-2, px-3 py-2)</ScenarioTitle>
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-sm bg-gray-900 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M4 3.5L12 8L4 12.5V3.5Z" />
              </svg>
              Play
            </button>
            <span className="inline-flex items-center gap-2 rounded-sm border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">
              <span className="inline-flex h-2 w-2 rounded-full bg-gray-400" aria-hidden="true" />
              Status
            </span>
          </div>
          <ScenarioTitle>Divider spacing (space-y-4)</ScenarioTitle>
          <div className="space-y-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">Content above</p>
            <hr className="border-gray-200 dark:border-gray-700" />
            <p className="text-sm text-gray-600 dark:text-gray-400">Content below</p>
          </div>
        </section>

        <Divider />

        {/* ——— 3. Layouts ——— */}
        <section className="space-y-4">
          <SectionTitle>3. Layouts</SectionTitle>
          <ScenarioTitle>Element hierarchy: Base → Surface → Container</ScenarioTitle>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
            <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
              <div className="rounded-md border border-gray-200 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800">
                <p className="text-sm text-gray-600 dark:text-gray-400">Container with fields</p>
                <div className="mt-2 flex gap-2">
                  <button
                    type="button"
                    className="rounded-sm border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
                  >
                    Keep editing
                  </button>
                  <button
                    type="button"
                    className="rounded-sm bg-gray-900 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <ScenarioTitle>Dialog structure: statement + detail + action</ScenarioTitle>
          <div className="rounded-md border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <div className="px-2 py-3">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Are you sure you want to continue?
              </p>
            </div>
            <div className="flex justify-end gap-2 border-t border-gray-200 pt-3 dark:border-gray-700">
              <button
                type="button"
                className="rounded-sm border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                Cancel
              </button>
              <button
                type="button"
                className="rounded-sm bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700"
              >
                Continue
              </button>
            </div>
          </div>
          <ScenarioTitle>
            Container emphasis: Neutral, Critical emphasized, Critical accent
          </ScenarioTitle>
          <div className="flex flex-wrap gap-4">
            <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
              <p className="text-sm text-gray-700 dark:text-gray-300">Neutral content</p>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-300 dark:bg-red-950/30">
              <p className="text-sm text-red-800 dark:text-red-300">Error: Action failed</p>
            </div>
            <div className="rounded-lg border-2 border-red-500 bg-red-100 p-4 dark:border-red-500 dark:bg-red-950/50">
              <p className="text-sm font-semibold text-red-900 dark:text-red-200">
                Critical: Immediate action required
              </p>
            </div>
          </div>
          <ScenarioTitle>Field interactivity: rest, hover, active</ScenarioTitle>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className="rounded-sm bg-gray-100 p-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 active:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:active:bg-gray-600"
            >
              Click me
            </button>
            <button
              type="button"
              className="rounded-sm px-2 py-2 text-sm text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
            >
              Small action
            </button>
          </div>
        </section>

        <Divider />

        {/* ——— 4. Visual styles ——— */}
        <section className="space-y-4">
          <SectionTitle>4. Visual styles</SectionTitle>
          <ScenarioTitle>
            Border radius: badge (rounded-sm), button, card (rounded-lg)
          </ScenarioTitle>
          <div className="flex flex-wrap items-center gap-4">
            <span className="rounded-sm bg-blue-100 p-2 text-sm font-medium text-blue-800 dark:bg-blue-900/40 dark:text-blue-200">
              New
            </span>
            <button
              type="button"
              className="rounded-sm bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Submit
            </button>
            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                Card Title
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Card content…</p>
            </div>
          </div>
          <ScenarioTitle>Interaction states: Rest, Hover, Active, Focus, Disabled</ScenarioTitle>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className="rounded-sm bg-indigo-500 px-3 py-2 text-sm font-semibold text-white"
            >
              Default
            </button>
            <button
              type="button"
              className="rounded-sm bg-indigo-500 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-600"
            >
              Hover me
            </button>
            <button
              type="button"
              className="rounded-sm bg-indigo-500 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-600 active:bg-indigo-700"
            >
              Click me
            </button>
            <button
              type="button"
              className="rounded-sm bg-indigo-500 px-3 py-2 text-sm font-semibold text-white transition-colors outline-none hover:bg-indigo-600 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 active:bg-indigo-700"
            >
              Tab to focus
            </button>
            <button
              type="button"
              disabled
              className="cursor-not-allowed rounded-sm bg-indigo-500 px-3 py-2 text-sm font-semibold text-white opacity-50"
            >
              Disabled
            </button>
          </div>
          <ScenarioTitle>Selected state: Tabs, Card, Checkbox</ScenarioTitle>
          <div className="space-y-4">
            <div className="flex gap-4 border-b border-gray-200 dark:border-gray-700">
              <button
                type="button"
                className="border-b-2 border-indigo-500 px-3 py-2 text-sm font-semibold text-indigo-600 dark:border-indigo-400 dark:text-indigo-400"
              >
                Active Tab
              </button>
              <button
                type="button"
                className="border-b-2 border-transparent px-3 py-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                Inactive Tab
              </button>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="rounded-md border-2 border-indigo-500 bg-indigo-50 p-4 dark:border-indigo-400 dark:bg-indigo-950/30">
                <p className="text-sm font-medium text-indigo-900 dark:text-indigo-200">
                  Selected card
                </p>
              </div>
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  defaultChecked
                  className="rounded-sm border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">Selected option</span>
              </label>
            </div>
          </div>
          <ScenarioTitle>
            Indicating interactivity: inline action, link, primary/secondary buttons
          </ScenarioTitle>
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              className="border-b border-dotted border-current text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              Show more details
            </button>
            <button
              type="button"
              className="text-indigo-600 underline hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              Read documentation
            </button>
            <button
              type="button"
              className="rounded-sm bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-500"
            >
              Primary Action
            </button>
            <button
              type="button"
              className="rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              Secondary Action
            </button>
          </div>
          <ScenarioTitle>
            Complete patterns: Primary, Secondary, Ghost, Danger, Link, Interactive card
          </ScenarioTitle>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className="rounded-sm bg-indigo-500 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-600 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 active:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-indigo-600 dark:hover:bg-indigo-500"
            >
              Primary
            </button>
            <button
              type="button"
              className="rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-gray-500 active:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              Secondary
            </button>
            <button
              type="button"
              className="rounded-sm px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-100 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-gray-500 active:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              Ghost
            </button>
            <button
              type="button"
              className="rounded-sm bg-red-500 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-600 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-red-500 active:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Delete
            </button>
            <button
              type="button"
              className="rounded-sm px-3 py-2 text-sm font-semibold text-indigo-600 underline transition-colors hover:text-indigo-700 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              Read documentation
            </button>
          </div>
          <div>
            <button
              type="button"
              className="w-full rounded-lg border-2 border-gray-200 bg-white p-4 text-left transition-all hover:border-indigo-300 hover:bg-indigo-50 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 active:border-indigo-400 active:bg-indigo-100 dark:border-gray-700 dark:bg-gray-900 dark:hover:border-indigo-400 dark:hover:bg-indigo-950/30 dark:active:bg-indigo-950/50"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Card Title</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Card description</p>
            </button>
          </div>
        </section>

        <Divider />

        {/* ——— 5. Status and health ——— */}
        <section className="space-y-4">
          <SectionTitle>5. Status and health</SectionTitle>
          <ScenarioTitle>
            Status color tokens: Ideal, Good, Neutral, Warning, Critical
          </ScenarioTitle>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-sm bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
              Ideal
            </span>
            <span className="rounded-sm bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
              Good
            </span>
            <span className="rounded-sm bg-slate-50 px-2 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
              Neutral
            </span>
            <span className="rounded-sm bg-amber-50 px-2 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
              Warning
            </span>
            <span className="rounded-sm bg-red-50 px-2 py-1 text-xs font-semibold text-red-700 dark:bg-red-900/40 dark:text-red-300">
              Critical
            </span>
          </div>
          <ScenarioTitle>Health indicator (shape), Chip, Message container</ScenarioTitle>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <div
                className="inline-flex h-2 w-2 rounded-full bg-emerald-500"
                role="status"
                aria-label="Healthy"
              />
              <span className="text-sm text-gray-900 dark:text-gray-100">API Service</span>
            </div>
            <span className="inline-flex items-center gap-2 rounded-sm bg-emerald-50 py-2 pr-2 pl-3 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
              <span
                className="inline-flex h-2 w-2 rounded-full bg-emerald-600"
                aria-hidden="true"
              />
              Completed
            </span>
            <div className="flex gap-3 rounded-md border-2 border-red-300 bg-red-100 p-4 dark:border-red-400 dark:bg-red-950/40">
              <AlertCircleIcon className="size-5 flex-shrink-0 text-red-700 dark:text-red-400" />
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-red-700 dark:text-red-300">
                  Service Unavailable
                </h3>
                <p className="text-sm text-red-700 dark:text-red-300">
                  The API service is currently down. Our team has been notified.
                </p>
              </div>
            </div>
          </div>
          <ScenarioTitle>
            Toast, Information overlay, Status highlight (border-l-4), Trend
          </ScenarioTitle>
          <div className="space-y-4">
            <div className="flex items-center gap-3 rounded-md bg-emerald-200 p-4 text-emerald-900 shadow-lg dark:bg-emerald-900/50 dark:text-emerald-100">
              <CheckCircleIcon className="size-5 flex-shrink-0" aria-hidden="true" />
              <span className="text-sm font-semibold">Changes saved successfully</span>
            </div>
            <button
              type="button"
              className="flex items-center gap-1 text-sm text-amber-700 hover:text-amber-800 dark:text-amber-400 dark:hover:text-amber-300"
            >
              <AlertTriangleIcon className="size-4" aria-hidden="true" />
              <span>2 warnings</span>
            </button>
            <div className="flex items-center gap-3 border-l-4 border-amber-300 bg-amber-100 p-4 dark:border-amber-500 dark:bg-amber-950/40">
              <AlertTriangleIcon
                className="size-5 text-amber-600 dark:text-amber-400"
                aria-hidden="true"
              />
              <div>
                <p className="text-sm font-semibold text-amber-700 dark:text-amber-300">
                  Database backup pending
                </p>
                <p className="text-sm text-amber-700 dark:text-amber-300">
                  Last backup: 36 hours ago
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">3.2%</span>
              <div className="flex items-center gap-1 text-red-600 dark:text-red-400">
                <TrendingUpIcon className="size-4" aria-hidden="true" />
                <span className="text-sm font-semibold">+1.2%</span>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">error rate</span>
            </div>
          </div>
        </section>

        <Divider />

        {/* ——— 6. Navigation ——— */}
        <section className="space-y-4">
          <SectionTitle>6. Navigation</SectionTitle>
          <ScenarioTitle>Flat navigation</ScenarioTitle>
          <nav
            className="flex gap-4 border-b border-gray-200 dark:border-gray-700"
            aria-label="Flat"
          >
            <button
              type="button"
              className="px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100"
            >
              Dashboard
            </button>
            <button
              type="button"
              className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              Analytics
            </button>
            <button
              type="button"
              className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              Settings
            </button>
          </nav>
          <ScenarioTitle>Breadcrumbs (nested)</ScenarioTitle>
          <nav className="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
            <button
              type="button"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              Documentation
            </button>
            <span className="text-gray-400 dark:text-gray-500">/</span>
            <button
              type="button"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              Components
            </button>
            <span className="text-gray-400 dark:text-gray-500">/</span>
            <span className="font-semibold text-gray-900 dark:text-gray-100">Button</span>
          </nav>
          <ScenarioTitle>Primary navigation (tabs), Secondary (sidebar)</ScenarioTitle>
          <nav
            className="flex gap-4 border-b border-gray-200 dark:border-gray-700"
            aria-label="Primary"
          >
            <button
              type="button"
              className="border-b-2 border-indigo-500 px-3 py-2 text-sm font-semibold text-indigo-600 dark:border-indigo-400 dark:text-indigo-400"
            >
              Dashboard
            </button>
            <button
              type="button"
              className="border-b-2 border-transparent px-3 py-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              Projects
            </button>
            <button
              type="button"
              className="border-b-2 border-transparent px-3 py-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              Team
            </button>
          </nav>
          <nav className="space-y-1" aria-label="Secondary">
            <button
              type="button"
              className="block w-full rounded-sm bg-gray-100 px-3 py-2 text-left text-sm font-semibold text-gray-900 dark:bg-gray-800 dark:text-gray-100"
            >
              Profile
            </button>
            <button
              type="button"
              className="block w-full rounded-sm px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
            >
              Security
            </button>
            <button
              type="button"
              className="block w-full rounded-sm px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
            >
              Notifications
            </button>
          </nav>
          <ScenarioTitle>Links: inline, nav with icon, external</ScenarioTitle>
          <div className="space-y-2">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Learn more in our{' '}
              <button
                type="button"
                className="text-indigo-600 underline hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                documentation
              </button>
              .
            </p>
            <button
              type="button"
              className="flex items-center gap-2 rounded-sm px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800"
            >
              <span
                className="inline-flex h-4 w-4 rounded bg-gray-300 dark:bg-gray-600"
                aria-hidden="true"
              />
              Dashboard
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-1 text-sm text-indigo-600 underline hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              Visit website
              <ExternalLinkIcon className="size-4" aria-hidden="true" />
            </button>
          </div>
        </section>

        <Divider />

        {/* ——— 7. Forms ——— */}
        <section className="space-y-4">
          <SectionTitle>7. Forms</SectionTitle>
          <ScenarioTitle>Labels: standard, required. Hint. Placeholder.</ScenarioTitle>
          <div className="max-w-md space-y-4">
            <div className="space-y-1">
              <label
                htmlFor="playbook-email"
                className="block text-sm font-semibold text-gray-900 dark:text-gray-100"
              >
                Email address
              </label>
              <input
                id="playbook-email"
                type="email"
                className="w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="playbook-pw"
                className="block text-sm font-semibold text-gray-900 dark:text-gray-100"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <input
                id="playbook-pw"
                type="password"
                className="w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
              />
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Must be at least 8 characters with one number and one special character
              </p>
            </div>
            <div className="space-y-1">
              <label
                htmlFor="playbook-date"
                className="block text-sm font-semibold text-gray-900 dark:text-gray-100"
              >
                Date
              </label>
              <input
                id="playbook-date"
                type="text"
                className="w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                placeholder="YYYY-MM-DD"
              />
            </div>
          </div>
          <ScenarioTitle>Address form (grid grid-cols-2 gap-2)</ScenarioTitle>
          <div className="grid max-w-md grid-cols-2 gap-2">
            <div className="space-y-1">
              <label
                htmlFor="playbook-city"
                className="block text-sm font-semibold text-gray-900 dark:text-gray-100"
              >
                City
              </label>
              <input
                id="playbook-city"
                type="text"
                className="w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="playbook-zip"
                className="block text-sm font-semibold text-gray-900 dark:text-gray-100"
              >
                ZIP
              </label>
              <input
                id="playbook-zip"
                type="text"
                className="w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
              />
            </div>
          </div>
          <ScenarioTitle>Form structure: Email / Password, checkboxes, actions</ScenarioTitle>
          <form className="max-w-md space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <div className="space-y-1">
                <label
                  htmlFor="playbook-name"
                  className="block text-sm font-semibold text-gray-900 dark:text-gray-100"
                >
                  Full name <span className="text-red-500">*</span>
                </label>
                <input
                  id="playbook-name"
                  type="text"
                  className="w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                />
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="playbook-email2"
                  className="block text-sm font-semibold text-gray-900 dark:text-gray-100"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="playbook-email2"
                  type="email"
                  className="w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  We&apos;ll never share your email
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded-sm border-gray-300 dark:border-gray-600 dark:bg-gray-800"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Send me product updates
                </span>
              </label>
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded-sm border-gray-300 dark:border-gray-600 dark:bg-gray-800"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Send me marketing emails
                </span>
              </label>
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="rounded-sm bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-500"
              >
                Create account
              </button>
              <button
                type="button"
                className="rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </form>
          <ScenarioTitle>Validation error: border-red-500, error message</ScenarioTitle>
          <div className="max-w-md space-y-1">
            <label
              htmlFor="playbook-invalid"
              className="block text-sm font-semibold text-gray-900 dark:text-gray-100"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="playbook-invalid"
              type="email"
              defaultValue="invalid"
              aria-invalid="true"
              aria-describedby="playbook-email-error"
              className="w-full rounded-sm border-2 border-red-500 bg-white px-3 py-2 text-sm text-gray-900 dark:bg-gray-900 dark:text-gray-100"
            />
            <p id="playbook-email-error" className="text-sm text-red-600 dark:text-red-400">
              Please enter a valid email address
            </p>
          </div>
        </section>

        <Divider />

        {/* ——— 8. Common Actions ——— */}
        <section className="space-y-4">
          <SectionTitle>8. Common Actions</SectionTitle>
          <ScenarioTitle>
            Add, Cancel, Clear, Close, Copy, Delete, Edit, Next, Refresh, Remove, Reset
          </ScenarioTitle>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-sm bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
            >
              <svg
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add document
            </button>
            <button
              type="button"
              className="rounded-sm border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              <svg
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Clear
            </button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-sm text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              aria-label="Close"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              aria-label="Copy to clipboard"
            >
              <svg
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Copy
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-sm bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"
            >
              <svg
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              Delete
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              <svg
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              Edit
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-sm bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
            >
              Next
              <svg
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              <svg
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Refresh
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              <svg
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
              Remove
            </button>
            <button
              type="button"
              className="text-sm font-semibold text-indigo-600 underline hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              Reset to defaults
            </button>
          </div>
        </section>

        <Divider />

        {/* ——— 9. Disabled States ——— */}
        <section className="space-y-4">
          <SectionTitle>9. Disabled States</SectionTitle>
          <ScenarioTitle>Default disabled (50% opacity), Read-only, Hidden</ScenarioTitle>
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              disabled
              className="cursor-not-allowed rounded-sm bg-indigo-600 px-3 py-2 text-sm font-semibold text-white opacity-50 dark:bg-indigo-500"
            >
              Disabled button
            </button>
            <input
              readOnly
              value="john@example.com"
              className="rounded-sm border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-600 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
            />
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Account ID: <span className="font-mono">abc-123-def</span>
            </p>
          </div>
        </section>

        <Divider />

        {/* ——— 10. Empty States ——— */}
        <section className="space-y-4">
          <SectionTitle>10. Empty States</SectionTitle>
          <ScenarioTitle>No Data (First Use), User Action Result, Error Management</ScenarioTitle>
          <div className="space-y-4">
            <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-12 text-center dark:border-gray-700 dark:bg-gray-900">
              <svg
                className="size-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                />
              </svg>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
                No data sources yet
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Connect your first data source to start analyzing metrics
              </p>
              <button className="mt-6 rounded-sm bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
                Add data source
              </button>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-12 text-center dark:border-gray-700 dark:bg-gray-900">
              <svg
                className="mx-auto size-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
                No results found
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Try adjusting your search terms or filters
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-12 text-center dark:border-gray-700 dark:bg-gray-900">
              <svg
                className="mx-auto size-12 text-amber-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Unable to load data
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                We&apos;re having trouble connecting to the server. Check the activity log for
                details.
              </p>
              <button className="mt-6 rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
                View activity log
              </button>
            </div>
          </div>
        </section>

        <Divider />

        {/* ——— 11. Loading States ——— */}
        <section className="space-y-4">
          <SectionTitle>11. Loading States</SectionTitle>
          <ScenarioTitle>
            Skeleton states, Full-screen loading, Inline loading, Progressive loading
          </ScenarioTitle>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
              <div className="h-6 w-32 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
              <div className="mt-3 space-y-2">
                <div className="h-4 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
                <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
              </div>
            </div>
            <button
              type="button"
              disabled
              className="inline-flex items-center gap-2 rounded-sm bg-indigo-600 px-3 py-2 text-sm font-semibold text-white opacity-75 dark:bg-indigo-500"
            >
              <svg
                className="size-4 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending invite...
            </button>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <svg
                className="size-4 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span>Loading data...</span>
            </div>
          </div>
        </section>

        <Divider />

        {/* ——— 12. Modal Patterns ——— */}
        <section className="space-y-4">
          <SectionTitle>12. Modal Patterns</SectionTitle>
          <ScenarioTitle>
            Confirm/Cancel, Destructive, Error Recovery, Permissions Request
          </ScenarioTitle>
          <div className="space-y-4">
            <div className="rounded-md border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                Publish article?
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                This article will be visible to all subscribers immediately.
              </p>
              <div className="mt-4 flex justify-end gap-2">
                <button className="rounded-sm border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
                  Cancel
                </button>
                <button className="rounded-sm bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
                  Publish now
                </button>
              </div>
            </div>
            <div className="rounded-md border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-red-100 p-2 dark:bg-red-900/40">
                  <svg
                    className="size-6 text-red-600 dark:text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  Delete team member?
                </h3>
              </div>
              <div className="mt-2 ml-11">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Removing <strong>Sarah Johnson</strong> will revoke her access immediately.
                </p>
                <p className="mt-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
                  This action cannot be undone.
                </p>
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <button className="rounded-sm border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
                  Cancel
                </button>
                <button className="rounded-sm bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600">
                  Delete member
                </button>
              </div>
            </div>
            <div className="rounded-md border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-amber-100 p-2 dark:bg-amber-900/40">
                  <svg
                    className="size-6 text-amber-600 dark:text-amber-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  Connection lost
                </h3>
              </div>
              <div className="mt-2 ml-11">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  We couldn&apos;t save your changes because the connection was interrupted.
                </p>
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <button className="rounded-sm border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
                  Cancel
                </button>
                <button className="rounded-sm bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
                  Try again
                </button>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* ——— 13. Voice Agent Builder Patterns ——— */}
        <section className="space-y-4">
          <SectionTitle>13. Voice Agent Builder Patterns</SectionTitle>
          <ScenarioTitle>Template Gallery: Grid layout, badges, hover states</ScenarioTitle>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-indigo-500 hover:shadow-md dark:border-gray-700 dark:bg-gray-900">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900/20">
                  <svg
                    className="size-6 text-indigo-600 dark:text-indigo-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                      Inbound Support
                    </h3>
                    <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                      Popular
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Handles FAQs and routing
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                      Customer Support
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ScenarioTitle>Progressive Disclosure: Simple → Advanced toggle</ScenarioTitle>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="voice-language"
                  className="block text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  Voice Language
                </label>
                <select
                  id="voice-language"
                  defaultValue="en-US"
                  className="mt-1 block w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                >
                  <option value="en-US">English (US)</option>
                  <option value="en-GB">English (UK)</option>
                </select>
              </div>
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              <svg
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Show advanced settings
            </button>
          </div>
          <ScenarioTitle>Inline Glossary: Dotted underline term with tooltip</ScenarioTitle>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            The agent uses{' '}
            <button
              type="button"
              className="cursor-help border-b-2 border-dotted border-gray-400 text-gray-900 hover:border-gray-600 dark:border-gray-500 dark:text-gray-100"
            >
              temperature
            </button>{' '}
            to control response variability.
          </p>
          <ScenarioTitle>Error Translation: Plain language + fix suggestion</ScenarioTitle>
          <div className="rounded-lg border border-red-600 bg-red-50 p-4 dark:border-red-500 dark:bg-red-900/40">
            <div className="flex gap-3">
              <svg
                className="size-5 shrink-0 text-red-600 dark:text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <div>
                <h3 className="text-sm font-semibold text-red-800 dark:text-red-300">
                  Unable to connect to API
                </h3>
                <p className="mt-1 text-sm text-red-700 dark:text-red-400">
                  The service is temporarily unavailable. Please try again in a few minutes.
                </p>
                <button className="mt-3 text-sm font-semibold text-indigo-600 underline hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">
                  Retry connection
                </button>
              </div>
            </div>
          </div>
          <ScenarioTitle>Publish Checklist: Blocked items with fix actions</ScenarioTitle>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <svg
                className="size-5 shrink-0 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  API endpoint configured
                </p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Required for agent to function
                </p>
                <button className="mt-2 text-sm font-semibold text-indigo-600 underline hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">
                  Fix now
                </button>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg
                className="size-5 shrink-0 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Voice settings configured
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function MyCustomComponent2() {
  return (
    <div className="flex h-screen flex-col">
      {/* Header — playbook: containers p-4, gap-4, border-gray-200 */}
      <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 dark:border-gray-700 dark:bg-gray-900">
        <div className="flex items-center gap-4">
          <div
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-indigo-600 text-sm font-bold text-white"
            aria-hidden="true"
          >
            W
          </div>
          <div className="relative">
            <label htmlFor="dashboard-search" className="sr-only">
              Search
            </label>
            <input
              id="dashboard-search"
              type="search"
              placeholder="Search…"
              className="block w-64 rounded-sm border border-gray-300 bg-white py-2 pr-3 pl-10 text-sm text-gray-900 placeholder-gray-500 transition focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
            />
            <svg
              className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="relative rounded-sm p-2 text-gray-600 transition hover:bg-gray-100 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:text-gray-400 dark:hover:bg-gray-800"
            aria-label="Notifications"
          >
            <svg
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span
              className="absolute top-2 right-2 size-2 rounded-full bg-indigo-600"
              aria-hidden="true"
            />
          </button>
          <button
            type="button"
            className="flex items-center gap-2 rounded-sm transition focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
            aria-label="Profile menu"
          >
            <Image
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="User profile"
              width={32}
              height={32}
              className="size-8 rounded-full"
            />
            <svg
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar — playbook: secondary nav space-y-1, rounded-sm, gap-2 icon+label, px-3 py-2 */}
        <aside className="w-64 overflow-y-auto border-r border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
          <nav className="space-y-1 p-4" aria-label="Main">
            <button
              type="button"
              className="flex w-full items-center gap-2 rounded-sm bg-gray-100 px-3 py-2 text-left text-sm font-semibold text-gray-900 transition focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:bg-gray-800 dark:text-gray-100"
            >
              <svg
                className="size-5 text-gray-500 dark:text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Dashboard
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded-sm px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-50 hover:text-gray-900 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
            >
              <svg
                className="size-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              Team
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded-sm px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-50 hover:text-gray-900 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
            >
              <svg
                className="size-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                />
              </svg>
              Projects
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded-sm px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-50 hover:text-gray-900 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
            >
              <svg
                className="size-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Calendar
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded-sm px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-50 hover:text-gray-900 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
            >
              <svg
                className="size-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Documents
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded-sm px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-50 hover:text-gray-900 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
            >
              <svg
                className="size-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              Reports
            </button>
          </nav>
          <div className="mt-8 px-4">
            <h3 className="px-3 text-sm font-semibold text-gray-500 dark:text-gray-400">Teams</h3>
            <nav className="mt-2 space-y-1" aria-label="Teams">
              <button
                type="button"
                className="flex w-full items-center gap-2 rounded-sm px-3 py-2 text-left text-sm text-gray-600 transition hover:bg-gray-50 hover:text-gray-900 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
              >
                <span
                  className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-indigo-500 text-sm font-semibold text-white"
                  aria-hidden="true"
                >
                  H
                </span>
                Heroicons
              </button>
              <button
                type="button"
                className="flex w-full items-center gap-2 rounded-sm px-3 py-2 text-left text-sm text-gray-600 transition hover:bg-gray-50 hover:text-gray-900 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
              >
                <span
                  className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-emerald-500 text-sm font-semibold text-white"
                  aria-hidden="true"
                >
                  T
                </span>
                Tailwind Labs
              </button>
              <button
                type="button"
                className="flex w-full items-center gap-2 rounded-sm px-3 py-2 text-left text-sm text-gray-600 transition hover:bg-gray-50 hover:text-gray-900 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
              >
                <span
                  className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-red-500 text-sm font-semibold text-white"
                  aria-hidden="true"
                >
                  W
                </span>
                Workcation
              </button>
            </nav>
          </div>
        </aside>

        {/* Main content — playbook: surface p-6, space-y-8 groups, heading+subtitle space-y-1 */}
        <main className="flex-1 overflow-y-auto bg-white dark:bg-gray-950">
          <div className="space-y-8 p-6">
            <div className="space-y-1">
              <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">Dashboard</h1>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Welcome back. Here&apos;s what&apos;s happening with your projects today.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2 rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
                <div className="flex items-baseline gap-2">
                  <svg
                    className="size-5 shrink-0 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-lg leading-5 font-medium text-gray-600 dark:text-gray-400">
                    Total Revenue
                  </p>
                </div>
                <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">$45,231</p>
                <div className="flex items-center gap-2 text-sm">
                  <svg
                    className="size-4 text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                  <span className="font-semibold text-emerald-600">+12%</span>
                  <span className="text-gray-600 dark:text-gray-400">from last month</span>
                </div>
              </div>

              <div className="space-y-2 rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
                <div className="flex items-baseline gap-2">
                  <svg
                    className="size-5 shrink-0 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <p className="text-lg leading-5 font-medium text-gray-600 dark:text-gray-400">
                    Active Users
                  </p>
                </div>
                <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">2,340</p>
                <div className="flex items-center gap-2 text-sm">
                  <svg
                    className="size-4 text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                  <span className="font-semibold text-emerald-600">+8%</span>
                  <span className="text-gray-600 dark:text-gray-400">from last month</span>
                </div>
              </div>

              <div className="space-y-2 rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
                <div className="flex items-baseline gap-2">
                  <svg
                    className="size-5 shrink-0 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                  <p className="text-lg leading-5 font-medium text-gray-600 dark:text-gray-400">
                    New Projects
                  </p>
                </div>
                <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">12</p>
                <div className="flex items-center gap-2 text-sm">
                  <svg
                    className="size-4 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 17h8m0 0V9m0 8l-8-8-4 4-6 6"
                    />
                  </svg>
                  <span className="font-semibold text-red-600">-3%</span>
                  <span className="text-gray-600 dark:text-gray-400">from last month</span>
                </div>
              </div>

              <div className="space-y-2 rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Avg. Response
                  </p>
                  <svg
                    className="size-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">2.4h</p>
                <div className="flex items-center gap-2 text-sm">
                  <svg
                    className="size-4 text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                  <span className="font-semibold text-emerald-600">+5%</span>
                  <span className="text-gray-600 dark:text-gray-400">from last month</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
              <div className="border-b border-gray-200 px-4 py-3 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Recent Activity
                </h2>
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Content goes here…
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function MyCustomComponent3() {
  return (
    <div className="mx-auto max-w-7xl space-y-16 p-4">
      {/* DESCRIPTION LISTS */}
      <section className="space-y-16">
        {/* Global Rules Console - Ref: Tailwind UI Card Headings + Description Lists */}
        <div className="mb-8">
          <div className="mb-4 flex items-baseline gap-2">
            <svg
              className="size-5 shrink-0 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Global Rules Console
            </h3>
          </div>
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-gray-700">
              <h4 className="text-base font-bold text-gray-900 dark:text-gray-100">
                Global Safety Policy v2.4
              </h4>
              <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/40 dark:text-green-300">
                Active
              </span>
            </div>
            <dl className="divide-y divide-gray-200 px-6 py-4 dark:divide-gray-700">
              <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Last Modified
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 dark:text-gray-100">
                  Jan 24, 2026 by @admin
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Agent-Specific Instructions with Inheritance Indicator */}
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-gray-700">
            <div className="flex items-baseline gap-2">
              <h3 className="text-base font-bold text-gray-900 dark:text-gray-100">
                Agent Instructions
              </h3>
              <svg
                className="size-4 shrink-0 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <button
              type="button"
              className="rounded-sm border border-gray-300 bg-white px-3 py-1.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              Override
            </button>
          </div>
          <div className="space-y-4 px-6 py-4">
            <div className="flex items-start gap-3">
              <svg
                className="mt-0.5 h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  PII Redaction
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Inherited from Global Policy
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Rule Builder - Grid List Cards */}
        <div className="mb-8">
          <div className="mb-4 flex items-baseline gap-2">
            <svg
              className="size-5 shrink-0 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Rule Builder</h3>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Tone</h4>
                <textarea
                  rows={3}
                  className="block w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                  placeholder="Describe the desired tone…"
                />
                <select className="block w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100">
                  <option>Strict</option>
                  <option>Suggestion</option>
                </select>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Tools</h4>
                <textarea
                  rows={3}
                  className="block w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                  placeholder="Specify allowed tools…"
                />
                <select className="block w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100">
                  <option>Strict</option>
                  <option>Suggestion</option>
                </select>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  Data Access
                </h4>
                <textarea
                  rows={3}
                  className="block w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                  placeholder="Define data access rules…"
                />
                <select className="block w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100">
                  <option>Strict</option>
                  <option>Suggestion</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Conflict Detection Warning */}
        <div className="rounded-md border-l-4 border-red-400 bg-red-50 p-4 dark:border-red-500 dark:bg-red-900/40">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-600 dark:text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800 dark:text-red-300">
                Conflict Detected
              </h3>
              <div className="mt-2 text-sm text-red-700 dark:text-red-400">
                <p>This local instruction contradicts the global safety policy for PII handling.</p>
              </div>
              <div className="mt-4">
                <div className="-mx-2 -my-1.5 flex">
                  <button
                    type="button"
                    className="rounded-sm px-2 py-1.5 text-sm font-semibold text-red-800 transition-colors hover:bg-red-100 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-red-500 dark:text-red-300 dark:hover:bg-red-900/40"
                  >
                    Review conflict
                  </button>
                  <button
                    type="button"
                    className="ml-3 rounded-sm px-2 py-1.5 text-sm font-semibold text-red-800 transition-colors hover:bg-red-100 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-red-500 dark:text-red-300 dark:hover:bg-red-900/40"
                  >
                    Revert to global
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rule Simulator - Reasoning Trace */}
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-700">
            <h3 className="text-base font-bold text-gray-900 dark:text-gray-100">
              Reasoning Trace
            </h3>
          </div>
          <div className="space-y-4 px-6 py-4">
            <div className="rounded-sm border-l-4 border-red-500 bg-gray-50 p-4 dark:bg-gray-800">
              <p className="font-mono text-sm text-gray-900 dark:text-gray-100">
                Rule: PII_REDACTION_STRICT
              </p>
              <p className="mt-1 font-mono text-sm text-gray-500 dark:text-gray-400">
                Triggered: Credit card number detected in response
              </p>
              <p className="mt-1 font-mono text-sm text-gray-500 dark:text-gray-400">
                Action: Response blocked
              </p>
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-sm border border-transparent bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
            >
              <svg
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.392 1.272 1.05 1.272h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9.75l2.715 2.715M14.25 12l2.715-2.715m-2.715 2.715l-2.715 2.715"
                />
              </svg>
              Generate fix suggestion
            </button>
          </div>
        </div>

        {/* Change Review - High Risk Deployment */}
        <div className="rounded-lg border-2 border-amber-200 bg-amber-50 p-4 dark:border-amber-700 dark:bg-amber-900/40">
          <div className="flex items-center gap-3">
            <svg
              className="size-5 shrink-0 text-amber-600 dark:text-amber-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <div className="space-y-1">
              <h4 className="font-bold text-amber-900 dark:text-amber-200">High Risk Deployment</h4>
              <p className="text-sm text-amber-800 dark:text-amber-300">
                This version modifies <strong>Tool Access</strong> permissions. Review the security
                diff before proceeding.
              </p>
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            <button
              type="button"
              className="rounded-sm bg-amber-600 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-amber-700 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-amber-500 dark:bg-amber-500 dark:hover:bg-amber-600"
            >
              Review Diff
            </button>
            <button
              type="button"
              className="text-sm font-semibold text-amber-700 underline transition-colors hover:text-amber-600 dark:text-amber-300 dark:hover:text-amber-200"
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Publish Gate with Rollback Selection */}
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-700">
            <h3 className="text-base font-bold text-gray-900 dark:text-gray-100">
              Publish Settings
            </h3>
          </div>
          <div className="space-y-4 px-6 py-4">
            <div>
              <label
                htmlFor="rollback-version"
                className="block text-sm font-semibold text-gray-900 dark:text-gray-100"
              >
                Rollback Version
              </label>
              <select
                id="rollback-version"
                className="mt-1 block w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
              >
                <option>v2.3 (Jan 20, 2026)</option>
                <option>v2.2 (Jan 15, 2026)</option>
                <option>v2.1 (Jan 10, 2026)</option>
              </select>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Select a version to rollback to if issues occur
              </p>
            </div>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                className="rounded-sm border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                type="button"
                className="rounded-sm border border-transparent bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                Publish
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Description Lists
        </h2>

        {/* Narrow with hidden labels */}
        <div className="mb-8 rounded-lg bg-white shadow dark:bg-gray-900">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-gray-100">
              Narrow with hidden labels
            </h3>
            <dl className="space-y-4">
              <div>
                <dt className="sr-only">Full name</dt>
                <dd className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Jane Cooper
                </dd>
              </div>
              <div>
                <dt className="sr-only">Application for</dt>
                <dd className="text-sm text-gray-500 dark:text-gray-400">Backend Developer</dd>
              </div>
              <div>
                <dt className="sr-only">Email address</dt>
                <dd className="text-sm text-gray-500 dark:text-gray-400">
                  jane.cooper@example.com
                </dd>
              </div>
              <div>
                <dt className="sr-only">Salary expectation</dt>
                <dd className="text-sm text-gray-900 dark:text-gray-100">$120,000</dd>
              </div>
              <div>
                <dt className="sr-only">About</dt>
                <dd className="text-sm text-gray-500 dark:text-gray-400">
                  Experienced backend developer with a passion for building scalable systems.
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Two-column */}
        <div className="rounded-lg bg-white shadow dark:bg-gray-900">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-gray-100">
              Two-column
            </h3>
            <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100">Jane Cooper</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Application for
                </dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100">Backend Developer</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100">
                  jane.cooper@example.com
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Salary expectation
                </dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100">$120,000</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">About</dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100">
                  Experienced backend developer with a passion for building scalable systems and
                  working with distributed architectures.
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Attachments
                </dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100">
                  <ul className="divide-y divide-gray-200 rounded-md border border-gray-200 dark:divide-gray-700 dark:border-gray-700">
                    <li className="flex items-center justify-between py-3 pr-4 pl-3 text-sm">
                      <div className="flex w-0 flex-1 items-center">
                        <span className="ml-2 w-0 flex-1 truncate">
                          resume_back_end_developer.pdf
                        </span>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <button
                          type="button"
                          className="font-semibold text-indigo-600 underline hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                        >
                          Download
                        </button>
                      </div>
                    </li>
                    <li className="flex items-center justify-between py-3 pr-4 pl-3 text-sm">
                      <div className="flex w-0 flex-1 items-center">
                        <span className="ml-2 w-0 flex-1 truncate">cover_letter.pdf</span>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <button
                          type="button"
                          className="font-semibold text-indigo-600 underline hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                        >
                          Download
                        </button>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* CARD HEADINGS */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">Card Headings</h2>

        {/* With description and action */}
        <div className="rounded-lg bg-white shadow dark:bg-gray-900">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  Profile Information
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Update your account&apos;s profile information and email address.
                </p>
              </div>
              <button
                type="button"
                className="ml-3 inline-flex items-center rounded-sm border border-transparent bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* COMMAND PALETTE */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Command Palettes
        </h2>

        {/* With preview */}
        <div className="overflow-hidden rounded-lg bg-white shadow-xl dark:bg-gray-900">
          <div className="flex">
            <div className="w-1/2 border-r border-gray-200 dark:border-gray-700">
              <div className="border-b border-gray-200 p-4 dark:border-gray-700">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                />
              </div>
              <ul className="max-h-96 overflow-y-auto">
                <li className="cursor-pointer border-b border-gray-100 px-4 py-3 hover:bg-gray-50">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Project Proposal</p>
                      <p className="text-xs text-gray-500">Updated 2 days ago</p>
                    </div>
                  </div>
                </li>
                <li className="cursor-pointer border-b border-gray-100 px-4 py-3 hover:bg-gray-50">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Meeting Notes</p>
                      <p className="text-xs text-gray-500">Updated 5 days ago</p>
                    </div>
                  </div>
                </li>
                <li className="cursor-pointer px-4 py-3 hover:bg-gray-50">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Q4 Report</p>
                      <p className="text-xs text-gray-500">Updated 1 week ago</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-1/2 bg-gray-50 p-6 dark:bg-gray-800">
              <h4 className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">Preview</h4>
              <div className="space-y-2 text-xs text-gray-500 dark:text-gray-400">
                <p>Select an item from the list to preview its contents here.</p>
                <div className="mt-4 rounded-md bg-white p-4 dark:bg-gray-900">
                  <p className="text-gray-600 dark:text-gray-400">
                    Document preview will appear in this area when an item is selected.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALERTS */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Alerts</h2>

        {/* Success Alert */}
        <div className="mb-4 rounded-md bg-green-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">Successfully uploaded</h3>
              <div className="mt-2 text-sm text-green-700">
                <p>Your file has been uploaded and is now being processed.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Warning Alert */}
        <div className="mb-4 rounded-md bg-yellow-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Attention needed</h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  Your subscription will expire in 7 days. Please update your payment information.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Error Alert with Actions */}
        <div className="mb-4 rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                There were errors with your submission
              </h3>
              <div className="mt-2 text-sm text-red-700">
                <ul className="list-disc space-y-1 pl-5">
                  <li>Email address is required</li>
                  <li>Password must be at least 8 characters</li>
                </ul>
              </div>
              <div className="mt-4">
                <div className="-mx-2 -my-1.5 flex">
                  <button
                    type="button"
                    className="rounded-sm px-2 py-1.5 text-sm font-semibold text-red-800 transition-colors hover:bg-red-100 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-red-500 dark:text-red-300 dark:hover:bg-red-900/40"
                  >
                    View details
                  </button>
                  <button
                    type="button"
                    className="ml-3 rounded-sm px-2 py-1.5 text-sm font-semibold text-red-800 transition-colors hover:bg-red-100 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-red-500 dark:text-red-300 dark:hover:bg-red-900/40"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Alert with Border */}
        <div className="border-l-4 border-blue-400 bg-blue-50 p-4 dark:border-blue-500 dark:bg-blue-900/40">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-blue-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-700 dark:text-blue-300">
                A new software update is available.{' '}
                <button
                  type="button"
                  className="font-semibold text-blue-700 underline hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200"
                >
                  See what&apos;s new
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM LAYOUTS */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">Form Layouts</h2>

        {/* Stacked Form */}
        <div className="mb-8 rounded-lg bg-white shadow dark:bg-gray-900">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-gray-100">
              Personal Information
            </h3>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold text-gray-900 dark:text-gray-100"
                >
                  First name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold text-gray-900 dark:text-gray-100"
                >
                  Last name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  className="mt-1 block w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900 dark:text-gray-100"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                />
              </div>

              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-semibold text-gray-900 dark:text-gray-100"
                >
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="mt-1 block w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="about"
                  className="block text-sm font-semibold text-gray-900 dark:text-gray-100"
                >
                  About
                </label>
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="mt-1 block w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                ></textarea>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Brief description for your profile.
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                type="button"
                className="rounded-sm border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-sm border border-transparent bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>

        {/* Two Column Form */}
        <div className="rounded-lg bg-white shadow dark:bg-gray-900">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-gray-100">
              Company Details
            </h3>
            <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="company-name"
                  className="block text-sm font-semibold text-gray-900 dark:text-gray-100"
                >
                  Company name
                </label>
                <input
                  type="text"
                  name="company-name"
                  id="company-name"
                  className="mt-1 block w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                />
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="website"
                  className="block text-sm font-semibold text-gray-900 dark:text-gray-100"
                >
                  Website
                </label>
                <input
                  type="text"
                  name="website"
                  id="website"
                  className="mt-1 block w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                />
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-semibold text-gray-900 dark:text-gray-100"
                >
                  Street address
                </label>
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  className="mt-1 block w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="city"
                  className="block text-sm font-semibold text-gray-900 dark:text-gray-100"
                >
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="mt-1 block w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                  State / Province
                </label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  className="mt-1 block w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-semibold text-gray-900 dark:text-gray-100"
                >
                  ZIP / Postal code
                </label>
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  className="mt-1 block w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                type="button"
                className="rounded-sm border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-sm border border-transparent bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CALENDARS */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Calendars</h2>

        {/* Month View Calendar */}
        <div className="rounded-lg bg-white shadow">
          <div className="px-4 py-5 sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">January 2026</h3>
              <div className="flex space-x-2">
                <button
                  type="button"
                  className="rounded-sm p-2 text-gray-600 transition-colors hover:bg-gray-100 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-gray-500 dark:text-gray-400 dark:hover:bg-gray-800"
                  aria-label="Previous month"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="rounded-sm p-2 text-gray-600 transition-colors hover:bg-gray-100 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-gray-500 dark:text-gray-400 dark:hover:bg-gray-800"
                  aria-label="Next month"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-px overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700">
              <div className="bg-gray-50 p-2 text-center text-xs font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                Sun
              </div>
              <div className="bg-gray-50 p-2 text-center text-xs font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                Mon
              </div>
              <div className="bg-gray-50 p-2 text-center text-xs font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                Tue
              </div>
              <div className="bg-gray-50 p-2 text-center text-xs font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                Wed
              </div>
              <div className="bg-gray-50 p-2 text-center text-xs font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                Thu
              </div>
              <div className="bg-gray-50 p-2 text-center text-xs font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                Fri
              </div>
              <div className="bg-gray-50 p-2 text-center text-xs font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                Sat
              </div>

              {/* Calendar days */}
              <div className="h-24 bg-white p-2 text-sm text-gray-400 dark:bg-gray-900 dark:text-gray-500">
                29
              </div>
              <div className="h-24 bg-white p-2 text-sm text-gray-400 dark:bg-gray-900 dark:text-gray-500">
                30
              </div>
              <div className="h-24 bg-white p-2 text-sm text-gray-400 dark:bg-gray-900 dark:text-gray-500">
                31
              </div>
              <div className="h-24 bg-white p-2 text-sm text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                1
              </div>
              <div className="h-24 bg-white p-2 text-sm text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                2
              </div>
              <div className="h-24 bg-white p-2 text-sm text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                3
              </div>
              <div className="h-24 bg-white p-2 text-sm text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                4
              </div>

              <div className="h-24 bg-white p-2 text-sm text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                5
              </div>
              <div className="h-24 bg-white p-2 text-sm text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                6
              </div>
              <div className="h-24 bg-white p-2 text-sm text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                7
              </div>
              <div className="h-24 bg-white p-2 text-sm text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                8
              </div>
              <div className="h-24 bg-white p-2 text-sm text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                9
              </div>
              <div className="h-24 bg-white p-2 text-sm text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                10
              </div>
              <div className="h-24 bg-white p-2 text-sm text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                11
              </div>

              <div className="h-24 bg-white p-2 text-sm text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                12
              </div>
              <div className="h-24 bg-white p-2 text-sm text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                13
              </div>
              <div className="h-24 bg-white p-2 text-sm text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                14
              </div>
              <div className="h-24 bg-white p-2 text-sm text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                15
              </div>
              <div className="h-24 bg-white p-2 text-sm text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                16
              </div>
              <div className="h-24 bg-white p-2 text-sm text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                17
              </div>
              <div className="h-24 bg-white p-2 text-sm text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                18
              </div>

              <div className="h-24 bg-white p-2 text-sm text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                19
              </div>
              <div className="h-24 bg-white p-2 text-sm text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                20
              </div>
              <div className="h-24 bg-white p-2 text-sm text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                21
              </div>
              <div className="h-24 bg-white p-2 text-sm text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                22
              </div>
              <div className="h-24 bg-white p-2 text-sm text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                23
              </div>
              <div className="h-24 bg-white p-2 text-sm text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                24
              </div>
              <div className="h-24 bg-white p-2 text-sm text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                25
              </div>

              <div className="h-24 bg-white p-2 text-sm text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                26
              </div>
              <div className="h-24 border-2 border-indigo-500 bg-indigo-50 p-2 text-sm font-semibold text-gray-900 dark:border-indigo-400 dark:bg-indigo-900/40 dark:text-gray-100">
                27
                <div className="mx-auto mt-1 h-1 w-1 rounded-full bg-indigo-500 dark:bg-indigo-400"></div>
              </div>
              <div className="h-24 bg-white p-2 text-sm text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                28
              </div>
              <div className="h-24 bg-white p-2 text-sm text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                29
              </div>
              <div className="h-24 bg-white p-2 text-sm text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                30
              </div>
              <div className="h-24 bg-white p-2 text-sm text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                31
              </div>
              <div className="h-24 bg-white p-2 text-sm text-gray-400 dark:bg-gray-900 dark:text-gray-500">
                1
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">Stats</h2>

        {/* Simple Stats */}
        <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-900">
            <div className="px-4 py-5 sm:p-6">
              <dt className="truncate text-sm font-medium text-gray-500 dark:text-gray-400">
                Total Revenue
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-100">
                $48,574
              </dd>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-900">
            <div className="px-4 py-5 sm:p-6">
              <dt className="truncate text-sm font-medium text-gray-500 dark:text-gray-400">
                Active Users
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-100">
                2,456
              </dd>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-900">
            <div className="px-4 py-5 sm:p-6">
              <dt className="truncate text-sm font-medium text-gray-500 dark:text-gray-400">
                Conversion Rate
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-100">
                3.65%
              </dd>
            </div>
          </div>
        </div>

        {/* Stats with Trending */}
        <div className="rounded-lg bg-white shadow dark:bg-gray-900">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="mb-6 text-lg font-medium text-gray-900 dark:text-gray-100">
              Performance Metrics
            </h3>
            <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Total Subscribers
                </dt>
                <dd className="mt-1 flex items-baseline justify-between">
                  <div className="flex items-baseline text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    71,897
                  </div>
                  <div className="inline-flex items-baseline rounded-full bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800 dark:bg-green-900/40 dark:text-green-300">
                    <svg
                      className="h-5 w-5 flex-shrink-0 self-center text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Increased by</span>
                    12%
                  </div>
                </dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Average Open Rate
                </dt>
                <dd className="mt-1 flex items-baseline justify-between">
                  <div className="flex items-baseline text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    58.16%
                  </div>
                  <div className="inline-flex items-baseline rounded-full bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800 dark:bg-green-900/40 dark:text-green-300">
                    <svg
                      className="h-5 w-5 flex-shrink-0 self-center text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Increased by</span>
                    2.02%
                  </div>
                </dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Average Click Rate
                </dt>
                <dd className="mt-1 flex items-baseline justify-between">
                  <div className="flex items-baseline text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    24.57%
                  </div>
                  <div className="inline-flex items-baseline rounded-full bg-red-100 px-2.5 py-0.5 text-sm font-medium text-red-800 dark:bg-red-900/40 dark:text-red-300">
                    <svg
                      className="h-5 w-5 flex-shrink-0 self-center text-red-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Decreased by</span>
                    4.05%
                  </div>
                </dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Monthly Revenue
                </dt>
                <dd className="mt-1 flex items-baseline justify-between">
                  <div className="flex items-baseline text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    $15,642
                  </div>
                  <div className="inline-flex items-baseline rounded-full bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800 dark:bg-green-900/40 dark:text-green-300">
                    <svg
                      className="h-5 w-5 flex-shrink-0 self-center text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Increased by</span>
                    8.24%
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* ACTION PANELS */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">Action Panels</h2>
        <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
          Following Playbook directives: Surface padding px-4 py-5 sm:p-6
        </p>

        {/* Simple Action Panel */}
        <div className="mb-8 rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                  Manage subscription
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Change your plan or cancel your subscription.
                </p>
              </div>
              <button
                type="button"
                className="ml-3 inline-flex items-center rounded-sm border border-transparent bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                Manage
              </button>
            </div>
          </div>
        </div>

        {/* Action Panel with Toggle */}
        <div className="mb-8 rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Enable notifications
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Get notified when new comments are posted.
                </p>
              </div>
              <button
                type="button"
                className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:bg-gray-700"
                role="switch"
                aria-checked="false"
                aria-label="Enable notifications"
              >
                <span className="inline-block h-5 w-5 translate-x-0 transform rounded-full bg-white shadow transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Action Panel with Well (Destructive) */}
        <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-5 sm:p-6 dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                Delete account
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                No longer want to use our service? This action cannot be undone.
              </p>
            </div>
            <button
              type="button"
              className="ml-3 inline-flex items-center rounded-sm border border-transparent bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-red-500 dark:bg-red-500 dark:hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </section>

      {/* EMPTY STATES */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">Empty States</h2>

        <div className="space-y-8">
          {/* Simple Empty State */}
          <div className="rounded-lg bg-white shadow dark:bg-gray-900">
            <div className="px-4 py-5 sm:p-6">
              <div className="text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                  />
                </svg>
                <h3 className="mt-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
                  No projects
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Get started by creating a new project.
                </p>
                <div className="mt-6">
                  <button
                    type="button"
                    className="inline-flex items-center rounded-sm border border-transparent bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                  >
                    New Project
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Empty State with Dashed Border */}
          <div className="rounded-lg bg-white shadow dark:bg-gray-900">
            <div className="px-4 py-5 sm:p-6">
              <div className="rounded-lg border-2 border-dashed border-gray-300 p-12 text-center dark:border-gray-600">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <h3 className="mt-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
                  No files
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Drag and drop files here, or click to browse.
                </p>
                <div className="mt-6">
                  <button
                    type="button"
                    className="inline-flex items-center rounded-sm border border-transparent bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                  >
                    Upload file
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NAVIGATION */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">Navigation</h2>

        {/* Navbar - height h-16 per Playbook */}
        <nav className="mb-8 rounded-lg bg-white shadow dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <div className="h-8 w-8 rounded-sm bg-indigo-600" aria-hidden="true" />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <button
                    type="button"
                    className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-semibold text-gray-900 dark:text-gray-100"
                  >
                    Dashboard
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-600 hover:border-gray-300 hover:text-gray-900 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-100"
                  >
                    Team
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-600 hover:border-gray-300 hover:text-gray-900 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-100"
                  >
                    Projects
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Tabs */}
        <div className="mb-8 rounded-lg bg-white shadow dark:bg-gray-900">
          <div className="px-4 py-5 sm:p-6">
            <nav
              className="flex space-x-8 border-b border-gray-200 dark:border-gray-700"
              aria-label="Tabs"
            >
              <button
                type="button"
                className="border-b-2 border-indigo-500 px-1 py-4 text-sm font-semibold text-indigo-600 dark:text-indigo-400"
              >
                My Account
              </button>
              <button
                type="button"
                className="border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              >
                Company
              </button>
              <button
                type="button"
                className="border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              >
                Team
              </button>
            </nav>
          </div>
        </div>

        {/* Vertical Navigation with Badges */}
        <div className="rounded-lg bg-white shadow dark:bg-gray-900">
          <div className="px-4 py-5 sm:p-6">
            <nav className="space-y-1" aria-label="Sidebar">
              <button
                type="button"
                className="group flex w-full items-center rounded-sm bg-gray-100 px-3 py-2 text-left text-sm font-semibold text-gray-900 dark:bg-gray-800 dark:text-gray-100"
              >
                <svg
                  className="mr-3 h-6 w-6 text-gray-500 dark:text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
                Inbox
                <span className="ml-auto inline-block rounded-full bg-gray-200 px-3 py-0.5 text-xs font-medium text-gray-900 dark:bg-gray-700 dark:text-gray-100">
                  12
                </span>
              </button>
              <button
                type="button"
                className="group flex w-full items-center rounded-sm px-3 py-2 text-left text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
              >
                <svg
                  className="mr-3 h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
                Projects
                <span className="ml-auto inline-block rounded-full bg-red-100 px-3 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900/40 dark:text-red-300">
                  5
                </span>
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* MODALS */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">Modal Dialogs</h2>
        <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
          Playbook: max-w-md for simple modals, primary action on right
        </p>

        <div className="space-y-8">
          {/* Simple Confirmation */}
          <div className="rounded-lg bg-white shadow dark:bg-gray-900">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="mb-4 text-base font-semibold text-gray-900 dark:text-gray-100">
                Simple Confirmation
              </h3>
              <div className="rounded-lg bg-gray-100 p-8 dark:bg-gray-800">
                <div className="mx-auto max-w-md rounded-lg bg-white shadow-xl dark:bg-gray-900">
                  <div className="px-4 pt-5 pb-4 sm:p-6">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                      Deactivate account
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Are you sure? This action cannot be undone.
                    </p>
                  </div>
                  <div className="flex flex-row-reverse gap-3 bg-gray-50 px-4 py-3 dark:bg-gray-800">
                    <button
                      type="button"
                      className="rounded-sm bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-red-500 dark:bg-red-500 dark:hover:bg-red-600"
                    >
                      Deactivate
                    </button>
                    <button
                      type="button"
                      className="rounded-sm border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-50 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-gray-500 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal with Icon */}
          <div className="rounded-lg bg-white shadow dark:bg-gray-900">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="mb-4 text-base font-semibold text-gray-900 dark:text-gray-100">
                With Warning Icon
              </h3>
              <div className="rounded-lg bg-gray-100 p-8 dark:bg-gray-800">
                <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/40">
                    <svg
                      className="h-6 w-6 text-red-600 dark:text-red-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 text-center">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                      Delete project
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      All data will be permanently removed.
                    </p>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      className="rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-50 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-gray-500 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="rounded-sm bg-red-600 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-red-500 dark:bg-red-500 dark:hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function MyCustomComponent6() {
  return <MyCustomComponentBase label="Tab6" />
}

export default function Home({ posts }) {
  const conditionOptions = [
    { label: 'Class1', className: 'bg-red-500 text-white' },
    { label: 'Class2', className: 'bg-blue-500 text-white' },
    { label: 'Class3', className: 'bg-green-500 text-white' },
    { label: 'Class4', className: 'bg-purple-500 text-white' },
  ]
  const [conditionLevel, setConditionLevel] = useState(conditionOptions[0].label)
  const activeCondition = conditionOptions.find((option) => option.label === conditionLevel)
  const tabGroups = [
    {
      label: 'Demo 1',
      items: [
        {
          title: 'Catch me if you can',
          body: 'Drop your content here and keep the layout consistent.',
          footer: 'Status: Good — In progress',
        },
        {
          title: 'UI pattern playbook — Scenarios',
          footer: 'Status: Ideal — Completed',
          slot: <MyCustomComponent1 />,
        },
        {
          title: 'Third Item',
          body: 'Each item uses a header/body/footer structure.',
          footer: 'Status: Critical — Error',
        },
      ],
    },
    {
      label: 'Demo 2',
      items: [
        {
          title: '2',
          body: 'Older items can live in a separate tab.',
          footer: 'Status: Neutral — Inactive',
          slot: <MyCustomComponent2 />,
        },
      ],
    },
    {
      label: 'Demo 3',
      items: [
        {
          title: '3',
          body: 'Older items can live in a separate tab.',
          footer: 'Status: Neutral — Inactive',
          slot: <MyCustomComponent3 />,
        },
      ],
    },
    {
      label: 'Kitchen Sink',
      items: [
        {
          title: '4',
          body: 'Older items can live in a separate tab.',
          footer: 'Status: Warning — Needs review',
          slot: <MyCustomComponent4 />,
        },
      ],
    },
    {
      label: 'Kitchen Sink Styled',
      items: [
        {
          title: '5',
          body: 'Older items can live in a separate tab.',
          footer: 'Status: Neutral — Inactive',
          slot: <MyCustomComponent5 />,
        },
      ],
    },
    {
      label: '6',
      items: [
        {
          title: '6',
          body: 'Older items can live in a separate tab.',
          footer: 'Status: Neutral — Inactive',
          slot: <MyCustomComponent6 />,
        },
      ],
    },
  ]

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="w-full space-y-5 pt-6 pb-8">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            <code>ui-pattern-playbook.md</code>
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
          <div className="flex w-full justify-center pt-6">
            <Tab.Group>
              <div
                className={[
                  'w-full rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900',
                  activeCondition?.className,
                ]
                  .filter(Boolean)
                  .join(' ')}
                data-condition-level={conditionLevel}
              >
                <div className="mb-4 text-center text-sm font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
                  Render Zone
                </div>
                {/* <div className="flex justify-center">
                  <div className="mb-4 flex flex-wrap justify-center gap-2">
                    {conditionOptions.map((option) => (
                      <button
                        key={option.label}
                        type="button"
                        onClick={() => setConditionLevel(option.label)}
                        className={[
                          'rounded-full border px-3 py-1 text-xs font-semibold tracking-wide uppercase transition',
                          option.label === conditionLevel
                            ? 'border-gray-900 bg-gray-900 text-white dark:border-gray-100 dark:bg-gray-100 dark:text-gray-900'
                            : 'border-gray-200 bg-gray-100 text-gray-700 hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700',
                        ].join(' ')}
                        aria-label={`Set condition ${option.label}`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div> */}
                <Tab.List
                  className="flex justify-center gap-2"
                  data-condition-level={conditionLevel}
                >
                  {tabGroups.map((group) => (
                    <Tab
                      key={group.label}
                      className={({ selected }) =>
                        [
                          'rounded-full px-4 py-2 text-sm font-medium transition',
                          selected
                            ? 'bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700',
                        ].join(' ')
                      }
                    >
                      {group.label}
                    </Tab>
                  ))}
                </Tab.List>
                <Tab.Panels className="mt-4 space-y-4" data-condition-level={conditionLevel}>
                  {tabGroups.map((group) => (
                    <Tab.Panel key={group.label} className="space-y-4">
                      {group.items.map((item) => (
                        <TabItemCard
                          key={item.title}
                          title={item.title}
                          body={item.body}
                          footer={item.footer}
                          slot={item.slot}
                        />
                      ))}
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </div>
            </Tab.Group>
          </div>
        </div>
        {/* <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl leading-8 font-bold tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul> */}
      </div>
      {/* {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )} */}
      {/* {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
