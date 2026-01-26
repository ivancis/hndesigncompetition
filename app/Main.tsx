'use client'

import { useState } from 'react'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import TabItemCard from '@/components/TabItemCard'
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

function MyCustomComponent1() {
  return (
    <div
      role="dialog"
      aria-labelledby="unsaved-dialog-title"
      aria-describedby="unsaved-dialog-description"
      className="rounded-md border border-gray-200 bg-white p-4 text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
    >
      <div className="border-b border-gray-200 pb-3 dark:border-gray-700">
        <h4
          id="unsaved-dialog-title"
          className="text-xl font-bold text-gray-900 dark:text-gray-100"
        >
          Unsaved changes
        </h4>
      </div>
      <div className="px-4 py-3">
        <div className="space-y-1">
          <p id="unsaved-dialog-description" className="text-sm text-gray-600 dark:text-gray-300">
            You have unsaved changes. Save before you leave to avoid losing work.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Title formula: <strong>Action</strong> + <strong>object</strong>. Body formula:
            <strong> state</strong> + <strong> consequence</strong> + <strong> next step</strong>.
          </p>
        </div>
      </div>
      <div className="flex justify-end gap-2 border-t border-gray-200 pt-3 dark:border-gray-700">
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
  )
}

function MyCustomComponent2() {
  return (
    <div
      role="dialog"
      aria-labelledby="glossary-dialog-title"
      aria-describedby="glossary-dialog-description"
      className="rounded-md border border-gray-200 bg-white p-4 text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
    >
      <div className="border-b border-gray-200 pb-3 dark:border-gray-700">
        <h4
          id="glossary-dialog-title"
          className="text-xl font-bold text-gray-900 dark:text-gray-100"
        >
          Contextual glossary
        </h4>
      </div>
      <div className="px-4 py-3">
        <div className="space-y-2">
          <p id="glossary-dialog-description" className="text-sm text-gray-600 dark:text-gray-300">
            Use consistent terms in UI copy to reduce ambiguity.
          </p>
          <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
            <p>
              <strong>Affect</strong> (verb): influence or cause change.
            </p>
            <p>
              <strong>Effect</strong> (noun): result of a change.
            </p>
            <p>
              Use <strong>select</strong> for device-agnostic actions. Use <strong>click</strong>{' '}
              for mouse actions only.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-2 border-t border-gray-200 pt-3 dark:border-gray-700">
        <button
          type="button"
          className="rounded-sm border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
        >
          Cancel
        </button>
        <button
          type="button"
          className="rounded-sm bg-gray-900 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
        >
          Got it
        </button>
      </div>
    </div>
  )
}

function MyCustomComponent3() {
  return (
    <div
      role="dialog"
      aria-labelledby="voice-builder-title"
      aria-describedby="voice-builder-description"
      className="rounded-md border border-gray-200 bg-white p-4 text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
    >
      <div className="border-b border-gray-200 pb-3 dark:border-gray-700">
        <h4 id="voice-builder-title" className="text-xl font-bold text-gray-900 dark:text-gray-100">
          Voice agent builder
        </h4>
      </div>
      <div className="px-4 py-3">
        <div className="space-y-4">
          <p id="voice-builder-description" className="text-sm text-gray-600 dark:text-gray-300">
            Use the controls to preview and pause the current prompt. Stop ends the session and
            clears the buffer.
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-sm border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <rect x="3" y="3" width="4" height="10" rx="1.2" fill="currentColor" />
                <rect x="9" y="3" width="4" height="10" rx="1.2" fill="currentColor" />
              </svg>
              Pause
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-sm bg-gray-900 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 3.5L12 8L4 12.5V3.5Z" fill="currentColor" />
              </svg>
              Play
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-sm border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <rect x="3.5" y="3.5" width="9" height="9" rx="1.2" fill="currentColor" />
              </svg>
              Stop
            </button>
          </div>
          <div
            className="rounded-md border border-gray-200 bg-gray-50 p-4 text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
            aria-label="Audio recording visualization"
          >
            <div className="space-y-1">
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                Recording signal
              </p>
              <div className="rounded-sm bg-white p-2 dark:bg-gray-900">
                <svg width="100%" height="48" viewBox="0 0 240 48" fill="none" aria-hidden="true">
                  <path
                    d="M4 24H18L24 10L32 38L40 18L48 30L56 16L64 24L72 8L80 40L88 20L96 28L104 12L112 24L120 6L128 42L136 22L144 30L152 18L160 24L168 14L176 34L184 20L192 28L200 10L208 38L216 24L224 32L232 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MyCustomComponent4() {
  return <MyCustomComponentBase label="Tab4" />
}

function MyCustomComponent5() {
  return <MyCustomComponentBase label="Tab5" />
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
          slot: <MyCustomComponent1 />,
        },
        {
          title: 'Second Item',
          body: 'Each item uses a header/body/footer structure.',
          footer: 'Status: Ideal — Completed',
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
      label: '4',
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
      label: '5',
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
