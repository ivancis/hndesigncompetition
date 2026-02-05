'use client'

import {
  ArrowRight,
  CheckCircle,
  Trash2,
  XCircle,
  Zap,
  PlusCircle,
  Info,
  Copy,
  Edit2,
  RefreshCcw,
  ThumbsUp,
  ChevronDown,
  File,
  AlertTriangle,
  ArrowLeft,
  ArrowUpRight,
  ArrowDownLeft,
  Check,
  Folder,
  FolderPlus,
  Plus,
  UploadCloud,
  Upload,
  Table,
  MessageCircle,
  Inbox,
} from 'react-feather'

/**
 * Kitchen Sink / UI Kit Stress Test component.
 * Renders a comprehensive set of HTML elements for consistency testing.
 * Styled per ui-pattern-playbook/: Tailwind only, typography/spacing from scale.
 */
export default function MyCustomComponent5() {
  return (
    <div className="mx-auto max-w-7xl space-y-16 p-4">
      {/* DESCRIPTION LISTS */}
      <section className="space-y-16">
        {/* Global Rules Console - Ref: Tailwind UI Card Headings + Description Lists */}
        <div className="mb-8">
          <div className="overflow-hidden rounded-lg border-2 bg-white">
            <div className="flex items-center justify-between border-b-2 px-6 py-4">
              <h4 className="text-base font-bold text-black">Global Safety Policy v2.4</h4>
              <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium">
                Active
              </span>
            </div>
            <dl className="divide-grey-200 divide-grey-700 divide-y-2 px-6 py-4">
              <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-grey-500 text-sm font-medium">Last Modified</dt>
                <dd className="mt-1 text-sm text-black sm:col-span-2 sm:mt-0">
                  Jan 24, 2026 by @admin
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Agent-Specific Instructions with Inheritance Indicator */}
        <div className="overflow-hidden rounded-lg border-2 bg-white">
          <div className="flex items-center justify-between border-b-2 px-6 py-4">
            <h3 className="text-base font-bold">Agent Instructions</h3>
            <button
              type="button"
              className="text-md focus:outline-primary-500 bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 min-w-32 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline-1 focus:outline-offset-2"
            >
              Override
            </button>
          </div>
          <div className="space-y-4 px-6 py-4">
            <div className="flex items-start gap-3">
              <p className="text-sm font-medium text-black">PII Redaction</p>
              <p className="text-grey-500 text-sm">Inherited from Global Policy</p>
            </div>
          </div>
        </div>

        {/* Rule Builder - Grid List Cards */}
        <div className="mb-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-lg border-2 bg-white p-4">
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-black">Tone</h4>
                <textarea
                  rows={3}
                  className="focus:outline-primary-500 border-grey-600 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-600 block w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline-1 focus:outline-offset-2"
                  placeholder="Describe the desired tone…"
                />
                <select className="focus:outline-primary-500 border-grey-600 focus:outline-primary-600 block w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline-1 focus:outline-offset-2">
                  <option>Strict</option>
                  <option>Suggestion</option>
                </select>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border-2 bg-white p-4">
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-black">Tools</h4>
                <textarea
                  rows={3}
                  className="focus:outline-primary-500 border-grey-600 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-600 block w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline-1 focus:outline-offset-2"
                  placeholder="Specify allowed tools…"
                />
                <select className="focus:outline-primary-500 border-grey-600 focus:outline-primary-600 block w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline-1 focus:outline-offset-2">
                  <option>Strict</option>
                  <option>Suggestion</option>
                </select>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border-2 bg-white p-4">
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-black">Data Access</h4>
                <textarea
                  rows={3}
                  className="focus:outline-primary-500 border-grey-600 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-600 block w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline-1 focus:outline-offset-2"
                  placeholder="Define data access rules…"
                />
                <select className="focus:outline-primary-500 border-grey-600 focus:outline-primary-600 block w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline-1 focus:outline-offset-2">
                  <option>Strict</option>
                  <option>Suggestion</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* ——— 8. Common Actions ——— */}
        <section className="space-y-4">
          <h4>8. Common Actions</h4>
          <p>Add, Cancel, Clear, Close, Copy, Delete, Edit, Next, Refresh, Remove, Reset</p>
          <div className="flex flex-wrap gap-2">
            {/* Add — primary */}
            <button
              type="button"
              className="text-md focus:outline-primary-500 bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 inline-flex min-w-32 items-center gap-2 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline-1 focus:outline-offset-2"
            >
              <PlusCircle className="h-5 w-5" />
              Add document
            </button>

            {/* Cancel — secondary */}
            <button
              type="button"
              className="text-md active:bg-grey-200 hover:bg-grey-100 focus:outline-primary-600 rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline-1 focus:outline-offset-2"
            >
              Cancel
            </button>

            {/* Clear — secondary with icon */}
            <button
              type="button"
              className="text-md active:bg-grey-200 hover:bg-grey-100 focus:outline-primary-600 inline-flex items-center gap-2 rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline-1 focus:outline-offset-2"
            >
              <XCircle className="h-5 w-5 flex-shrink-0" />
              Clear
            </button>

            {/* Close — ghost icon button */}
            <button
              type="button"
              className="text-grey-400 hover:bg-grey-100 hover:text-grey-600 focus:outline-grey-500 focus:outline-primary-600 flex h-10 w-10 items-center justify-center rounded-md focus:outline-1 focus:outline-offset-2"
              aria-label="Close"
            >
              <Trash2 className="h-5 w-5 flex-shrink-0" />
            </button>

            {/* Copy — secondary with icon */}
            <button
              type="button"
              className="text-md active:bg-grey-200 hover:bg-grey-100 focus:outline-primary-600 inline-flex items-center gap-2 rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline-1 focus:outline-offset-2"
              aria-label="Copy to clipboard"
            >
              <Copy className="h-5 w-5 flex-shrink-0" />
              Copy
            </button>

            <button
              type="button"
              className="text-md flex gap-2 rounded-md border-2 bg-red-300 px-4 py-2 font-semibold text-black transition-colors hover:bg-red-200 focus:outline-1 focus:outline-offset-2 focus:outline-red-500 focus:outline-red-600 active:bg-red-100"
            >
              <Trash2 className="h-5 w-5 flex-shrink-0" />
              Delete
            </button>

            {/* Edit — secondary with icon */}
            <button
              type="button"
              className="text-md active:bg-grey-200 hover:bg-grey-100 focus:outline-primary-600 inline-flex items-center gap-2 rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline-1 focus:outline-offset-2"
            >
              <Edit2 className="h-5 w-5 flex-shrink-0" />
              Edit
            </button>

            {/* Next — primary with icon */}
            <button
              type="button"
              className="text-md focus:outline-primary-500 bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 inline-flex items-center gap-2 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline-1 focus:outline-offset-2"
            >
              Next
              <ArrowRight className="h-5 w-5 flex-shrink-0" />
            </button>

            {/* Refresh — secondary with icon */}
            <button
              type="button"
              className="text-md active:bg-grey-200 hover:bg-grey-100 focus:outline-primary-600 inline-flex items-center gap-2 rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline-1 focus:outline-offset-2"
            >
              <RefreshCcw className="h-5 w-5 flex-shrink-0" />
              Refresh
            </button>

            {/* Remove — secondary with icon */}
            <button
              type="button"
              className="text-md active:bg-grey-200 hover:bg-grey-100 focus:outline-primary-600 inline-flex items-center gap-2 rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline-1 focus:outline-offset-2"
            >
              <Trash2 className="h-5 w-5 flex-shrink-0" />
              Remove
            </button>

            {/* Reset — link button */}
            <button
              type="button"
              className="text-primary-600 hover:text-primary-700 focus:outline-primary-500 focus:outline-primary-600 rounded-md px-3 py-2 text-sm font-semibold underline transition-colors focus:outline-1 focus:outline-offset-2"
            >
              Reset to defaults
            </button>
          </div>
        </section>

        {/* Rule Simulator - Reasoning Trace */}
        <div className="overflow-hidden rounded-lg border-2 bg-white">
          <div className="border-b-2 px-6 py-4">
            <h3 className="text-base font-bold text-black">Reasoning Trace</h3>
          </div>
          <div className="space-y-4 px-6 py-4">
            <div className="border border-l-8 border-red-500 bg-red-100 p-4">
              <p className="font-mono text-sm">Rule: PII_REDACTION_STRICT</p>
              <small className="mt-1 font-mono">
                Triggered: Patient scheduleling detected in response
              </small>
              <small className="mt-1 font-mono">Action: Resonse blocked</small>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="text-md bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 inline-flex items-center gap-2 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline-1 focus:outline-offset-2"
              >
                <ThumbsUp />
                Generate fix suggestion
              </button>
              <div className="mr-0 ml-auto flex overflow-hidden rounded-md border-2">
                <button className="text-md active:bg-grey-200 hover:bg-grey-100 focus:outline-primary-600 min-w-32 rounded-md py-2 font-semibold transition-colors focus:outline-1 focus:outline-offset-2">
                  Retry
                </button>
                <button className="text-md active:bg-grey-200 hover:bg-grey-100 focus:outline-primary-600 border-l-2 px-2 py-2 font-semibold text-black transition-colors focus:outline-1 focus:outline-offset-2">
                  <ChevronDown />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Publish Gate with Rollback Selection */}
        <div className="overflow-hidden rounded-lg border-2 bg-white">
          <div className="border-b-2 px-6 py-4">
            <h3 className="text-base font-bold text-black">Publish Settings</h3>
          </div>
          <div className="space-y-4 px-6 py-4">
            <div>
              <label htmlFor="rollback-version" className="block text-sm font-semibold text-black">
                Rollback Version
              </label>
              <select
                id="rollback-version"
                className="focus:outline-primary-500 border-grey-600 focus:outline-primary-600 mt-1 block w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline-1 focus:outline-offset-2"
              >
                <option>v2.3 (Jan 20, 2026)</option>
                <option>v2.2 (Jan 15, 2026)</option>
                <option>v2.1 (Jan 10, 2026)</option>
              </select>
              <p className="text-grey-500 mt-2 text-sm">
                Select a version to rollback to if issues occur
              </p>
            </div>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                className="text-md active:bg-grey-200 hover:bg-grey-100 focus:outline-primary-600 min-w-32 rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline-1 focus:outline-offset-2"
              >
                Cancel
              </button>
              <button
                type="button"
                className="text-md focus:outline-primary-500 bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 min-w-32 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline-1 focus:outline-offset-2"
              >
                Publish
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CARD HEADINGS */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-black">Card Headings</h2>

        {/* With description and action */}
        <div className="rounded-lg border-2 bg-white">
          <div className="px-4 py-2 sm:p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-base font-bold text-black">Profile Information</h3>
                <p className="text-grey-500 mt-1 text-sm">
                  Update your account&apos;s profile information and email address.
                </p>
              </div>
              <button
                type="button"
                className="text-md focus:outline-primary-500 bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 min-w-32 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline-1 focus:outline-offset-2"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* COMMAND PALETTE */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-black">Global rules</h2>
        {/* With preview */}
        <div className="overflow-hidden rounded-lg border-2 bg-white">
          <div className="flex">
            <div className="w-1/2 border-r-2">
              <div className="border-b-2 p-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="focus:outline-primary-500 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-600 w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline-1 focus:outline-offset-2"
                />
              </div>
              <ul className="max-h-96 overflow-y-auto">
                <li className="hover:bg-grey-300 cursor-pointer border-b-2 px-4 py-3">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <File />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-black">Doctor details</p>
                      <p className="text-grey-500 text-xs">Updated 2 days ago</p>
                    </div>
                  </div>
                </li>
                <li className="hover:bg-grey-300 cursor-pointer border-b-2 px-4 py-3">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <File />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-black">Scheduleling rules</p>
                      <p className="text-grey-500 text-xs">Updated 5 days ago</p>
                    </div>
                  </div>
                </li>
                <li className="hover:bg-grey-300 cursor-pointer px-4 py-3">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <File />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-black">Q4 Report</p>
                      <p className="text-grey-500 text-xs">Updated 1 week ago</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-grey-100 w-1/2 p-6">
              <h4 className="mb-2 text-sm font-medium text-black">Preview</h4>
              <div className="text-grey-500 space-y-2 text-xs">
                <p>Select an item from the list to preview its contents here.</p>
                <pre>
                  <code className="flex w-full">
                    {`// Preformatted code block test
                      function stressTest(element) {
                        console.log("Testing element: " + element);
                        return true;
                      }`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALERTS */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-black">Alerts</h2>

        {/* Success Alert */}
        <div className="mb-4 rounded-lg border-2 bg-emerald-400 p-4 text-black">
          <div className="flex">
            <div className="flex-shrink-0">
              <CheckCircle className="h-6 w-6" />
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium">Successfully uploaded</h3>
              <div className="text-md mt-2">
                <p>Your file has been uploaded and is now being processed.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Warning Alert */}
        <div className="mb-4 rounded-lg border-2 bg-amber-400 p-4 text-black">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium">Attention needed</h3>
              <div className="text-md mt-2">
                <p>
                  Your subscription will expire in 7 days. Please update your payment information.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Error Alert with Actions */}

        <div className="mb-4 rounded-lg border-2 bg-red-400 p-4 text-black">
          <div className="flex">
            <div className="flex-shrink-0">
              <XCircle className="h-6 w-6" />
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium">There were errors with your submission</h3>
              <div className="mt-2 text-sm">
                <ul className="list-disc space-y-1 pl-5">
                  <li>Email address is required</li>
                  <li>Password must be at least 8 characters</li>
                </ul>
              </div>
              <div className="mt-6 mb-3">
                <div className="-mx-2 -my-1.5 flex">
                  <button
                    type="button"
                    className="focus:outline-primary-600 ml-3 rounded-md border-2 px-2 py-1.5 text-sm font-semibold transition-colors hover:bg-red-100 focus:outline-1 focus:outline-offset-2 active:bg-red-300"
                  >
                    View details
                  </button>
                  <button
                    type="button"
                    className="focus:outline-primary-600 ml-3 rounded-md border-2 px-2 py-1.5 text-sm font-semibold transition-colors hover:bg-red-100 focus:outline-1 focus:outline-offset-2 active:bg-red-300"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Alert with Border-2 */}
        <div className="mb-4 rounded-lg border-2 bg-indigo-400 p-4 text-black">
          <div className="flex">
            <div className="flex-shrink-0">
              <Info className="h-6 w-6" />
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium">A new software update is available.</h3>
              <div className="text-md mt-2">
                <button type="button" className="font-semibold text-black underline">
                  See what&apos;s new
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM LAYOUTS */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-black">Form Layouts</h2>

        {/* ——— Forms ——— */}
        <section className="space-y-4">
          <h4>Forms</h4>

          {/* Labels, hint, placeholder */}
          <p>Labels: standard, required. Hint. Placeholder.</p>
          <div className="max-w-md space-y-4">
            {/* Email — standard label */}
            <div>
              <label htmlFor="playbook-email" className="block text-sm font-semibold text-black">
                Email address
              </label>
              <input
                id="playbook-email"
                type="email"
                className="focus:outline-primary-500 border-grey-600 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-600 mt-1 block w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline-1 focus:outline-offset-2"
                placeholder="you@example.com"
              />
            </div>

            {/* Password — required label + hint */}
            <div>
              <label htmlFor="playbook-pw" className="block text-sm font-semibold text-black">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                id="playbook-pw"
                type="password"
                className="focus:outline-primary-500 border-grey-600 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-600 mt-1 block w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline-1 focus:outline-offset-2"
              />
              <p className="text-grey-500 mt-2 text-sm">
                Must be at least 8 characters with one number and one special character
              </p>
            </div>

            {/* Date — placeholder */}
            <div>
              <label htmlFor="playbook-date" className="block text-sm font-semibold text-black">
                Date
              </label>
              <input
                id="playbook-date"
                type="text"
                className="focus:outline-primary-500 border-grey-600 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-600 mt-1 block w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline-1 focus:outline-offset-2"
                placeholder="YYYY-MM-DD"
              />
            </div>
          </div>

          {/* Address form grid */}
          <p>Address form (grid grid-cols-2 gap-2)</p>
          <div className="grid max-w-md grid-cols-2 gap-x-4 gap-y-6">
            <div>
              <label htmlFor="playbook-city" className="block text-sm font-semibold text-black">
                City
              </label>
              <input
                id="playbook-city"
                type="text"
                className="focus:outline-primary-500 border-grey-600 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-600 mt-1 block w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline-1 focus:outline-offset-2"
              />
            </div>
            <div>
              <label htmlFor="playbook-zip" className="block text-sm font-semibold text-black">
                ZIP
              </label>
              <input
                id="playbook-zip"
                type="text"
                className="focus:outline-primary-500 border-grey-600 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-600 mt-1 block w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline-1 focus:outline-offset-2"
              />
            </div>
          </div>

          {/* Full form structure */}
          <p>Form structure: Email / Password, checkboxes, actions</p>
          <form className="max-w-md" onSubmit={(e) => e.preventDefault()}>
            <div className="rounded-lg border-2">
              <div className="px-4 py-2 sm:p-6">
                <div className="space-y-6">
                  {/* Full name */}
                  <div>
                    <label
                      htmlFor="playbook-name"
                      className="block text-sm font-semibold text-black"
                    >
                      Full name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="playbook-name"
                      type="text"
                      className="focus:outline-primary-500 border-grey-600 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-600 mt-1 block w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline-1 focus:outline-offset-2"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="playbook-email2"
                      className="block text-sm font-semibold text-black"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="playbook-email2"
                      type="email"
                      className="focus:outline-primary-500 border-grey-600 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-600 mt-1 block w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline-1 focus:outline-offset-2"
                    />
                    <p className="text-grey-500 mt-2 text-sm">We'll never share your email</p>
                  </div>
                </div>

                {/* Checkboxes */}
                <div className="mt-6 space-y-2">
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="checkbox"
                      className="border-grey-400 text-primary-600 focus:ring-primary-500 rounded-md"
                    />
                    <span className="text-grey-700 text-sm">Send me product updates</span>
                  </label>
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="checkbox"
                      className="border-grey-400 text-primary-600 focus:ring-primary-500 rounded-md"
                    />
                    <span className="text-grey-700 text-sm">Send me marketing emails</span>
                  </label>
                </div>

                {/* Actions — aligned to card action footer pattern */}
                <div className="mt-6 flex justify-end gap-3">
                  <button
                    type="button"
                    className="text-md active:bg-grey-200 hover:bg-grey-100 focus:outline-primary-600 min-w-32 rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline-1 focus:outline-offset-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="text-md focus:outline-primary-500 bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 min-w-32 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline-1 focus:outline-offset-2"
                  >
                    Create account
                  </button>
                </div>
              </div>
            </div>
          </form>

          {/* Validation error */}
          <p>Validation error: border-red-500, error message</p>
          <div className="max-w-md">
            <label htmlFor="playbook-invalid" className="block text-sm font-semibold text-black">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="playbook-invalid"
              type="email"
              defaultValue="invalid"
              aria-invalid="true"
              aria-describedby="playbook-email-error"
              className="mt-1 block w-full rounded-md border-2 border-red-500 px-3 py-2 text-sm text-black"
            />
            <p
              id="playbook-email-error"
              className="mt-1 flex gap-1 text-xs font-semibold text-red-900"
            >
              <XCircle />
              Please enter a valid email address
            </p>
          </div>
        </section>
        {/* Stacked Form */}
        <div className="mb-8 rounded-lg border-2">
          <div className="px-4 py-2 sm:p-6">
            <h3 className="mb-4 text-lg font-medium text-black">Personal Information</h3>
            <div className="space-y-6">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold text-black">
                  First name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="focus:border-primary-500 focus:ring-primary-500 border-grey-600 mt-1 block w-full rounded-md border-2 px-3 py-2 focus:outline-none sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold text-black">
                  Last name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  className="focus:outline-primary-500 border-grey-600 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-600 mt-1 block w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline-1 focus:outline-offset-2"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-black">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="focus:outline-primary-500 border-grey-600 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-600 mt-1 block w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline-1 focus:outline-offset-2"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-semibold text-black">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="focus:outline-primary-500 border-grey-600 focus:outline-primary-600 mt-1 block w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline-1 focus:outline-offset-2"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>

              <div>
                <label htmlFor="about" className="block text-sm font-semibold text-black">
                  About
                </label>
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="focus:outline-primary-500 border-grey-600 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-600 mt-1 block w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline-1 focus:outline-offset-2"
                ></textarea>
                <p className="text-grey-600 mt-2 text-sm">Brief description for your profile.</p>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                type="button"
                className="text-md active:bg-grey-200 hover:bg-grey-100 focus:outline-primary-600 min-w-32 rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline-1 focus:outline-offset-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="text-md focus:outline-primary-500 bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 min-w-32 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline-1 focus:outline-offset-2"
              >
                Save0o0o
              </button>
            </div>
          </div>
        </div>

        {/* Two Column Form */}
        <div className="rounded-lg border-2">
          <div className="px-4 py-2 sm:p-6">
            <h3 className="mb-4 text-lg font-medium text-black">Company Details</h3>
            <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="company-name" className="block text-sm font-semibold text-black">
                  Company name
                </label>
                <input
                  type="text"
                  name="company-name"
                  id="company-name"
                  className="focus:outline-primary-500 border-grey-600 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-600 mt-1 block w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline-1 focus:outline-offset-2"
                />
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="website" className="block text-sm font-semibold text-black">
                  Website
                </label>
                <input
                  type="text"
                  name="website"
                  id="website"
                  className="focus:outline-primary-500 border-grey-600 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-600 mt-1 block w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline-1 focus:outline-offset-2"
                />
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="street-address" className="block text-sm font-semibold text-black">
                  Street address
                </label>
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  className="focus:outline-primary-500 border-grey-600 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-600 mt-1 block w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline-1 focus:outline-offset-2"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="city" className="block text-sm font-semibold text-black">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="focus:outline-primary-500 border-grey-600 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-600 mt-1 block w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline-1 focus:outline-offset-2"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="state" className="text-grey-700 block text-sm font-medium">
                  State / Province
                </label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  className="focus:outline-primary-500 border-grey-600 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-600 mt-1 block w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline-1 focus:outline-offset-2"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="postal-code" className="block text-sm font-semibold text-black">
                  ZIP / Postal code
                </label>
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  className="focus:outline-primary-500 border-grey-600 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-600 mt-1 block w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline-1 focus:outline-offset-2"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                type="button"
                className="text-md active:bg-grey-200 hover:bg-grey-100 focus:outline-primary-600 min-w-32 rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline-1 focus:outline-offset-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="text-md focus:outline-primary-500 bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 min-w-32 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline-1 focus:outline-offset-2"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CALENDARS */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-black">Calendars</h2>

        {/* Month View Calendar */}
        <div className="rounded-lg border-2">
          <div className="px-4 py-2 sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-medium text-black">January 2026</h3>
              <div className="flex space-x-2">
                <button
                  type="button"
                  className="text-md hover:bg-grey-300 focus:outline-primary-600 rounded-md border-2 px-2 py-2 font-semibold transition-colors focus:outline-1 focus:outline-offset-2"
                  aria-label="Previous month"
                >
                  <ArrowLeft className="size-5 flex-shrink-0" />
                </button>
                <button
                  type="button"
                  className="text-md hover:bg-grey-300 focus:outline-primary-600 rounded-md border-2 px-2 py-2 font-semibold transition-colors focus:outline-1 focus:outline-offset-2"
                  aria-label="Next month"
                >
                  <ArrowRight className="size-5 flex-shrink-0" />
                </button>
              </div>
            </div>
            <div className="bg-grey-300 grid grid-cols-7 overflow-hidden rounded-lg border-2 bg-black">
              <div className="bg-grey-50 border-b-2 p-2 text-center text-xs font-semibold">Sun</div>
              <div className="bg-grey-50 border-b-2 p-2 text-center text-xs font-semibold">Mon</div>
              <div className="bg-grey-50 border-b-2 p-2 text-center text-xs font-semibold">Tue</div>
              <div className="bg-grey-50 border-b-2 p-2 text-center text-xs font-semibold">Wed</div>
              <div className="bg-grey-50 border-b-2 p-2 text-center text-xs font-semibold">Thu</div>
              <div className="bg-grey-50 border-b-2 p-2 text-center text-xs font-semibold">Fri</div>
              <div className="bg-grey-50 border-b-2 p-2 text-center text-xs font-semibold">Sat</div>

              {/* Calendar days */}
              <div className="text-grey-400 text-grey-500 h-24 border-1 bg-white p-2 text-sm">
                29
              </div>
              <div className="text-grey-400 text-grey-500 h-24 border-1 bg-white p-2 text-sm">
                30
              </div>
              <div className="text-grey-400 text-grey-500 h-24 border-1 bg-white p-2 text-sm">
                31
              </div>
              <div className="h-24 border-1 bg-white p-2 text-sm text-black">1</div>
              <div className="h-24 border-1 bg-white p-2 text-sm text-black">2</div>
              <div className="h-24 border-1 bg-white p-2 text-sm text-black">3</div>
              <div className="h-24 border-1 bg-white p-2 text-sm text-black">4</div>

              <div className="h-24 border-1 bg-white p-2 text-sm text-black">5</div>
              <div className="h-24 border-1 bg-white p-2 text-sm text-black">6</div>
              <div className="h-24 border-1 bg-white p-2 text-sm text-black">7</div>
              <div className="h-24 border-1 bg-white p-2 text-sm text-black">8</div>
              <div className="h-24 border-1 bg-white p-2 text-sm text-black">9</div>
              <div className="h-24 border-1 bg-white p-2 text-sm text-black">10</div>
              <div className="h-24 border-1 bg-white p-2 text-sm text-black">11</div>

              <div className="h-24 border-1 bg-white p-2 text-sm text-black">12</div>
              <div className="h-24 border-1 bg-white p-2 text-sm text-black">13</div>
              <div className="h-24 border-1 bg-white p-2 text-sm text-black">14</div>
              <div className="h-24 border-1 bg-white p-2 text-sm text-black">15</div>
              <div className="h-24 border-1 bg-white p-2 text-sm text-black">16</div>
              <div className="h-24 border-1 bg-white p-2 text-sm text-black">17</div>
              <div className="h-24 border-1 bg-white p-2 text-sm text-black">18</div>

              <div className="h-24 border-1 bg-white p-2 text-sm text-black">19</div>
              <div className="h-24 border-1 bg-white p-2 text-sm text-black">20</div>
              <div className="h-24 border-1 bg-white p-2 text-sm text-black">21</div>
              <div className="h-24 border-1 bg-white p-2 text-sm text-black">22</div>
              <div className="h-24 border-1 bg-white p-2 text-sm text-black">23</div>
              <div className="h-24 border-1 bg-white p-2 text-sm text-black">24</div>
              <div className="h-24 border-1 bg-white p-2 text-sm text-black">25</div>

              <div className="h-24 border-1 bg-white p-2 text-sm text-black">26</div>
              <div className="border-primary-600 bg-primary-300 h-24 border-1 border-2 p-2 text-sm font-semibold text-black">
                27
              </div>
              <div className="h-24 border-1 bg-white p-2 text-sm text-black">28</div>
              <div className="h-24 border-1 bg-white p-2 text-sm text-black">29</div>
              <div className="h-24 border-1 bg-white p-2 text-sm text-black">30</div>
              <div className="h-24 border-1 bg-white p-2 text-sm text-black">31</div>
              <div className="text-grey-400 text-grey-500 h-24 bg-white p-2 text-sm">1</div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-black">Stats</h2>

        {/* Simple Stats */}
        <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="overflow-hidden rounded-lg border-2">
            <div className="px-4 py-2 sm:p-6">
              <dt className="text-grey-500 truncate text-sm font-medium">Total Revenue</dt>
              <dd className="mt-1 text-3xl font-semibold text-black">$48,574</dd>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border-2">
            <div className="px-4 py-2 sm:p-6">
              <dt className="text-grey-500 truncate text-sm font-medium">Active Users</dt>
              <dd className="mt-1 text-3xl font-semibold text-black">2,456</dd>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border-2">
            <div className="px-4 py-2 sm:p-6">
              <dt className="text-grey-500 truncate text-sm font-medium">Conversion Rate</dt>
              <dd className="mt-1 text-3xl font-semibold text-black">3.65%</dd>
            </div>
          </div>
        </div>

        {/* Stats with Trending */}
        <div className="rounded-lg border-2">
          <div className="px-4 py-2 sm:p-6">
            <h3 className="mb-6 text-lg font-medium text-black">Performance Metrics</h3>
            <dl className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <dt className="text-grey-500 text-sm font-medium">Total Subscribers</dt>
                <dd className="mt-1 flex items-baseline justify-between gap-2">
                  <div className="flex items-baseline text-2xl font-semibold text-black">
                    71,897
                  </div>
                  <div className="my-auto mr-0 ml-auto inline-flex items-baseline gap-1 rounded-full bg-emerald-400 px-2 py-1 text-sm font-medium text-black">
                    <ArrowUpRight className="m-auto h-4 w-4" />
                    <span className="sr-only">Increased by</span>
                    12%
                  </div>
                </dd>
              </div>

              <div>
                <dt className="text-grey-500 text-sm font-medium">Average Open Rate</dt>
                <dd className="mt-1 flex items-baseline justify-between gap-2">
                  <div className="flex items-baseline text-2xl font-semibold text-black">
                    58.16%
                  </div>
                  <div className="my-auto mr-0 ml-auto inline-flex items-baseline gap-1 rounded-full bg-emerald-400 px-2 py-1 text-sm font-medium text-black">
                    <ArrowUpRight className="m-auto h-4 w-4" />
                    <span className="sr-only">Increased by</span>
                    2.02%
                  </div>
                </dd>
              </div>

              <div>
                <dt className="text-grey-500 text-sm font-medium">Average Click Rate</dt>
                <dd className="mt-1 flex items-baseline justify-between gap-2">
                  <div className="flex items-baseline text-2xl font-semibold text-black">
                    24.57%
                  </div>
                  <div className="my-auto mr-0 ml-auto inline-flex items-baseline gap-1 rounded-full bg-red-400 px-2 py-1 text-sm font-medium text-black">
                    <ArrowDownLeft className="m-auto h-4 w-4" />
                    <span className="sr-only">Increased by</span>
                    4.05%
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* ACTION PANELS */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-black">Action Panels</h2>
        <p className="text-grey-600 mb-6 text-sm">
          Following Playbook directives: Surface padding px-4 py-2 sm:p-6
        </p>

        {/* Simple Action Panel */}
        <div className="mb-8 rounded-lg border-2">
          <div className="px-4 py-2 sm:p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-base font-semibold text-black">Manage subscription</h3>
                <p className="text-grey-500 mt-1 text-sm">
                  Change your plan or cancel your subscription.
                </p>
              </div>
              <button
                type="button"
                className="text-md focus:outline-primary-500 bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 min-w-32 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline-1 focus:outline-offset-2"
              >
                Manage
              </button>
            </div>
          </div>
        </div>

        {/* Action Panel with Toggle */}
        <div className="mb-8 rounded-lg border-2">
          <div className="px-4 py-2 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-black">Enable notifications</p>
                <p className="text-grey-500 text-sm">Get notified when new comments are posted.</p>
              </div>
              <button
                type="button"
                className="focus:outline-primary-500 focus:outline-primary-600 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 bg-emerald-200 transition-colors focus:outline-1 focus:outline-offset-2"
                role="switch"
                aria-checked="false"
                aria-label="Enable notifications"
              >
                <span className="my-auto mr-0 ml-auto inline-block pr-1">
                  <Check className="h-4 w-4 flex-shrink-0 rounded-lg border-2 stroke-3" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Action Panel with Well (Destructive) */}
        <div className="rounded-lg border-2 bg-red-50 px-4 py-2 sm:p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-base font-semibold text-black">Delete account</h3>
              <p className="mt-1 text-sm">
                No longer want to use our service? This action cannot be undone.
              </p>
            </div>
            <button
              type="button"
              className="text-md min-w-32 rounded-md border-2 bg-red-300 px-4 py-2 font-semibold text-black transition-colors hover:bg-red-200 focus:outline-1 focus:outline-offset-2 focus:outline-red-500 focus:outline-red-600 active:bg-red-100"
            >
              Delete
            </button>
          </div>
        </div>
      </section>

      {/* EMPTY STATES */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-black">Empty States</h2>

        <div className="space-y-8">
          {/* Simple Empty State */}
          <div className="rounded-lg border-2">
            <div className="px-4 py-2 sm:p-6">
              <div className="text-center">
                <FolderPlus className="m-auto size-12" />
                <h3 className="mt-2 text-sm font-semibold text-black">No projects</h3>
                <p className="text-grey-500 mt-1 text-sm">Get started by creating a new project.</p>
                <div className="mt-6">
                  <button
                    type="button"
                    className="text-md bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 inline-flex min-w-32 items-center gap-2 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline-1 focus:outline-offset-2"
                  >
                    <Plus className="size-4" />
                    New Project
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Empty State with Dashed Border-2 */}
          <div className="rounded-lg border-2">
            <div className="px-4 py-2 sm:p-6">
              <div className="border-grey-400 rounded-lg border-2 border-dashed p-12 text-center">
                <UploadCloud className="m-auto size-12" />
                <h3 className="mt-2 text-sm font-semibold text-black">No files</h3>
                <p className="text-grey-500 mt-1 text-sm">
                  Drag and drop files here, or click to browse.
                </p>
                <div className="mt-6">
                  <button
                    type="button"
                    className="text-md bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 inline-flex min-w-32 items-center gap-2 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline-1 focus:outline-offset-2"
                  >
                    <Upload className="size-4" />
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
        <h2 className="mb-6 text-2xl font-bold text-black">Navigation</h2>

        {/* Navbar - height h-16 per Playbook */}
        <nav className="mb-8 rounded-lg border-2">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 border-b-4 px-1 pt-1 text-sm font-semibold text-black"
                  >
                    <Table className="h-5 w-5 flex-shrink-0" />
                    Dashboard
                  </button>
                  <button
                    type="button"
                    className="text-grey-600 hover:border-grey-400 hover:border-grey-600 inline-flex items-center gap-2 border-b-4 border-transparent px-1 pt-1 text-sm font-medium hover:text-black"
                  >
                    <MessageCircle className="h-5 w-5 flex-shrink-0" />
                    Conversations
                  </button>
                  <button
                    type="button"
                    className="text-grey-600 hover:border-grey-400 hover:border-grey-600 inline-flex items-center gap-2 border-b-4 border-transparent px-1 pt-1 text-sm font-medium hover:text-black"
                  >
                    <Zap className="h-5 w-5 flex-shrink-0" />
                    Global rules
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Tabs */}
        <div className="mb-8 rounded-lg border-2">
          <div className="px-4 py-2 sm:p-6">
            <nav className="flex space-x-8 border-b-2" aria-label="Tabs">
              <button
                type="button"
                className="border-primary-600 text-primary-600 border-b-4 px-1 py-4 text-sm font-semibold"
              >
                My Account
              </button>
              <button
                type="button"
                className="text-grey-600 hover:text-grey-400 hover:text-grey-700 border-b-2 border-transparent px-1 py-4 text-sm font-medium"
              >
                Company
              </button>
              <button
                type="button"
                className="text-grey-600 hover:text-grey-400 hover:text-grey-700 border-b-2 border-transparent px-1 py-4 text-sm font-medium"
              >
                Team
              </button>
            </nav>
          </div>
        </div>

        {/* Vertical Navigation with Badges */}
        <div className="rounded-lg border-2">
          <div className="px-4 py-2 sm:p-6">
            <nav className="space-y-1" aria-label="Sidebar">
              <button
                type="button"
                className="bg-grey-100 flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm font-semibold text-black"
              >
                <Inbox />
                Inbox
                <span className="bg-grey-100 text-grey-900 rounded-full px-2.5 py-0.5 text-xs font-medium">
                  12
                </span>
              </button>
              <button
                type="button"
                className="text-grey-600 hover:bg-grey-50 flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm font-medium hover:text-black"
              >
                <Folder />
                Projects
                <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-900">
                  5
                </span>
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* PERMISSIONS */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-black">Permissions</h2>
        <div className="rounded-lg border-2 bg-white p-4">
          <div className="bg-grey-300 mb-4 rounded-lg border-2 p-4 text-black">
            <div className="flex">
              <div className="flex-shrink-0">
                <Info className="h-6 w-6" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium">No permission to edit</h3>
                <div className="text-md mt-2">
                  <p>Share details with your admin.</p>
                </div>
                <div className="mt-6 mb-3">
                  <div className="-mx-2 -my-1.5 flex">
                    <button
                      type="button"
                      className="focus:outline-grey-600 hover:bg-grey-100 active:bg-grey-300 ml-3 flex gap-2 rounded-md border-2 px-2 py-1.5 text-sm font-semibold transition-colors focus:outline-1 focus:outline-offset-2"
                    >
                      <Copy className="h-5 w-5 flex-shrink-0" />
                      Copy details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex justify-between gap-4">
            <div className="m-auto flex gap-2">
              <button
                type="button"
                disabled
                className="text-md disabled:bg-grey-300 text-grey-500 flex gap-2 rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline-1 focus:outline-offset-2 disabled:cursor-not-allowed disabled:border-gray-400"
              >
                <Trash2 className="h-5 w-5 flex-shrink-0" />
                Delete
              </button>

              <div className="relative">
                <button
                  type="button"
                  className="hover:bg-grey-100 focus:outline-grey-500 focus:outline-primary-600 flex h-10 w-10 items-center justify-center rounded-md focus:outline-1 focus:outline-offset-2"
                  aria-label="Close"
                >
                  <Info className="h-5 w-5 flex-shrink-0" />
                </button>

                <div className="position-absolute top-full left-0 flex h-full w-full justify-center">
                  <div
                    id="tooltip-default"
                    role="tooltip"
                    className="rounded-base absolute mx-auto inline-block min-w-56 bg-black px-3 py-2 text-center text-sm font-medium text-white shadow-xs duration-300"
                  >
                    No permission to Delete
                    <div
                      className="tooltip-arrow absolute bottom-full left-1/2 h-0 w-0 -translate-x-1/2 border-r-12 border-b-12 border-l-12 border-r-transparent border-b-black border-l-transparent"
                      data-popper-arrow
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grow-1flex m-auto flex-col gap-2">
              <label className="flex min-h-10 cursor-pointer items-center gap-2">
                <input
                  type="radio"
                  className="border-grey-400 text-primary-600 focus:ring-primary-500 h-4 w-4 rounded-full"
                />
                <span className="text-grey-700 text-sm">Option 1</span>
              </label>
              <label className="flex min-h-10 cursor-pointer items-center gap-2">
                <input
                  type="radio"
                  className="border-grey-400 text-primary-600 focus:ring-primary-500 h-4 w-4 rounded-full"
                />
                <span className="text-grey-700 text-sm">Option 2</span>
              </label>
              <div className="flex gap-2">
                <label className="flex min-h-10 cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    disabled
                    className="disabled:bg-grey-300 text-grey-500 h-4 w-4 rounded-full disabled:cursor-not-allowed disabled:border-gray-400"
                  />
                  <span className="text-grey-700 text-sm">Option 3</span>
                </label>
                <div className="relative">
                  <button
                    type="button"
                    className="hover:bg-grey-100 focus:outline-grey-500 focus:outline-primary-600 flex h-10 w-10 items-center justify-center rounded-md focus:outline-1 focus:outline-offset-2"
                    aria-label="Close"
                  >
                    <Info className="h-5 w-5 flex-shrink-0" />
                  </button>

                  <div className="position-absolute top-full left-0 flex h-full w-full justify-center">
                    <div
                      id="tooltip-default"
                      role="tooltip"
                      className="rounded-base absolute mx-auto inline-block min-w-56 bg-black px-3 py-2 text-center text-sm font-medium text-white shadow-xs duration-300"
                    >
                      No permission to Select
                      <div
                        className="tooltip-arrow absolute bottom-full left-1/2 h-0 w-0 -translate-x-1/2 border-r-12 border-b-12 border-l-12 border-r-transparent border-b-black border-l-transparent"
                        data-popper-arrow
                      ></div>
                    </div>
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
