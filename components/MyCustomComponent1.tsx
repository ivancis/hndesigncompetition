'use client'

import {
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  XCircle,
  TrendingUp,
  ExternalLink,
  Trash2,
  Hexagon,
  HelpCircle,
  User,
} from 'react-feather'

/**
 * Kitchen Sink / UI Kit Stress Test component.
 * Renders a comprehensive set of HTML elements for consistency testing.
 * Styled per ui-pattern-playbook/: Tailwind only, typography/spacing from scale.
 */
export default function MyCustomComponent5() {
  return (
    <div
      role="region"
      aria-label="UI pattern playbook scenarios"
      className="overflow-y-auto rounded-lg border-2 p-4"
    >
      {/* ——— 4. Visual styles ——— */}
      <section className="mb-8 space-y-4">
        <h4>4. Visual styles</h4>

        {/* Border radius: badge, button, card */}
        <p>Border-2 radius: badge (rounded-md), button, card (rounded-lg)</p>
        <div className="flex flex-wrap items-center gap-4">
          {/* Badge — aligned to status badge pattern */}
          <span className="bg-primary-50 text-primary-700 rounded-md px-2.5 py-0.5 text-xs font-medium">
            New
          </span>

          {/* Button — aligned to primary button pattern */}
          <button
            type="button"
            className="text-md focus:outline-primary-500 bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline-1 focus:outline-offset-2"
          >
            Submit
          </button>

          {/* Card — aligned to card anatomy */}
          <div className="rounded-lg border-2 bg-white">
            <div className="px-4 py-2 sm:p-6">
              <h3 className="text-base font-semibold text-black">Card Title</h3>
              <p className="text-grey-500 mt-1 text-sm">Card content…</p>
            </div>
          </div>
        </div>

        {/* Interaction states */}
        <p>Interaction states: Rest, Hover, Active, Focus, Disabled</p>
        <div className="flex flex-wrap gap-2">
          {/* Rest */}
          <button
            type="button"
            className="text-md focus: bg-primary-300 rounded-md border-2 px-4 py-2 font-semibold text-black"
          >
            Default
          </button>

          {/* Hover */}
          <button
            type="button"
            className="text-md bg-primary-200 rounded-md border-2 px-4 py-2 font-semibold text-black"
          >
            Hover
          </button>

          {/* Active */}
          <button
            type="button"
            className="text-md bg-primary-100 rounded-md border-2 px-4 py-2 font-semibold text-black"
          >
            Active
          </button>

          {/* Focus */}
          <button
            type="button"
            className="text-md outline-primary-600 bg-primary-300 rounded-md border-2 px-4 py-2 font-semibold text-black outline-1 outline-offset-2 transition-colors"
          >
            Focus
          </button>

          {/* FocusActive */}
          <button
            type="button"
            className="text-md outline-primary-600 bg-primary-100 rounded-md border-2 px-4 py-2 font-semibold text-black outline-1 outline-offset-2 transition-colors"
          >
            Focus + Active
          </button>

          {/* Disabled — keep disabled:* utilities on the full primary pattern */}
          <button
            type="button"
            disabled
            className="text-md disabled:bg-grey-300 text-grey-500 rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline-1 focus:outline-offset-2 disabled:cursor-not-allowed disabled:border-gray-400"
          >
            Disabled
          </button>
        </div>

        {/* Selected state */}
        <p>Selected state: Tabs, Card, Checkbox</p>
        <div className="space-y-4">
          {/* Tabs — aligned to nav tab pattern */}
          <nav className="border-grey-700 flex gap-4 border-b-2" aria-label="Selected state tabs">
            <button
              type="button"
              className="border-primary-600 text-primary-600 border-b-4 px-1 py-4 text-sm font-semibold"
            >
              Active Tab
            </button>
            <button
              type="button"
              className="text-grey-600 hover:text-grey-400 hover:text-grey-700 border-b-2 border-transparent px-1 py-4 text-sm font-medium"
            >
              Inactive Tab
            </button>
          </nav>

          {/* Selected card + checkbox row */}
          <div className="flex flex-wrap gap-4">
            {/* Checkbox */}
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                defaultChecked
                className="border-grey-400 text-primary-600 focus:ring-primary-500 h-4 w-4 rounded-md"
              />
              <span className="text-grey-700 text-sm">Selected option</span>
            </label>
          </div>
        </div>

        {/* Indicating interactivity */}
        <p>Indicating interactivity: inline action, link, primary/secondary buttons</p>
        <div className="flex flex-wrap items-center gap-4">
          {/* Inline action — dotted underline link style */}
          <button
            type="button"
            className="text-primary-600 hover:text-primary-700 border-b-2 border-dotted border-current text-sm font-semibold"
          >
            Show more details
          </button>

          {/* Primary */}
          <button
            type="button"
            className="text-md focus:outline-primary-500 bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline-1 focus:outline-offset-2"
          >
            Primary Action
          </button>

          {/* Secondary */}
          <button
            type="button"
            className="text-md active:bg-grey-200 hover:bg-grey-100 focus:outline-primary-600 rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline-1 focus:outline-offset-2"
          >
            Secondary Action
          </button>
        </div>

        {/* Complete button patterns */}
        <p>Complete patterns: Primary, Secondary, Semantic, Link, Interactive card</p>
        <div className="flex flex-wrap gap-2">
          {/* Primary */}
          <button
            type="button"
            className="text-md focus:outline-primary-500 bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline-1 focus:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Primary
          </button>

          {/* Secondary */}
          <button
            type="button"
            className="text-md active:bg-grey-200 hover:bg-grey-100 focus:outline-primary-600 rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline-1 focus:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Secondary
          </button>

          {/* Danger — aligned to danger button pattern */}
          <button
            type="button"
            className="text-md rounded-md border-2 bg-red-300 px-4 py-2 font-semibold text-black transition-colors hover:bg-red-200 focus:outline-1 focus:outline-offset-2 focus:outline-red-500 focus:outline-red-600 active:bg-red-100"
          >
            Delete
          </button>

          {/* Link — aligned to link button pattern */}
          <button
            type="button"
            className="text-primary-600 hover:text-primary-700 focus:outline-primary-500 focus:outline-primary-600 rounded-md px-3 py-2 text-sm font-semibold underline transition-colors focus:outline-1 focus:outline-offset-2"
          >
            Read documentation
          </button>
        </div>

        {/* Interactive card — card anatomy with hover/focus */}
        <button
          type="button"
          className="focus:outline-primary-500 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 w-full rounded-lg border-2 bg-white p-4 text-left transition-all focus:outline-1 focus:outline-offset-2 sm:p-6"
        >
          <h3 className="text-base font-semibold text-black">InteractiveCard Title</h3>
          <p className="text-grey-500 mt-1 text-sm">InteractiveCard description</p>
        </button>
      </section>

      {/* ——— 5. Status and health ——— */}
      <section className="mt-8 space-y-4">
        <h4>5. Status and health</h4>

        {/* Status color tokens */}
        <p>Status color tokens: Ideal, Good, Neutral, Warning, Critical</p>
        <div className="flex flex-wrap gap-2">
          {/* Badges — aligned to status badge pattern: rounded-full bg-*-100 px-2.5 py-0.5 text-xs font-medium */}
          <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-900">
            Ideal
          </span>
          <span className="bg-primary-100 text-primary-900 rounded-full px-2.5 py-0.5 text-xs font-medium">
            Good
          </span>
          <span className="bg-grey-100 text-grey-900 rounded-full px-2.5 py-0.5 text-xs font-medium">
            Neutral
          </span>
          <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-900">
            Warning
          </span>
          <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-900">
            Critical
          </span>
        </div>

        {/* Health indicator, Chip, Message container */}
        <p>Health indicator (shape), Chip, Message container</p>
        <div className="flex flex-wrap items-center gap-4">
          {/* Health dot + label */}
          <div className="flex items-center gap-2">
            <div
              className="inline-flex h-2 w-2 rounded-full bg-emerald-500"
              role="status"
              aria-label="Healthy"
            />
            <span className="text-sm text-black">API Service</span>
          </div>

          {/* Chip */}
          <span className="inline-flex items-center gap-2 rounded-md bg-emerald-50 py-2 pr-2 pl-3 text-sm font-semibold text-emerald-700">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-600" aria-hidden="true" />
            Completed
          </span>

          {/* Error message container — aligned to alert pattern */}
          <div className="rounded-lg border-2 border-red-400 bg-red-400 p-4 text-black">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertCircle className="h-6 w-6" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium">Service Unavailable</h3>
                <div className="text-md mt-2">
                  <p>The API service is currently down. Our team has been notified.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Toast, Information overlay, Status highlight, Trend */}
        <p>Toast, Information overlay, Status highlight (border-l-4), Trend</p>
        <div className="space-y-4">
          {/* Toast — aligned to success alert pattern */}
          <div className="rounded-lg border-2 bg-emerald-400 p-4 text-black">
            <div className="flex">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium">Changes saved successfully</h3>
              </div>
            </div>
          </div>

          {/* Warning trigger button */}
          <button
            type="button"
            className="flex items-center gap-1 text-sm text-amber-700 hover:text-amber-800"
          >
            <AlertTriangle className="h-4 w-4" />
            <span>2 warnings</span>
          </button>

          {/* Status highlight — warning alert style with border-l-4 accent */}
          <div className="rounded-lg border-2 border-l-4 border-amber-400 bg-amber-400 p-4 text-black">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium">Database backup pending</h3>
                <div className="text-md mt-2">
                  <p>Last backup: 36 hours ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trend */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-black">3.2%</span>
            <div className="inline-flex items-baseline gap-1 rounded-full bg-red-400 px-2 py-1 text-sm font-medium text-black">
              <span className="sr-only">Increased by</span>
              +1.2%
              <TrendingUp className="m-auto h-4 w-4" />
            </div>
            <span className="text-grey-500 text-sm">error rate</span>
          </div>
        </div>
      </section>

      {/* ——— 6. Navigation ——— */}
      <section className="space-y-4">
        <h4>6. Navigation</h4>

        {/* Flat navigation */}
        <p>Flat navigation</p>
        <nav className="border-grey-700 flex gap-4 border-b-2" aria-label="Flat">
          <button
            type="button"
            className="border-primary-600 text-primary-600 border-b-4 px-1 py-4 text-sm font-semibold"
          >
            Dashboard
          </button>
          <button
            type="button"
            className="text-grey-600 hover:text-grey-400 hover:text-grey-700 border-b-2 border-transparent px-1 py-4 text-sm font-medium"
          >
            Analytics
          </button>
          <button
            type="button"
            className="text-grey-600 hover:text-grey-400 hover:text-grey-700 border-b-2 border-transparent px-1 py-4 text-sm font-medium"
          >
            Settings
          </button>
        </nav>

        {/* Breadcrumbs */}
        <p>Breadcrumbs (nested)</p>
        <nav className="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
          <button type="button" className="text-grey-600 hover:text-black">
            Documentation
          </button>
          <span className="text-grey-400">/</span>
          <button type="button" className="text-grey-600 hover:text-black">
            Components
          </button>
          <span className="text-grey-400">/</span>
          <span className="font-semibold text-black">Button</span>
        </nav>

        {/* Primary (tabs) + Secondary (sidebar) */}
        <p>Primary navigation (tabs), Secondary (sidebar)</p>
        <nav className="border-grey-700 flex gap-4 border-b-2" aria-label="Primary">
          <button
            type="button"
            className="border-primary-600 text-primary-600 border-b-4 px-1 py-4 text-sm font-semibold"
          >
            Dashboard
          </button>
          <button
            type="button"
            className="text-grey-600 hover:text-grey-400 hover:text-grey-700 border-b-2 border-transparent px-1 py-4 text-sm font-medium"
          >
            Projects
          </button>
          <button
            type="button"
            className="text-grey-600 hover:text-grey-400 hover:text-grey-700 border-b-2 border-transparent px-1 py-4 text-sm font-medium"
          >
            Team
          </button>
        </nav>

        {/* Sidebar — aligned to sidebar nav pattern */}
        <nav className="space-y-1" aria-label="Secondary">
          <button
            type="button"
            className="group bg-grey-100 flex w-full items-center rounded-md px-3 py-2 text-left text-sm font-semibold text-black"
          >
            Profile
          </button>
          <button
            type="button"
            className="group text-grey-600 hover:bg-grey-50 flex w-full items-center rounded-md px-3 py-2 text-left text-sm font-medium hover:text-black"
          >
            Security
          </button>
          <button
            type="button"
            className="group text-grey-600 hover:bg-grey-50 flex w-full items-center rounded-md px-3 py-2 text-left text-sm font-medium hover:text-black"
          >
            Notifications
          </button>
        </nav>

        {/* Links */}
        <p>Links: inline, nav with icon, external</p>
        <div className="space-y-2">
          {/* Inline link */}
          <p className="text-grey-700 text-sm">
            Learn more in our{' '}
            <button
              type="button"
              className="text-primary-600 hover:text-primary-700 focus:outline-primary-500 focus:outline-primary-600 rounded-md px-1 py-0.5 text-sm font-semibold underline transition-colors focus:outline-1 focus:outline-offset-2"
            >
              documentation
            </button>
            .
          </p>

          {/* Nav link with icon — aligned to sidebar nav inactive */}
          <button
            type="button"
            className="group text-grey-600 hover:bg-grey-50 flex w-full items-center rounded-md px-3 py-2 text-left text-sm font-medium hover:text-black"
          >
            <span className="bg-grey-400 mr-3 inline-flex h-4 w-4 rounded" aria-hidden="true" />
            Dashboard
          </button>

          {/* External link */}
          <button
            type="button"
            className="text-primary-600 hover:text-primary-700 focus:outline-primary-500 focus:outline-primary-600 inline-flex items-center gap-1 rounded-md px-1 py-0.5 text-sm font-semibold underline transition-colors focus:outline-1 focus:outline-offset-2"
          >
            Visit website
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </section>

      <div className="mt-6 space-y-8">
        {/* ——— 1. Typography ——— */}
        <section className="space-y-4">
          <h4>1. Typography</h4>
          <p>Type scale: Display, Heading, Subheading, Body, Subtext</p>
          <div className="space-y-2">
            <h1 className="text-5xl font-extrabold text-black">Main Headline</h1>
            <h2 className="text-2xl font-bold text-black">Section Title</h2>
            <h3 className="text-lg font-medium text-black">Subsection</h3>
            <p className="text-grey-700 text-base font-normal">Main content text…</p>
            <p className="text-grey-500 text-sm font-medium">Helper text</p>
          </div>
          <p>Content rules: ellipsis, curly quotes, non‑breaking space</p>
          <div className="text-grey-700 space-y-1 text-sm">
            <p>Loading… please wait</p>
            <p>She said, "Hello world."</p>
            <p>File size: 10&nbsp;MB</p>
          </div>
          <p>Typography vertical spacing (space-y-1)</p>
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-black">Heading</h2>
            <p className="text-grey-500 text-sm">Subtitle</p>
          </div>
        </section>

        {/* ——— 10. Empty States ——— */}
        <section className="space-y-4">
          <h4>10. Empty States</h4>
          <p>No Data (First Use), User Action Result, Error Management</p>
          <div className="flex gap-2 space-x-4">
            {/* First use — card anatomy */}
            <div className="rounded-lg border-2 bg-white">
              <div className="px-4 py-2 sm:p-6">
                <div className="text-center">
                  <User className="m-auto h-6 w-6" />
                  <h3 className="text-md mt-4 font-medium text-black">No patients yet</h3>
                  <p className="text-grey-500 mt-1 text-sm">
                    Connect your first data source to administrate users
                  </p>
                  <div className="mt-6">
                    <button
                      type="button"
                      className="text-md focus:outline-primary-500 bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 inline-flex min-w-32 items-center gap-2 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline-1 focus:outline-offset-2"
                    >
                      Add data source
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* No results */}
            <div className="rounded-lg border-2 bg-white">
              <div className="px-4 py-2 sm:p-6">
                <div className="text-center">
                  <HelpCircle className="m-auto h-6 w-6" />
                  <h3 className="text-md mt-4 font-medium text-black">No results found</h3>
                  <p className="text-grey-500 mt-1 text-sm">
                    Try adjusting your search terms or filters
                  </p>
                </div>
              </div>
            </div>

            {/* Error recovery */}
            <div className="rounded-lg border-2 bg-white">
              <div className="px-4 py-2 sm:p-6">
                <div className="text-center">
                  <XCircle className="m-auto h-6 w-6" />
                  <h3 className="text-md mt-4 font-medium text-black">Unable to load data</h3>
                  <p className="text-grey-500 mt-1 text-sm">
                    We're having trouble connecting to the server. Check the activity log for
                    details.
                  </p>
                  <div className="mt-6">
                    <button
                      type="button"
                      className="text-md active:bg-grey-200 hover:bg-grey-100 focus:outline-primary-600 min-w-32 rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline-1 focus:outline-offset-2"
                    >
                      View activity log
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ——— 11. Loading States ——— */}
        <section className="space-y-4">
          <h4>11. Loading States</h4>
          <p>Skeleton states, Full-screen loading, Inline loading, Progressive loading</p>
          <div className="flex gap-2">
            {/* Skeleton lines */}
            <div className="space-y-2">
              <div className="bg-grey-200 h-4 w-3/4 animate-pulse rounded" />
              <div className="bg-grey-200 h-4 w-1/2 animate-pulse rounded" />
            </div>

            {/* Skeleton card — aligned to card anatomy */}
            <div className="rounded-lg border-2 bg-white">
              <div className="px-4 py-2 sm:p-6">
                <div className="bg-grey-200 h-6 w-32 animate-pulse rounded" />
                <div className="mt-3 space-y-2">
                  <div className="bg-grey-200 h-4 w-full animate-pulse rounded" />
                  <div className="bg-grey-200 h-4 w-5/6 animate-pulse rounded" />
                </div>
              </div>
            </div>

            {/* Loading button — primary disabled */}
            <button
              type="button"
              disabled
              className="text-md focus:outline-primary-500 bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 inline-flex min-w-32 items-center gap-2 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline-1 focus:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-75"
            >
              <Hexagon className="h-5 w-5 animate-spin" />
              Sending invite...
            </button>

            {/* Inline loading */}
            <div className="text-grey-500 flex items-center gap-2 text-sm">
              <Hexagon className="h-5 w-5 animate-spin" />
              <span>Loading data...</span>
            </div>
          </div>
        </section>

        {/* ——— 12. Modal Patterns ——— */}
        <section className="space-y-4">
          <h4>12. Modal Patterns</h4>
          <p>Confirm/Cancel, Destructive, Error Recovery, Permissions Request</p>
          <div className="space-y-4">
            {/* Confirm modal */}
            <div className="rounded-lg border-2 bg-white">
              <div className="px-4 py-2 sm:p-6">
                <h3 className="text-lg font-bold text-black">Publish article</h3>
                <p className="text-grey-500 mt-2 text-sm">
                  This article will be visible to all subscribers immediately.
                </p>
                <div className="mt-4 flex justify-end gap-3">
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
                    Publish now
                  </button>
                </div>
              </div>
            </div>

            {/* Destructive modal */}
            <div className="rounded-lg border-2 bg-white">
              <div className="px-4 py-2 sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 rounded-full bg-red-100 p-2">
                    <Trash2 className="m-auto h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-black">Delete team member?</h3>
                </div>
                <div className="mt-2 ml-11">
                  <p className="text-grey-500 text-sm">
                    Removing <strong>Sarah Johnson</strong> will revoke her access immediately.
                  </p>
                  <p className="mt-2 text-sm font-semibold text-black">
                    This action cannot be undone.
                  </p>
                </div>
                <div className="mt-4 flex justify-end gap-3">
                  <button
                    type="button"
                    className="text-md active:bg-grey-200 hover:bg-grey-100 focus:outline-primary-600 min-w-32 rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline-1 focus:outline-offset-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="text-md min-w-32 rounded-md border-2 bg-red-300 px-4 py-2 font-semibold text-black transition-colors hover:bg-red-200 focus:outline-1 focus:outline-offset-2 focus:outline-red-500 focus:outline-red-600 active:bg-red-100"
                  >
                    Delete member
                  </button>
                </div>
              </div>
            </div>

            {/* Error recovery modal */}
            <div className="rounded-lg border-2 bg-white">
              <div className="px-4 py-2 sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="bg-primary-100 flex h-12 w-12 rounded-full p-2">
                    <XCircle className="m-auto h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-black">Connection lost</h3>
                </div>
                <div className="mt-2 ml-11">
                  <p className="text-grey-500 text-sm">
                    We couldn't save your changes because the connection was interrupted.
                  </p>
                </div>
                <div className="mt-4 flex gap-3">
                  <button
                    type="button"
                    className="text-md focus:outline-primary-500 bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 min-w-32 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline-1 focus:outline-offset-2"
                  >
                    Try again
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
