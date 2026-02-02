'use client'

import { CheckCircle, XCircle } from 'react-feather'

/**
 * Kitchen Sink / UI Kit Stress Test component.
 * Renders a comprehensive set of HTML elements for consistency testing.
 * Styled per ui-pattern-playbook/: Tailwind only, typography/spacing from scale.
 */
export default function MyCustomComponent5() {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex gap-8">
        {/* <!-- Versions Panel --> */}
        <div className="border-grey-200 w-full max-w-md rounded-lg border-2 bg-white shadow-sm">
          {/* <!-- Header --> */}
          <div className="border-grey-700 flex items-center justify-between border-b-2 px-6 py-4">
            <h2 className="text-xl font-bold text-black">Versions</h2>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="border-grey-600 hover:bg-grey-100 focus:outline-primary-600 rounded-md border-2 p-2 transition-colors focus:outline focus:outline-1 focus:outline-offset-2"
                aria-label="Filter"
              >
                <XCircle />
              </button>
              <button
                type="button"
                className="border-grey-600 hover:bg-grey-100 focus:outline-primary-600 rounded-md border-2 p-2 transition-colors focus:outline focus:outline-1 focus:outline-offset-2"
                aria-label="Close"
              >
                <XCircle />
              </button>
            </div>
          </div>

          {/* <!-- Version List --> */}
          <div className="space-y-0">
            {/* <!-- New Version - Selected --> */}
            <div className="border-primary-600 bg-primary-50 flex items-start gap-4 border-l-4 px-6 py-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white">
                <XCircle />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-black">New Version</h3>
                  <XCircle />
                </div>
                <p className="text-grey-600 mt-1 text-sm">Aug 30, 2024</p>
              </div>
            </div>

            {/* <!-- Version 3.0 --> */}
            <div className="flex items-start gap-4 px-6 py-4">
              <div className="bg-primary-50 flex h-10 w-10 shrink-0 items-center justify-center rounded-md">
                <svg
                  className="text-primary-600 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-bold text-black">Version: 3.0</h3>
                <p className="text-grey-600 mt-1 text-sm">Aug 20, 2024 · By Jane Cooper</p>
              </div>
            </div>

            {/* <!-- Version 2.3 --> */}
            <div className="flex items-start gap-4 px-6 py-4">
              <div className="bg-primary-50 flex h-10 w-10 shrink-0 items-center justify-center rounded-md">
                <svg
                  className="text-primary-600 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-bold text-black">Version: 2.3</h3>
                <p className="text-grey-600 mt-1 text-sm">Jul 31, 2024 · By Wade Warren</p>
              </div>
            </div>

            {/* <!-- Nested Versions --> */}
            <div className="space-y-0 pl-14">
              {/* <!-- Version 2.2 --> */}
              <div className="flex items-start gap-4 px-6 py-3">
                <div className="bg-grey-50 flex h-8 w-8 shrink-0 items-center justify-center rounded-md">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-semibold text-black">Version: 2.2</h4>
                  <p className="text-grey-600 mt-1 text-sm">Jul 31, 2024 · By Esther Howard</p>
                </div>
              </div>

              {/* <!-- Version 2.1 --> */}
              <div className="flex items-start gap-4 px-6 py-3">
                <div className="bg-grey-50 flex h-8 w-8 shrink-0 items-center justify-center rounded-md">
                  <svg
                    className="text-grey-600 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-semibold text-black">Version: 2.1</h4>
                  <p className="text-grey-600 mt-1 text-sm">Jul 31, 2024 · By Jenny Wilson</p>
                </div>
              </div>

              {/* <!-- Version 2.0 --> */}
              <div className="flex items-start gap-4 px-6 py-3">
                <div className="bg-grey-50 flex h-8 w-8 shrink-0 items-center justify-center rounded-md">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-semibold text-black">Version: 2.0</h4>
                  <p className="text-grey-600 mt-1 text-sm">Jul 31, 2024 · By Wade Warren</p>
                </div>
              </div>
            </div>

            {/* <!-- Show More Button --> */}
            <div className="px-6 py-4">
              <button
                type="button"
                className="text-md hover:bg-grey-100 focus:outline-primary-600 active:bg-grey-200 w-full rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline focus:outline-1 focus:outline-offset-2"
              >
                Show More
              </button>
            </div>

            {/* <!-- Version 1.0 --> */}
            <div className="flex items-start gap-4 px-6 py-4">
              <div className="bg-primary-50 flex h-10 w-10 shrink-0 items-center justify-center rounded-md">
                <svg
                  className="text-primary-600 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-bold text-black">Version 1.0</h3>
                <p className="text-grey-600 mt-1 text-sm">Jun 20, 2024 · By Robert Fox</p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Activity Panel --> */}
        <div className="border-grey-200 w-full max-w-md rounded-lg border-2 bg-white shadow-sm">
          {/* <!-- Header --> */}
          <div className="border-grey-700 flex items-center justify-between border-b-2 px-6 py-4">
            <h2 className="text-xl font-bold text-black">Activity</h2>
            <button
              type="button"
              className="border-grey-600 hover:bg-grey-100 focus:outline-primary-600 rounded-md border-2 p-2 transition-colors focus:outline focus:outline-1 focus:outline-offset-2"
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
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* <!-- Activity List --> */}
          <div className="space-y-0">
            {/* <!-- Activity Item 1 --> */}
            <div className="flex items-start gap-4 px-6 py-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-50">
                <svg
                  className="h-5 w-5 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-black">
                  <span className="font-semibold">Kevin Dukkon</span> changed status from
                  <span className="font-semibold">Draft</span> to{' '}
                  <span className="font-semibold">In Progress</span>
                </p>
                <p className="text-grey-500 mt-1 text-sm">19m ago</p>
              </div>
            </div>

            {/* <!-- Activity Item 2 --> */}
            <div className="flex items-start gap-4 px-6 py-4">
              <div className="bg-primary-50 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                <svg
                  className="text-primary-600 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-black">
                  <span className="font-semibold">Monty Hayton</span> created the{' '}
                  <span className="font-semibold">Energy Charter Treaty</span>
                </p>
                <p className="text-grey-500 mt-1 text-sm">Yesterday</p>
              </div>
            </div>

            {/* <!-- Activity Item 3 --> */}
            <div className="flex items-start gap-4 px-6 py-4">
              <div className="bg-primary-50 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                <svg
                  className="text-primary-600 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-black">
                  <span className="font-semibold">Monty Hayton</span> edited the{' '}
                  <span className="font-semibold">Energy Charter Treaty</span>
                </p>
                <p className="text-grey-500 mt-1 text-sm">Yesterday</p>
              </div>
            </div>

            {/* <!-- Activity Item 4 --> */}
            <div className="flex items-start gap-4 px-6 py-4">
              <div className="bg-primary-50 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                <svg
                  className="text-primary-600 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-black">
                  <span className="font-semibold">Monty Hayton</span> change the title to
                  <span className="font-semibold">Energy Charter Treaty V2.0</span>
                </p>
                <p className="text-grey-500 mt-1 text-sm">Yesterday</p>
              </div>
            </div>

            {/* <!-- Activity Item 5 --> */}
            <div className="flex items-start gap-4 px-6 py-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50">
                <svg
                  className="h-5 w-5 text-emerald-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-black">
                  <span className="font-semibold">Monty Hayton</span> merged{' '}
                  <span className="font-semibold">Energy Charter Treaty V2.0</span> to the{' '}
                  <span className="font-semibold">Supply Chain Transparency</span>
                </p>
                <p className="text-grey-500 mt-1 text-sm">Yesterday</p>
              </div>
            </div>

            {/* <!-- Activity Item 6 --> */}
            <div className="flex items-start gap-4 px-6 py-4">
              <div className="bg-primary-50 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                <svg
                  className="text-primary-600 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-black">
                  <span className="font-semibold">Monty Hayton</span> moved the{' '}
                  <span className="font-semibold">Supply Chain Transparency</span>
                </p>
                <p className="text-grey-500 mt-1 text-sm">Yesterday</p>
              </div>
            </div>

            {/* <!-- Activity Item 7 --> */}
            <div className="flex items-start gap-4 px-6 py-4">
              <div className="bg-primary-50 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                <XCircle className="text-primary-600 h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-black">
                  <span className="font-semibold">Monty Hayton</span> converted the{' '}
                  <span className="font-semibold">Energy Charter Treaty V2.0</span> to{' '}
                  <span className="font-semibold">Supply Chain Transparency</span>
                </p>
                <p className="text-grey-500 mt-1 text-sm">Yesterday</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <hr />
      <hr />
      <hr />

      <div className="p-8">
        <nav aria-label="Progress">
          <ol className="divide-grey-800 border-grey-800 flex divide-y rounded-lg border-2 md:flex md:divide-y-0">
            <li className="relative md:flex md:flex-1">
              <button type="button" className="group flex w-full items-center">
                <span className="flex items-center px-6 py-4 text-sm font-medium">
                  <span className="bg-primary-600 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
                    <CheckCircle />
                  </span>
                  <span className="ml-4 flex flex-col">
                    <span className="text-sm font-bold text-black">Job Details</span>
                    <span className="text-grey-500 text-sm">Vitae sed mi luctus laoreet.</span>
                  </span>
                </span>
              </button>
              <div className="absolute top-0 right-0 hidden h-full w-5 md:block" aria-hidden="true">
                <svg
                  className="text-grey-800 h-full w-full"
                  viewBox="0 0 22 80"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 -2L20 40L0 82"
                    vectorEffect="non-scaling-stroke"
                    stroke="currentColor"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </li>

            <li className="relative md:flex md:flex-1">
              <button
                type="button"
                className="flex items-center px-6 py-4 text-sm font-medium"
                aria-current="step"
              >
                <span className="border-primary-600 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2">
                  <span className="text-primary-600">02</span>
                </span>
                <span className="ml-4 flex flex-col">
                  <span className="text-primary-600 text-sm font-bold">Application form</span>
                  <span className="text-grey-500 text-sm">Cursus semper viverra.</span>
                </span>
              </button>
              <div className="absolute top-0 right-0 hidden h-full w-5 md:block" aria-hidden="true">
                <svg
                  className="text-grey-800 h-full w-full"
                  viewBox="0 0 22 80"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 -2L20 40L0 82"
                    vectorEffect="non-scaling-stroke"
                    stroke="currentColor"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </li>

            <li className="relative md:flex md:flex-1">
              <button type="button" className="group flex items-center">
                <span className="flex items-center px-6 py-4 text-sm font-medium">
                  <span className="border-grey-700 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2">
                    <span className="text-grey-500">03</span>
                  </span>
                  <span className="ml-4 flex flex-col">
                    <span className="text-grey-600 text-sm font-bold">Preview</span>
                    <span className="text-grey-500 text-sm">Penatibus eu quis ante.</span>
                  </span>
                </span>
              </button>
            </li>
          </ol>
        </nav>
      </div>

      <div>
        <div className="max-w-md bg-white p-8">
          <nav aria-label="Progress">
            <ol className="overflow-hidden">
              <li className="relative pb-10">
                <div
                  className="bg-primary-600 absolute top-4 left-4 mt-0.5 -ml-px h-full w-0.5"
                  aria-hidden="true"
                ></div>

                <div className="group relative flex items-start">
                  <span className="flex h-9 items-center">
                    <span className="bg-primary-600 relative z-10 flex h-8 w-8 items-center justify-center rounded-full">
                      <CheckCircle />
                    </span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-sm font-bold text-black">Create account</span>
                    <span className="text-grey-500 text-sm">Vitae sed mi luctus laoreet.</span>
                  </span>
                </div>
              </li>

              <li className="relative pb-10">
                <div
                  className="bg-grey-300 absolute top-4 left-4 mt-0.5 -ml-px h-full w-0.5"
                  aria-hidden="true"
                ></div>

                <div className="group relative flex items-start" aria-current="step">
                  <span className="flex h-9 items-center" aria-hidden="true">
                    <span className="border-primary-600 relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-white">
                      <span className="bg-primary-600 h-2.5 w-2.5 rounded-full"></span>
                    </span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-primary-600 text-sm font-bold">Profile information</span>
                    <span className="text-grey-500 text-sm">
                      Cursus semper viverra facilisis et et some more.
                    </span>
                  </span>
                </div>
              </li>

              <li className="relative pb-10">
                <div
                  className="bg-grey-300 absolute top-4 left-4 mt-0.5 -ml-px h-full w-0.5"
                  aria-hidden="true"
                ></div>
                <div className="group relative flex items-start">
                  <span className="flex h-9 items-center" aria-hidden="true">
                    <span className="border-grey-300 relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-white"></span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-grey-500 text-sm font-medium">Business information</span>
                    <span className="text-grey-500 text-sm">Penatibus eu quis ante.</span>
                  </span>
                </div>
              </li>

              <li className="relative pb-10">
                <div
                  className="bg-grey-300 absolute top-4 left-4 mt-0.5 -ml-px h-full w-0.5"
                  aria-hidden="true"
                ></div>
                <div className="group relative flex items-start">
                  <span className="flex h-9 items-center" aria-hidden="true">
                    <span className="border-grey-300 relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-white"></span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-grey-500 text-sm font-medium">Theme</span>
                    <span className="text-grey-500 text-sm">Faucibus nec enim leo et.</span>
                  </span>
                </div>
              </li>

              <li className="relative">
                <div className="group relative flex items-start">
                  <span className="flex h-9 items-center" aria-hidden="true">
                    <span className="border-grey-300 relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-white"></span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-grey-500 text-sm font-medium">Preview</span>
                    <span className="text-grey-500 text-sm">
                      Iusto et officia maiores porro ad non quas.
                    </span>
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  )
}
