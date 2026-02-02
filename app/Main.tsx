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
import {
  AlertCircle,
  AlertTriangle,
  Check,
  CheckCircle,
  XCircle,
  Search,
  PlusCircle,
  TrendingUp,
  ExternalLink,
  Database,
  Trash2,
  Edit2,
  ThumbsUp,
  File,
  Info,
  ChevronUp,
  ChevronDown,
  FolderPlus,
  Upload,
  UploadCloud,
  Inbox,
  Folder,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  ArrowDownLeft,
  PlayCircle,
  Copy,
  RefreshCcw,
  Link2,
  Plus,
  Hexagon,
  Octagon,
  HelpCircle,
  User,
  MessageCircle,
  Table,
  Zap,
  Calendar,
  FileText,
  HardDrive,
  Users,
  Layout,
  Layers,
  Bell,
  Settings,
  XSquare,
} from 'react-feather'

const MAX_DISPLAY = 5

function MyCustomComponentBase({ label }: { label: string }) {
  return (
    <div className="text-grey-700 rounded-md border-2 p-2 text-sm">Custom component: {label}</div>
  )
}

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-lg font-semibold text-black">{children}</h3>
)
const ScenarioTitle = ({ children }: { children: React.ReactNode }) => (
  <p className="text-grey-600 text-sm font-medium">{children}</p>
)
const Divider = () => <hr className="" />

function MyCustomComponent1() {
  return (
    <div
      role="region"
      aria-label="UI pattern playbook scenarios"
      className="overflow-y-auto rounded-lg border-2 p-4"
    >
      {/* ——— 4. Visual styles ——— */}
      <section className="space-y-4">
        <SectionTitle>4. Visual styles</SectionTitle>

        {/* Border radius: badge, button, card */}
        <ScenarioTitle>
          Border-2 radius: badge (rounded-md), button, card (rounded-lg)
        </ScenarioTitle>
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
          <div className="rounded-lg border-2">
            <div className="px-4 py-2 sm:p-6">
              <h3 className="text-base font-semibold text-black">Card Title</h3>
              <p className="text-grey-500 mt-1 text-sm">Card content…</p>
            </div>
          </div>
        </div>

        {/* Interaction states */}
        <ScenarioTitle>Interaction states: Rest, Hover, Active, Focus, Disabled</ScenarioTitle>
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
        <ScenarioTitle>Selected state: Tabs, Card, Checkbox</ScenarioTitle>
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
        <ScenarioTitle>
          Indicating interactivity: inline action, link, primary/secondary buttons
        </ScenarioTitle>
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
        <ScenarioTitle>
          Complete patterns: Primary, Secondary, Semantic, Link, Interactive card
        </ScenarioTitle>
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
        <div className="rounded-lg border-2">
          <button
            type="button"
            className="hover:border-primary-400 hover:bg-primary-50 focus:outline-primary-500 active:border-primary-400 active:bg-primary-100 focus:outline-primary-600 w-full p-4 text-left transition-all focus:outline-1 focus:outline-offset-2 sm:p-6"
          >
            <h3 className="text-base font-semibold text-black">Card Title</h3>
            <p className="text-grey-500 mt-1 text-sm">Card description</p>
          </button>
        </div>
      </section>

      <Divider />

      {/* ——— 5. Status and health ——— */}
      <section className="space-y-4">
        <SectionTitle>5. Status and health</SectionTitle>

        {/* Status color tokens */}
        <ScenarioTitle>Status color tokens: Ideal, Good, Neutral, Warning, Critical</ScenarioTitle>
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
        <ScenarioTitle>Health indicator (shape), Chip, Message container</ScenarioTitle>
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
        <ScenarioTitle>
          Toast, Information overlay, Status highlight (border-l-4), Trend
        </ScenarioTitle>
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

      <Divider />

      {/* ——— 6. Navigation ——— */}
      <section className="space-y-4">
        <SectionTitle>6. Navigation</SectionTitle>

        {/* Flat navigation */}
        <ScenarioTitle>Flat navigation</ScenarioTitle>
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
        <ScenarioTitle>Breadcrumbs (nested)</ScenarioTitle>
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
        <ScenarioTitle>Primary navigation (tabs), Secondary (sidebar)</ScenarioTitle>
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
        <ScenarioTitle>Links: inline, nav with icon, external</ScenarioTitle>
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

      <Divider />

      {/* ——— 7. Forms ——— */}
      <section className="space-y-4">
        <SectionTitle>7. Forms</SectionTitle>

        {/* Labels, hint, placeholder */}
        <ScenarioTitle>Labels: standard, required. Hint. Placeholder.</ScenarioTitle>
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
        <ScenarioTitle>Address form (grid grid-cols-2 gap-2)</ScenarioTitle>
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
        <ScenarioTitle>Form structure: Email / Password, checkboxes, actions</ScenarioTitle>
        <form className="max-w-md" onSubmit={(e) => e.preventDefault()}>
          <div className="rounded-lg border-2">
            <div className="px-4 py-2 sm:p-6">
              <div className="space-y-6">
                {/* Full name */}
                <div>
                  <label htmlFor="playbook-name" className="block text-sm font-semibold text-black">
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
        <ScenarioTitle>Validation error: border-red-500, error message</ScenarioTitle>
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

      <Divider />

      {/* ——— 8. Common Actions ——— */}
      <section className="space-y-4">
        <SectionTitle>8. Common Actions</SectionTitle>
        <ScenarioTitle>
          Add, Cancel, Clear, Close, Copy, Delete, Edit, Next, Refresh, Remove, Reset
        </ScenarioTitle>
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

          {/* Delete — danger */}
          <button
            type="button"
            className="focus:outline-primary-600 inline-flex items-center gap-2 rounded-md border-2 border-transparent bg-red-600 px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-red-700 focus:outline-1 focus:outline-offset-2 focus:outline-red-500"
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

      <div className="mt-6 space-y-8">
        {/* ——— 1. Typography ——— */}
        <section className="space-y-4">
          <SectionTitle>1. Typography</SectionTitle>
          <ScenarioTitle>Type scale: Display, Heading, Subheading, Body, Subtext</ScenarioTitle>
          <div className="space-y-2">
            <h1 className="text-5xl font-extrabold text-black">Main Headline</h1>
            <h2 className="text-2xl font-bold text-black">Section Title</h2>
            <h3 className="text-lg font-medium text-black">Subsection</h3>
            <p className="text-grey-700 text-base font-normal">Main content text…</p>
            <p className="text-grey-500 text-sm font-medium">Helper text</p>
          </div>
          <ScenarioTitle>Content rules: ellipsis, curly quotes, non‑breaking space</ScenarioTitle>
          <div className="text-grey-700 space-y-1 text-sm">
            <p>Loading… please wait</p>
            <p>She said, "Hello world."</p>
            <p>File size: 10&nbsp;MB</p>
          </div>
          <ScenarioTitle>Typography vertical spacing (space-y-1)</ScenarioTitle>
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-black">Heading</h2>
            <p className="text-grey-500 text-sm">Subtitle</p>
          </div>
        </section>

        <Divider />

        {/* ——— 10. Empty States ——— */}
        <section className="space-y-4">
          <SectionTitle>10. Empty States</SectionTitle>
          <ScenarioTitle>No Data (First Use), User Action Result, Error Management</ScenarioTitle>
          <div className="space-y-4">
            {/* First use — card anatomy */}
            <div className="rounded-lg border-2">
              <div className="px-4 py-2 sm:p-6">
                <div className="text-center">
                  <User className="m-auto h-6 w-6" />
                  <h3 className="mt-4 text-lg font-medium text-black">No patients yet</h3>
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
            <div className="rounded-lg border-2">
              <div className="px-4 py-2 sm:p-6">
                <div className="text-center">
                  <HelpCircle className="m-auto h-6 w-6" />
                  <h3 className="mt-4 text-lg font-medium text-black">No results found</h3>
                  <p className="text-grey-500 mt-1 text-sm">
                    Try adjusting your search terms or filters
                  </p>
                </div>
              </div>
            </div>

            {/* Error recovery */}
            <div className="rounded-lg border-2">
              <div className="px-4 py-2 sm:p-6">
                <div className="text-center">
                  <XCircle className="m-auto h-6 w-6" />
                  <h3 className="mt-4 text-lg font-medium text-black">Unable to load data</h3>
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

        <Divider />

        {/* ——— 11. Loading States ——— */}
        <section className="space-y-4">
          <SectionTitle>11. Loading States</SectionTitle>
          <ScenarioTitle>
            Skeleton states, Full-screen loading, Inline loading, Progressive loading
          </ScenarioTitle>
          <div className="space-y-4">
            {/* Skeleton lines */}
            <div className="space-y-2">
              <div className="bg-grey-200 h-4 w-3/4 animate-pulse rounded" />
              <div className="bg-grey-200 h-4 w-1/2 animate-pulse rounded" />
            </div>

            {/* Skeleton card — aligned to card anatomy */}
            <div className="rounded-lg border-2">
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

        <Divider />

        {/* ——— 12. Modal Patterns ——— */}
        <section className="space-y-4">
          <SectionTitle>12. Modal Patterns</SectionTitle>
          <ScenarioTitle>
            Confirm/Cancel, Destructive, Error Recovery, Permissions Request
          </ScenarioTitle>
          <div className="space-y-4">
            {/* Confirm modal */}
            <div className="rounded-lg border-2">
              <div className="px-4 py-2 sm:p-6">
                <h3 className="text-lg font-bold text-black">Publish article?</h3>
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
            <div className="rounded-lg border-2">
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
            <div className="rounded-lg border-2">
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

function MyCustomComponent2() {
  return (
    <div className="flex flex-col gap-4">
      {/* Header — C3 navbar pattern: rounded-lg border-2 outer, h-16 inner flex, border-primary-600 active tab */}
      <div className="border-b-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <label htmlFor="dashboard-search" className="sr-only">
                  Search
                </label>
                <input
                  id="dashboard-search"
                  type="search"
                  placeholder="Search…"
                  className="focus:outline-primary-500 border-grey-600 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-600 block w-64 rounded-md border-2 py-2 pr-3 pl-10 text-sm text-black focus:outline-1 focus:outline-offset-2"
                />
                <Search className="text-grey-400 pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="focus:outline-primary-500 text-grey-600 hover:bg-grey-100 focus:outline-primary-600 relative rounded-md p-2 transition focus:outline-1 focus:outline-offset-2"
                aria-label="Notifications"
              >
                <Bell />
                <span
                  className="bg-primary-600 absolute top-2 right-2 size-2 rounded-full"
                  aria-hidden="true"
                />
              </button>
              <button
                type="button"
                className="focus:outline-primary-500 focus:outline-primary-600 flex items-center gap-2 rounded-md transition focus:outline-1 focus:outline-offset-2"
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
                  className="text-grey-400 size-4"
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
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar — C3 vertical nav pattern: rounded-lg border-2 outer, px-4 py-2 sm:p-6 surface, space-y-1 nav */}
        <aside className="w-64 overflow-y-auto">
          <div className="px-4 py-2 sm:p-6">
            <nav className="space-y-1" aria-label="Main">
              <button
                type="button"
                className="bg-grey-100 flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm font-semibold text-black"
              >
                <Layers />
                Dashboard
              </button>
              <button
                type="button"
                className="text-grey-600 hover:bg-grey-50 flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm font-medium hover:text-black"
              >
                <Users />
                Teams
              </button>
              <nav className="mb-4" aria-label="Teams">
                <button
                  type="button"
                  className="text-grey-600 hover:bg-grey-50 flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-sm font-medium hover:text-black"
                >
                  <span
                    className="bg-primary-100 flex size-6 shrink-0 items-center justify-center rounded-md text-sm font-semibold text-black"
                    aria-hidden="true"
                  >
                    H
                  </span>
                  Heroicons
                </button>
                <button
                  type="button"
                  className="text-grey-600 hover:bg-grey-50 flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-sm font-medium hover:text-black"
                >
                  <span
                    className="flex size-6 shrink-0 items-center justify-center rounded-md bg-emerald-100 text-sm font-semibold text-black"
                    aria-hidden="true"
                  >
                    T
                  </span>
                  Tailwind Labs
                </button>
                <button
                  type="button"
                  className="text-grey-600 hover:bg-grey-50 flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-sm font-medium hover:text-black"
                >
                  <span
                    className="flex size-6 shrink-0 items-center justify-center rounded-md bg-red-100 text-sm font-semibold text-black"
                    aria-hidden="true"
                  >
                    W
                  </span>
                  Workcation
                </button>
              </nav>
              <button
                type="button"
                className="text-grey-600 hover:bg-grey-50 flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm font-medium hover:text-black"
              >
                <Folder />
                Projects
              </button>
              <button
                type="button"
                className="text-grey-600 hover:bg-grey-50 flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm font-medium hover:text-black"
              >
                <Calendar />
                Calendar
              </button>
              <button
                type="button"
                className="text-grey-600 hover:bg-grey-50 flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm font-medium hover:text-black"
              >
                <FileText />
                Documents
              </button>
              <button
                type="button"
                className="text-grey-600 hover:bg-grey-50 flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm font-medium hover:text-black"
              >
                <HardDrive />
                Reports
              </button>
            </nav>
          </div>
        </aside>

        {/* Main content — C3 surface pattern: px-4 py-2 sm:p-6 inside rounded-lg border-2 cards */}
        <main className="flex-1 overflow-y-auto">
          <div className="space-y-8 p-6">
            <div className="space-y-1">
              <h1 className="text-2xl font-bold text-black">Dashboard</h1>
              <p className="text-grey-600 text-sm font-medium">
                Welcome back. Here&apos;s what&apos;s happening with your projects today.
              </p>
            </div>

            {/* Stat cards — C3 Stats pattern: overflow-hidden rounded-lg border-2, inner px-4 py-2 sm:p-6 */}
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-lg border-2">
                <div className="px-4 py-2 sm:p-6">
                  <div className="flex items-baseline gap-2">
                    <Octagon className="my-auto" />
                    <dt className="text-grey-500 truncate text-sm font-medium">Total Revenue</dt>
                  </div>
                  <dd className="mt-1 text-3xl font-semibold text-black">$45,231</dd>
                  <div className="mt-2 flex items-baseline gap-1">
                    <div className="inline-flex items-baseline gap-1 rounded-full bg-emerald-400 px-2 py-1 text-sm font-medium text-black">
                      <ArrowUpRight className="m-auto h-4 w-4" />
                      <span className="sr-only">Increased by</span>
                      12%
                    </div>
                    <span className="text-grey-500 text-sm">from last month</span>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg border-2">
                <div className="px-4 py-2 sm:p-6">
                  <div className="flex items-baseline gap-2">
                    <User className="my-auto" />
                    <dt className="text-grey-500 truncate text-sm font-medium">Active Users</dt>
                  </div>
                  <dd className="mt-1 text-3xl font-semibold text-black">2,340</dd>
                  <div className="mt-2 flex items-baseline gap-1">
                    <div className="inline-flex items-baseline gap-1 rounded-full bg-emerald-400 px-2 py-1 text-sm font-medium text-black">
                      <ArrowUpRight className="m-auto h-4 w-4" />
                      <span className="sr-only">Increased by</span>
                      8%
                    </div>
                    <span className="text-grey-500 text-sm">from last month</span>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg border-2">
                <div className="px-4 py-2 sm:p-6">
                  <div className="flex items-baseline gap-2">
                    <Folder className="my-auto" />
                    <dt className="text-grey-500 truncate text-sm font-medium">New Projects</dt>
                  </div>
                  <dd className="mt-1 text-3xl font-semibold text-black">12</dd>
                  <div className="mt-2 flex items-baseline gap-1">
                    <div className="inline-flex items-baseline gap-1 rounded-full bg-red-400 px-2 py-1 text-sm font-medium text-black">
                      <ArrowDownLeft className="m-auto h-4 w-4" />
                      <span className="sr-only">Decreased by</span>
                      3%
                    </div>
                    <span className="text-grey-500 text-sm">from last month</span>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg border-2">
                <div className="px-4 py-2 sm:p-6">
                  <div className="flex items-baseline gap-2">
                    <MessageCircle className="my-auto" />
                    <dt className="text-grey-500 truncate text-sm font-medium">Avg. Response</dt>
                  </div>
                  <dd className="mt-1 text-3xl font-semibold text-black">2.4h</dd>
                  <div className="mt-2 flex items-baseline gap-1">
                    <div className="inline-flex items-baseline gap-1 rounded-full bg-emerald-400 px-2 py-1 text-sm font-medium text-black">
                      <ArrowUpRight className="m-auto h-4 w-4" />
                      <span className="sr-only">Increased by</span>
                      5%
                    </div>
                    <span className="text-grey-500 text-sm">from last month</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity — C3 card heading pattern: border-grey-700 overflow-hidden rounded-lg border-2, border-grey-700 border-b-2 px-6 py-4 header */}
            <div className="border-grey-700 overflow-hidden rounded-lg border-2">
              <div className="border-grey-700 border-b-2 px-6 py-4">
                <h3 className="text-base font-bold text-black">Recent Activity</h3>
              </div>
              <div className="px-4 py-2 sm:p-6">
                <p className="text-grey-500 text-sm font-medium">Content goes here…</p>
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
          <div className="border-grey-700 overflow-hidden rounded-lg border-2">
            <div className="border-grey-700 flex items-center justify-between border-b-2 px-6 py-4">
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
        <div className="border-grey-700 overflow-hidden rounded-lg border-2">
          <div className="border-grey-700 flex items-center justify-between border-b-2 px-6 py-4">
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
            <div className="border-grey-700 overflow-hidden rounded-lg border-2 p-4">
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

            <div className="border-grey-700 overflow-hidden rounded-lg border-2 p-4">
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

            <div className="border-grey-700 overflow-hidden rounded-lg border-2 p-4">
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

        {/* Rule Simulator - Reasoning Trace */}
        <div className="border-grey-700 overflow-hidden rounded-lg border-2">
          <div className="border-grey-700 border-b-2 px-6 py-4">
            <h3 className="text-base font-bold text-black">Reasoning Trace</h3>
          </div>
          <div className="space-y-4 px-6 py-4">
            <div className="bg-grey-100 border-1 border-l-8 border-red-600 p-4">
              <p className="font-mono text-sm text-black">Rule: PII_REDACTION_STRICT</p>
              <p className="text-grey-500 mt-1 font-mono text-sm">
                Triggered: Patient scheduleling detected in response
              </p>
              <p className="text-grey-500 mt-1 font-mono text-sm">Action: Response blocked</p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="text-md bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 inline-flex items-center gap-2 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline-1 focus:outline-offset-2"
              >
                <ThumbsUp className="size-5 flex-shrink-0" />
                Generate fix suggestion
              </button>
              <div class="mr-0 ml-auto flex overflow-hidden rounded-md border-2">
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
        <div className="border-grey-700 overflow-hidden rounded-lg border-2">
          <div className="border-grey-700 border-b-2 px-6 py-4">
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
        <div className="rounded-lg border-2">
          <div className="px-4 py-2 sm:p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-medium text-black">Profile Information</h3>
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
        <div className="overflow-hidden rounded-lg border-2">
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
            <nav className="border-grey-700 flex space-x-8 border-b-2" aria-label="Tabs">
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
    </div>
  )
}

function MyCustomComponent6() {
  return <MyCustomComponentBase label="Tab6" />
}

export default function Home({ posts }) {
  const conditionOptions = [
    { label: 'Class1', className: 'class1' },
    { label: 'Class2', className: 'class2' },
    { label: 'Class3', className: 'class3' },
    { label: 'Class4', className: 'class4' },
  ]
  const [conditionLevel, setConditionLevel] = useState(conditionOptions[0].label)
  const activeCondition = conditionOptions.find((option) => option.label === conditionLevel)
  const tabGroups = [
    {
      label: 'Demo 1',
      items: [
        {
          title: 'Catch me if you can',
          body: 'Just a mess of scenarios',
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
          body: 'Demo dashboard.',
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
          body: 'Simple organisms',
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
      <div className="w-full space-y-5 pt-6 pb-8">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-black sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          <code>ui-pattern-playbook</code>
        </h1>
        <p className="text-grey-500 text-lg leading-7">{siteMetadata.description}</p>
        <div className="w-full pt-6">
          <Tab.Group>
            <div
              className={['w-full', activeCondition?.className].filter(Boolean).join(' ')}
              data-condition-level={conditionLevel}
            >
              <div className="text-grey-500 mb-4 text-center text-sm font-semibold tracking-wide uppercase">
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
                        'rounded-full border-2 px-3 py-1 text-xs font-semibold tracking-wide uppercase transition',
                        option.label === conditionLevel
                          ? 'border-grey-900 bg-grey-900 text-black border-grey-100  '
                          : ' bg-grey-100 text-grey-700 hover:bg-grey-200    ',
                      ].join(' ')}
                      aria-label={`Set condition ${option.label}`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div> */}
              <Tab.List className="flex justify-center gap-2" data-condition-level={conditionLevel}>
                {tabGroups.map((group) => (
                  <Tab
                    key={group.label}
                    className={({ selected }) =>
                      [
                        'rounded-full px-4 py-2 text-sm font-medium transition',
                        selected ? 'text-emerald-500' : 'text-black hover:text-emerald-500',
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
      {/* <ul className="divide-y border-2 divide-grey-700 ">
        {!posts.length && 'No posts found.'}
        {posts.slice(0, MAX_DISPLAY).map((post) => {
          const { slug, date, title, summary, tags } = post
          return (
            <li key={slug} className="py-12">
              <article>
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base leading-6 font-medium text-grey-500 ">
                      <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                    </dd>
                  </dl>
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl leading-8 font-bold tracking-tight">
                          <Link
                            href={`/blog/${slug}`}
                            className="text-black "
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
                      <div className="prose max-w-none text-grey-500 ">
                        {summary}
                      </div>
                    </div>
                    <div className="text-base leading-6 font-medium">
                      <Link
                        href={`/blog/${slug}`}
                        className="text-primary-500 hover:text-primary-600 hover:text-primary-400"
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
      {/* {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 hover:text-primary-400"
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
