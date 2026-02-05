'use client'

import {
  Search,
  Folder,
  ArrowUpRight,
  ArrowDownLeft,
  Octagon,
  User,
  MessageCircle,
  Calendar,
  FileText,
  HardDrive,
  Users,
  Layers,
  Bell,
} from 'react-feather'

/**
 * Kitchen Sink / UI Kit Stress Test component.
 * Renders a comprehensive set of HTML elements for consistency testing.
 * Styled per ui-pattern-playbook/: Tailwind only, typography/spacing from scale.
 */
export default function MyCustomComponent5() {
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
                <img
                  src="https://picsum.photos/200"
                  className="h-32 w-32 rounded-md border border-gray-200 p-2 outline-2"
                  alt="img"
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
            <div className="border-grey-700 overflow-hidden rounded-lg border-2 bg-white">
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

      <hr />
      <hr />
      <hr />

      <div className="min-h-screen bg-white font-sans text-black antialiased">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">
            <div className="lg:col-span-7">
              <div className="mb-8">
                <div className="bg-primary-600 flex h-8 w-8 items-center justify-center rounded-full">
                  <div className="h-4 w-4 rotate-45 rounded-sm border-2 border-white"></div>
                </div>
              </div>

              <button
                type="button"
                className="focus:outline-primary-500 hover:bg-grey-900 active:bg-grey-800 focus:outline-primary-600 mb-6 flex w-full items-center justify-center rounded-md border-2 border-black bg-black py-3 font-semibold text-white transition-colors focus:outline focus:outline-1 focus:outline-offset-2"
              >
                <span className="text-base"> Pay</span>
              </button>

              <div className="relative mb-8">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="border-grey-300 w-full border-t"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="text-grey-500 bg-white px-4">or</span>
                </div>
              </div>

              <form className="space-y-4">
                <div className="space-y-1">
                  <label htmlFor="email-address" className="block text-sm font-medium text-black">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    type="email"
                    className="focus:outline-primary-500 border-grey-600 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-600 w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline focus:outline-1 focus:outline-offset-2"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="name-on-card" className="block text-sm font-medium text-black">
                    Name on card
                  </label>
                  <input
                    id="name-on-card"
                    type="text"
                    className="focus:outline-primary-500 border-grey-600 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-600 w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline focus:outline-1 focus:outline-offset-2"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="card-number" className="block text-sm font-medium text-black">
                    Card number
                  </label>
                  <input
                    id="card-number"
                    type="text"
                    className="focus:outline-primary-500 border-grey-600 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-600 w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline focus:outline-1 focus:outline-offset-2"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label
                      htmlFor="expiration-date"
                      className="block text-sm font-medium text-black"
                    >
                      Expiration date (MM/YY)
                    </label>
                    <input
                      id="expiration-date"
                      type="text"
                      className="focus:outline-primary-500 border-grey-600 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-600 w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline focus:outline-1 focus:outline-offset-2"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="cvc" className="block text-sm font-medium text-black">
                      CVC
                    </label>
                    <input
                      id="cvc"
                      type="text"
                      className="focus:outline-primary-500 border-grey-600 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-600 w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline focus:outline-1 focus:outline-offset-2"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="address" className="block text-sm font-medium text-black">
                    Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    className="focus:outline-primary-500 border-grey-600 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-600 w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline focus:outline-1 focus:outline-offset-2"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    className="focus:outline-primary-500 border-grey-600 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-600 w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline focus:outline-1 focus:outline-offset-2"
                  />
                  <input
                    type="text"
                    placeholder="State / Province"
                    className="focus:outline-primary-500 border-grey-600 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-600 w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline focus:outline-1 focus:outline-offset-2"
                  />
                  <input
                    type="text"
                    placeholder="Postal code"
                    className="focus:outline-primary-500 border-grey-600 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-600 w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline focus:outline-1 focus:outline-offset-2"
                  />
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="border-grey-600 text-primary-600 focus:outline-primary-500 focus:outline-primary-600 h-4 w-4 rounded border-2 focus:outline focus:outline-1 focus:outline-offset-2"
                  />
                  <span className="text-sm font-medium text-black">
                    Billing address is the same as shipping address
                  </span>
                </div>

                <button
                  type="submit"
                  className="focus:outline-primary-500 bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 w-full rounded-md border-2 px-4 py-4 font-semibold text-black transition-colors focus:outline focus:outline-1 focus:outline-offset-2"
                >
                  Pay $341.68
                </button>

                <div className="mt-4 flex items-center justify-center gap-2">
                  <svg
                    className="text-grey-500 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  <small>Payment details stored in plain text</small>
                </div>
              </form>
            </div>

            <div className="mt-16 lg:col-span-5 lg:mt-0">
              <div className="sticky top-12 space-y-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="border-grey-300 bg-grey-50 h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg border-2">
                      <img
                        src="https://picsum.photos/200"
                        className="h-96 w-96 rounded-md border border-gray-200 p-2 outline-2"
                        alt="img"
                      />
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between font-medium">
                        <h3 className="text-black">Micro Backpack</h3>
                        <p className="text-black">$70.00</p>
                      </div>
                      <small className="text-grey-500 mt-1 block">Moss</small>
                      <small className="text-grey-500 block">5L</small>
                      <div className="mt-2 flex gap-4">
                        <button
                          type="button"
                          className="text-primary-600 hover:text-primary-700 focus:outline-primary-500 focus:outline-primary-600 text-sm font-semibold underline transition-colors focus:outline focus:outline-1 focus:outline-offset-2"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="text-grey-500 hover:text-grey-600 focus:outline-primary-600 text-sm font-semibold transition-colors focus:outline focus:outline-1 focus:outline-offset-2"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-grey-300 space-y-4 border-t pt-6">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Discount code"
                      className="focus:outline-primary-500 border-grey-600 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-600 flex-1 rounded-md border-2 px-3 py-2 text-sm text-black focus:outline focus:outline-1 focus:outline-offset-2"
                    />
                    <button
                      type="button"
                      className="focus:outline-primary-600 bg-grey-200 hover:bg-grey-300 active:bg-grey-100 border-grey-300 rounded-md border-2 px-4 py-2 text-sm font-semibold text-black transition-colors focus:outline focus:outline-1 focus:outline-offset-2"
                    >
                      Apply
                    </button>
                  </div>

                  <div className="text-grey-600 flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span className="font-medium text-black">$210.00</span>
                  </div>
                  <div className="text-grey-600 flex justify-between text-sm">
                    <span className="flex items-center">
                      Discount
                      <span className="bg-grey-200 ml-2 rounded px-2 py-0.5 text-[10px] font-bold tracking-wider text-black">
                        CHEAPSKATE
                      </span>
                    </span>
                    <span className="font-medium text-black">-$24.00</span>
                  </div>
                  <div className="text-grey-600 flex justify-between text-sm">
                    <span>Taxes</span>
                    <span className="font-medium text-black">$23.68</span>
                  </div>
                  <div className="text-grey-600 flex justify-between text-sm">
                    <span>Shipping</span>
                    <span className="font-medium text-black">$22.00</span>
                  </div>
                  <div className="border-grey-300 flex justify-between border-t pt-4 text-lg font-bold text-black">
                    <span>Total</span>
                    <span>$341.68</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
