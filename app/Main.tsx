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
    <div className="rounded-md border border-gray-200 bg-white px-3 py-2 text-xs text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200">
      Custom component: {label}
    </div>
  )
}

function MyCustomComponent1() {
  return (
    <div
      role="dialog"
      aria-labelledby="confirm-dialog-title"
      aria-describedby="confirm-dialog-description"
      className="rounded-md border border-gray-200 bg-white p-4 text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
    >
      <div className="header border-b border-gray-200 pb-3 dark:border-gray-700">
        <h4
          id="confirm-dialog-title"
          className="text-base font-semibold text-gray-900 dark:text-gray-100"
        >
          Confirm action
        </h4>
      </div>
      <div className="body py-3">
        <p id="confirm-dialog-description" className="text-sm text-gray-600 dark:text-gray-300">
          Are you sure you want to continue? This action can be reversed later.
        </p>
      </div>
      <div className="footer flex justify-end gap-2 border-t border-gray-200 pt-3 dark:border-gray-700">
        <button
          type="button"
          className="rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
        >
          Cancel
        </button>
        <button
          type="button"
          className="rounded-md bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
        >
          MOIST
        </button>
      </div>
    </div>
  )
}

function MyCustomComponent2() {
  return (
    <div
      role="dialog"
      aria-labelledby="danger-dialog-title"
      aria-describedby="danger-dialog-description"
      className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-900 shadow-sm dark:border-red-500/40 dark:bg-red-950 dark:text-red-100"
    >
      <div className="header border-b border-red-200 pb-3 dark:border-red-500/40">
        <h4 id="danger-dialog-title" className="text-base font-semibold">
          Delete file
        </h4>
      </div>
      <div className="body py-3">
        <p id="danger-dialog-description" className="text-sm text-red-800 dark:text-red-200">
          This will permanently delete the file. This action cannot be undone.
        </p>
      </div>
      <div className="footer flex justify-end gap-2 border-t border-red-200 pt-3 dark:border-red-500/40">
        <button
          type="button"
          className="rounded-md border border-red-200 bg-white px-3 py-1.5 text-xs font-semibold text-red-900 hover:bg-red-100 dark:border-red-500/40 dark:bg-red-950 dark:text-red-100 dark:hover:bg-red-900"
        >
          Cancel
        </button>
        <button
          type="button"
          className="rounded-md bg-red-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-500"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

function MyCustomComponent3() {
  return (
    <div
      role="dialog"
      aria-labelledby="warning-dialog-title"
      aria-describedby="warning-dialog-description"
      className="rounded-md border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-900 shadow-sm dark:border-yellow-500/40 dark:bg-yellow-950 dark:text-yellow-100"
    >
      <div className="header border-b border-yellow-200 pb-3 dark:border-yellow-500/40">
        <h4 id="warning-dialog-title" className="text-base font-semibold">
          Production change
        </h4>
      </div>
      <div className="body py-3">
        <p id="warning-dialog-description" className="text-sm text-yellow-800 dark:text-yellow-200">
          This change will be reflected in the production environment. Review carefully before
          proceeding.
        </p>
      </div>
      <div className="footer flex justify-end gap-2 border-t border-yellow-200 pt-3 dark:border-yellow-500/40">
        <button
          type="button"
          className="rounded-md border border-yellow-200 bg-white px-3 py-1.5 text-xs font-semibold text-yellow-900 hover:bg-yellow-100 dark:border-yellow-500/40 dark:bg-yellow-950 dark:text-yellow-100 dark:hover:bg-yellow-900"
        >
          Cancel
        </button>
        <button
          type="button"
          className="rounded-md bg-yellow-500 px-3 py-1.5 text-xs font-semibold text-gray-900 hover:bg-yellow-400"
        >
          Confirm
        </button>
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
      label: 'Here I am',
      items: [
        {
          title: 'Catch me if you can',
          body: 'Drop your content here and keep the layout consistent.',
          footer: 'Last updated just now',
          slot: <MyCustomComponent1 />,
        },
        {
          title: 'Second Item',
          body: 'Each item uses a header/body/footer structure.',
          footer: 'Status: Ready',
          slot: <MyCustomComponent2 />,
        },
      ],
    },
    {
      label: '2',
      items: [
        {
          title: '2',
          body: 'Older items can live in a separate tab.',
          footer: 'Status: Archived',
          slot: <MyCustomComponent3 />,
        },
      ],
    },
    {
      label: '3',
      items: [
        {
          title: '3',
          body: 'Older items can live in a separate tab.',
          footer: 'Status: Archived',
          slot: <MyCustomComponent4 />,
        },
      ],
    },
    {
      label: '4',
      items: [
        {
          title: '4',
          body: 'Older items can live in a separate tab.',
          footer: 'Status: Archived',
          slot: <MyCustomComponent5 />,
        },
      ],
    },
    {
      label: '5',
      items: [
        {
          title: '5',
          body: 'Older items can live in a separate tab.',
          footer: 'Status: Archived',
          slot: <MyCustomComponent6 />,
        },
      ],
    },
    {
      label: '6',
      items: [
        {
          title: '6',
          body: 'Older items can live in a separate tab.',
          footer: 'Status: Archived',
          slot: <MyCustomComponent6 />,
        },
      ],
    },
  ]

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Goodbye friendo
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
          <div className="flex justify-center pt-6">
            <Tab.Group>
              <div
                className={[
                  'w-full max-w-2xl rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900',
                  activeCondition?.className,
                ]
                  .filter(Boolean)
                  .join(' ')}
                data-condition-level={conditionLevel}
              >
                <div className="mb-4 text-center text-sm font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
                  Render Zone
                </div>
                <div className="flex justify-center">
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
                </div>
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
