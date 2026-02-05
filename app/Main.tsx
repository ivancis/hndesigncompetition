'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import TabItemCard from '@/components/TabItemCard'
import MyCustomComponent1 from '@/components/MyCustomComponent1'
import MyCustomComponent2 from '@/components/MyCustomComponent2'
import MyCustomComponent3 from '@/components/MyCustomComponent3'
import MyCustomComponent4 from '@/components/MyCustomComponent4'
import MyCustomComponent5 from '@/components/MyCustomComponent5'
import siteMetadata from '@/data/siteMetadata'
import { Tab } from '@headlessui/react'

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
      label: 'UIKit',
      items: [
        {
          title: 'Catch me if you can',
          body: 'Collection of examples from the playbook',
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
      label: 'UIBlocks',
      items: [
        {
          title: '2',
          body: 'Quick examples of the playbook being asked to build a UI based off a screenshot',
          footer: 'Status: Neutral — Inactive',
          slot: <MyCustomComponent2 />,
        },
      ],
    },
    {
      label: 'Patterns',
      items: [
        {
          title: '3',
          body: 'Simple organisms that stress patterns from the playbook',
          footer: 'Status: Neutral — Inactive',
          slot: <MyCustomComponent3 />,
        },
      ],
    },
    {
      label: 'kitchenSink',
      items: [
        {
          title: '4',
          body: 'Basic kitchenSink test unstyled and styled.',
          footer: 'Status: Warning — Needs review',
          slot: <MyCustomComponent4 />,
        },
      ],
    },
    {
      label: 'Voice/AI patterns',
      items: [
        {
          title: '5',
          body: 'Specific organisms stated in the exercises',
          footer: 'Status: Neutral — Inactive',
          slot: <MyCustomComponent5 />,
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
              <Tab.List
                className="sticky top-0 z-10 flex justify-center gap-2 border-2 bg-white"
                data-condition-level={conditionLevel}
              >
                {tabGroups.map((group) => (
                  <Tab
                    key={group.label}
                    className={({ selected }) =>
                      [
                        'px-4 py-2 text-sm font-medium transition',
                        selected ? 'border-b-3 text-black' : 'text-grey-500 hover:text-black',
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
