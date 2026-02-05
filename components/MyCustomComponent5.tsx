'use client'

import {
  ArrowUp,
  ArrowRight,
  CheckCircle,
  Pause,
  Trash2,
  XCircle,
  Filter,
  Play,
  Mic,
  ArrowLeft,
  Octagon,
} from 'react-feather'

/**
 * Phone with microphone and waveform visualization SVG component
 */
function PhoneWaveformSVG({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="45" width="6" height="10" rx="3" fill="inherit" />
      <rect x="32" y="40" width="6" height="20" rx="3" fill="inherit" />
      <rect x="44" y="30" width="6" height="40" rx="3" fill="inherit" />
      <rect x="56" y="35" width="6" height="30" rx="3" fill="inherit" />
      <rect x="68" y="25" width="6" height="50" rx="3" fill="inherit" />
      <rect x="80" y="20" width="6" height="60" rx="3" fill="inherit" />
      <rect x="92" y="15" width="6" height="70" rx="3" fill="inherit" />
      <rect x="104" y="10" width="6" height="80" rx="3" fill="inherit" />
      <rect x="116" y="5" width="6" height="90" rx="3" fill="inherit" />
      <rect x="128" y="8" width="6" height="84" rx="3" fill="inherit" />
      <rect x="140" y="12" width="6" height="76" rx="3" fill="inherit" />
      <rect x="152" y="18" width="6" height="64" rx="3" fill="inherit" />
      <rect x="164" y="22" width="6" height="56" rx="3" fill="inherit" />
      <rect x="176" y="28" width="6" height="44" rx="3" fill="inherit" />
      <rect x="188" y="20" width="6" height="60" rx="3" fill="inherit" />
      <rect x="200" y="15" width="6" height="70" rx="3" fill="inherit" />
      <rect x="212" y="25" width="6" height="50" rx="3" fill="inherit" />
      <rect x="224" y="30" width="6" height="40" rx="3" fill="inherit" />
      <rect x="236" y="35" width="6" height="30" rx="3" fill="inherit" />
      <rect x="248" y="28" width="6" height="44" rx="3" fill="inherit" />
      <rect x="260" y="22" width="6" height="56" rx="3" fill="inherit" />
      <rect x="272" y="18" width="6" height="64" rx="3" fill="inherit" />
      <rect x="284" y="25" width="6" height="50" rx="3" fill="inherit" />
      <rect x="296" y="32" width="6" height="36" rx="3" fill="inherit" />
      <rect x="308" y="38" width="6" height="24" rx="3" fill="inherit" />
      <rect x="320" y="42" width="6" height="16" rx="3" fill="inherit" />
      <rect x="332" y="45" width="6" height="10" rx="3" fill="inherit" />
      <rect x="344" y="47" width="6" height="6" rx="3" fill="inherit" />
      <rect x="356" y="48" width="6" height="4" rx="2" fill="inherit" />
      <rect x="368" y="49" width="6" height="2" rx="1" fill="inherit" />
    </svg>
  )
}

/**
 * Kitchen Sink / UI Kit Stress Test component.
 * Renders a comprehensive set of HTML elements for consistency testing.
 * Styled per ui-pattern-playbook/: Tailwind only, typography/spacing from scale.
 */
export default function MyCustomComponent5() {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-12">
        <div className="flex w-full max-w-xl items-center rounded-lg border-2 bg-white p-4">
          {/* Left: Delete and Timer */}
          <div className="flex items-center gap-4 pl-1">
            <button
              type="button"
              className="border-grey-600 hover:bg-grey-100 focus:outline-primary-600 rounded-md p-2 transition-colors focus:outline focus:outline-1 focus:outline-offset-2"
              aria-label="Filter"
            >
              <Trash2 />
            </button>

            <div className="flex items-center gap-1">
              <button
                type="button"
                className="border-grey-600 hover:bg-grey-100 focus:outline-primary-600 rounded-md border-2 p-2 transition-colors focus:outline focus:outline-1 focus:outline-offset-2"
                aria-label="Filter"
              >
                <Mic />
              </button>

              <span className="text-grey-700 px-2 text-sm font-medium tabular-nums">0:28</span>
            </div>
          </div>

          {/* Center: Waveform SVG */}
          <div className="flex-1 px-2">
            <PhoneWaveformSVG className="m-auto w-auto max-w-40" aria-hidden="true" />
          </div>

          {/* Right: Controls */}
          <div className="flex items-center gap-2">
            {/* Pause Button */}
            <button
              type="button"
              className="border-grey-600 hover:bg-grey-100 focus:outline-primary-600 rounded-md border-2 p-2 transition-colors focus:outline focus:outline-1 focus:outline-offset-2"
              aria-label="Filter"
            >
              <Pause />
            </button>
            {/* Send Button */}
            <button
              type="button"
              className="focus:outline-primary-500 bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 rounded-md border-2 p-2 font-semibold text-black transition-colors focus:outline-1 focus:outline-offset-2"
              aria-label="Filter"
            >
              <ArrowUp />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-12">
        <div className="flex w-full max-w-xl items-center rounded-lg border-2 bg-white p-4">
          {/* Left: Delete and Timer */}
          <div className="flex items-center gap-4 pl-1">
            <button
              type="button"
              className="border-grey-600 hover:bg-grey-100 focus:outline-primary-600 rounded-md p-2 transition-colors focus:outline focus:outline-1 focus:outline-offset-2"
              aria-label="Filter"
            >
              <Trash2 />
            </button>

            <div className="flex items-center gap-1">
              <button
                type="button"
                className="border-grey-600 hover:bg-grey-100 focus:outline-primary-600 rounded-md border-2 p-2 transition-colors focus:outline focus:outline-1 focus:outline-offset-2"
                aria-label="Filter"
              >
                <Play />
              </button>

              <span className="text-grey-700 px-2 text-sm font-medium tabular-nums">0:28</span>
            </div>
          </div>

          {/* Center: Waveform SVG */}
          <div className="flex-1 px-6">
            <PhoneWaveformSVG className="m-auto w-auto max-w-40" aria-hidden="true" />
          </div>

          {/* Right: Controls */}
          <div className="flex items-center gap-2">
            {/* Send Button */}
            <button
              type="button"
              className="focus:outline-primary-500 bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 rounded-md border-2 p-2 font-semibold text-black transition-colors focus:outline-1 focus:outline-offset-2"
              aria-label="Filter"
            >
              <ArrowUp />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-12">
        <div className="flex w-full max-w-xl items-center rounded-lg border-2 bg-white p-4">
          {/* Left: Delete and Timer */}
          <div className="flex items-center gap-4 pl-1">
            <button
              type="button"
              className="border-grey-600 hover:bg-grey-100 focus:outline-primary-600 rounded-md p-2 transition-colors focus:outline focus:outline-1 focus:outline-offset-2"
              aria-label="Filter"
            >
              <Trash2 />
            </button>

            <div className="flex items-center gap-1">
              <button
                type="button"
                className="border-grey-600 hover:bg-grey-100 focus:outline-primary-600 rounded-md border-2 p-2 transition-colors focus:outline focus:outline-1 focus:outline-offset-2"
                aria-label="Filter"
              >
                <Pause />
              </button>

              <span className="text-grey-700 px-2 text-sm font-medium tabular-nums">0:28</span>
            </div>
          </div>

          {/* Center: Waveform SVG */}
          <div className="flex-1 px-6">
            <PhoneWaveformSVG className="m-auto w-auto max-w-40" aria-hidden="true" />
          </div>

          {/* Right: Controls */}
          <div className="flex items-center gap-2">
            {/* Send Button */}
            <button
              type="button"
              className="focus:outline-primary-500 bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 rounded-md border-2 p-2 font-semibold text-black transition-colors focus:outline-1 focus:outline-offset-2"
              aria-label="Filter"
            >
              <ArrowUp />
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-8">
        {/* <!-- Versions Panel --> */}
        <div className="w-full max-w-md rounded-lg border-2 bg-white shadow-sm">
          {/* <!-- Header --> */}
          <div className="border-grey-700 flex items-center justify-between border-b-2 px-3 py-4">
            <h2 className="pl-2 text-lg font-bold text-black">Versions</h2>
            <div className="flex gap-2">
              <button
                type="button"
                className="hover:bg-grey-100 hover:text-grey-600 focus:outline-grey-500 focus:outline-primary-600 flex h-10 w-10 items-center justify-center rounded-md text-black focus:outline-1 focus:outline-offset-2"
                aria-label="Close"
              >
                <Filter className="h-5 w-5 flex-shrink-0" />
              </button>
              <button
                type="button"
                className="hover:bg-grey-100 hover:text-grey-600 focus:outline-grey-500 focus:outline-primary-600 flex h-10 w-10 items-center justify-center rounded-md text-black focus:outline-1 focus:outline-offset-2"
                aria-label="Close"
              >
                <XCircle className="h-5 w-5 flex-shrink-0" />
              </button>
            </div>
          </div>

          {/* <!-- Version List --> */}
          <div className="space-y-0">
            {/* <!-- New Version - Selected --> */}
            <div className="border-primary-600 bg-primary-50 flex items-start gap-4 border-l-4 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white">
                <XCircle />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-black">New Version</h3>
                </div>
                <p className="text-grey-600 mt-1 text-sm">Aug 30, 2024</p>
              </div>
            </div>

            {/* <!-- Version 3.0 --> */}
            <div className="flex items-start gap-4 p-4">
              <div className="bg-primary-50 flex h-10 w-10 shrink-0 items-center justify-center rounded-md">
                <Octagon className="text-primary-600 h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-bold text-black">Version: 3.0</h3>
                <p className="text-grey-600 mt-1 text-sm">Aug 20, 2024 · By Jane Cooper</p>
              </div>
            </div>

            {/* <!-- Version 2.3 --> */}
            <div className="flex items-start gap-4 p-4">
              <div className="bg-primary-50 flex h-10 w-10 shrink-0 items-center justify-center rounded-md">
                <Octagon className="text-primary-600 h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-bold text-black">Version: 2.3</h3>
                <p className="text-grey-600 mt-1 text-sm">Jul 31, 2024 · By Wade Warren</p>
              </div>
            </div>

            {/* <!-- Nested Versions --> */}
            <div className="border-grey-100 ml-8 space-y-0 border-l-2">
              {/* <!-- Version 2.2 --> */}
              <div className="flex items-start gap-4 px-6 py-3">
                <div className="bg-grey-50 flex h-8 w-8 shrink-0 items-center justify-center rounded-md">
                  <Octagon className="h-4 w-4" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-semibold text-black">Version: 2.2</h4>
                  <p className="text-grey-600 mt-1 text-sm">Jul 31, 2024 · By Esther Howard</p>
                </div>
              </div>

              {/* <!-- Version 2.1 --> */}
              <div className="flex items-start gap-4 px-6 py-3">
                <div className="bg-grey-50 flex h-8 w-8 shrink-0 items-center justify-center rounded-md">
                  <Octagon className="text-grey-600 h-4 w-4" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-semibold text-black">Version: 2.1</h4>
                  <p className="text-grey-600 mt-1 text-sm">Jul 31, 2024 · By Jenny Wilson</p>
                </div>
              </div>

              {/* <!-- Version 2.0 --> */}
              <div className="flex items-start gap-4 px-6 py-3">
                <div className="bg-grey-50 flex h-8 w-8 shrink-0 items-center justify-center rounded-md">
                  <Octagon className="h-4 w-4" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-semibold text-black">Version: 2.0</h4>
                  <p className="text-grey-600 mt-1 text-sm">Jul 31, 2024 · By Wade Warren</p>
                </div>
              </div>
            </div>

            {/* <!-- Show More Button --> */}
            <div className="p-4">
              <button
                type="button"
                className="text-md hover:bg-grey-100 focus:outline-primary-600 active:bg-grey-200 w-full rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline focus:outline-1 focus:outline-offset-2"
              >
                Show More
              </button>
            </div>

            {/* <!-- Version 1.0 --> */}
            <div className="flex items-start gap-4 p-4">
              <div className="bg-primary-50 flex h-10 w-10 shrink-0 items-center justify-center rounded-md">
                <Octagon className="text-primary-600 h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-bold text-black">Version 1.0</h3>
                <p className="text-grey-600 mt-1 text-sm">Jun 20, 2024 · By Robert Fox</p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Activity Panel --> */}
        <div className="w-full max-w-md rounded-lg border-2 bg-white shadow-sm">
          {/* <!-- Header --> */}
          <div className="border-grey-700 flex items-center justify-between border-b-2 px-3 py-4">
            <h2 className="pl-2 text-lg font-bold text-black">Activity</h2>
            <button
              type="button"
              className="hover:bg-grey-100 hover:text-grey-600 focus:outline-grey-500 focus:outline-primary-600 flex h-10 w-10 items-center justify-center rounded-md text-black focus:outline-1 focus:outline-offset-2"
              aria-label="Close"
            >
              <XCircle className="h-5 w-5 flex-shrink-0" />
            </button>
          </div>

          {/* <!-- Activity List --> */}
          <div className="space-y-0">
            {/* <!-- Activity Item 1 --> */}
            <div className="border-grey-500 flex items-start gap-4 border-b-2 px-4 pt-4 pb-2">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100">
                <XCircle />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-black">
                  <span className="font-semibold">Kevin Dukkon</span> changed status from
                  <span className="font-semibold">Draft</span> to{' '}
                  <span className="font-semibold">In Progress</span>
                </p>
                <small className="mt-1">19m ago</small>
              </div>
            </div>

            {/* <!-- Activity Item 2 --> */}
            <div className="border-grey-500 flex items-start gap-4 border-b-2 px-4 pt-4 pb-2">
              <div className="bg-primary-100 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                <XCircle />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-black">
                  <span className="font-semibold">Monty Hayton</span> created the{' '}
                  <span className="font-semibold">Energy Charter Treaty</span>
                </p>
                <small className="mt-1">Yesterday</small>
              </div>
            </div>

            {/* <!-- Activity Item 3 --> */}
            <div className="border-grey-500 flex items-start gap-4 border-b-2 px-4 pt-4 pb-2">
              <div className="bg-primary-100 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                <XCircle />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-black">
                  <span className="font-semibold">Monty Hayton</span> edited the{' '}
                  <span className="font-semibold">Energy Charter Treaty</span>
                </p>
                <small className="mt-1">Yesterday</small>
              </div>
            </div>

            {/* <!-- Activity Item 4 --> */}
            <div className="border-grey-500 flex items-start gap-4 border-b-2 px-4 pt-4 pb-2">
              <div className="bg-primary-100 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                <XCircle />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-black">
                  <span className="font-semibold">Monty Hayton</span> change the title to
                  <span className="font-semibold">Energy Charter Treaty V2.0</span>
                </p>
                <small className="mt-1">Yesterday</small>
              </div>
            </div>

            {/* <!-- Activity Item 5 --> */}
            <div className="border-grey-500 flex items-start gap-4 border-b-2 px-4 pt-4 pb-2">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                <XCircle />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-black">
                  <span className="font-semibold">Monty Hayton</span> merged{' '}
                  <span className="font-semibold">Energy Charter Treaty V2.0</span> to the{' '}
                  <span className="font-semibold">Supply Chain Transparency</span>
                </p>
                <small className="mt-1">Yesterday</small>
              </div>
            </div>

            {/* <!-- Activity Item 6 --> */}
            <div className="border-grey-500 flex items-start gap-4 border-b-2 px-4 pt-4 pb-2">
              <div className="bg-primary-100 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                <XCircle />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-black">
                  <span className="font-semibold">Monty Hayton</span> moved the{' '}
                  <span className="font-semibold">Supply Chain Transparency</span>
                </p>
                <small className="mt-1">Yesterday</small>
              </div>
            </div>

            {/* <!-- Activity Item 7 --> */}
            <div className="flex items-start gap-4 p-4">
              <div className="bg-primary-100 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                <XCircle />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-black">
                  <span className="font-semibold">Monty Hayton</span> converted the{' '}
                  <span className="font-semibold">Energy Charter Treaty V2.0</span> to{' '}
                  <span className="font-semibold">Supply Chain Transparency</span>
                </p>
                <small className="mt-1">Yesterday</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <hr />
      <hr />
      <hr />

      <div className="flex overflow-hidden rounded-lg border-2 bg-white">
        <div className="max-w-md border-r-2 p-8">
          <nav aria-label="Progress">
            <ol className="overflow-hidden">
              <h3 className="mb-8 text-base font-bold text-black">Multi-step process</h3>
              <li className="relative pb-10">
                <div
                  className="bg-primary-600 absolute top-4 left-4 mt-0.5 -ml-px h-full w-0.5"
                  aria-hidden="true"
                ></div>

                <div className="group relative flex items-start">
                  <span className="flex h-9 items-center">
                    <span className="bg-primary-600 relative z-10 flex h-8 w-8 items-center justify-center rounded-full">
                      <CheckCircle className="text-white" />
                    </span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col text-left">
                    <span className="text-sm font-bold text-black">Step 1</span>
                    <small>Description of step 1.</small>
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
                  <span className="ml-4 flex min-w-0 flex-col text-left">
                    <span className="text-primary-600 text-sm font-bold">Step 2</span>
                    <small>Cursus semper viverra facilisis et et some more.</small>
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
                  <span className="ml-4 flex min-w-0 flex-col text-left">
                    <span className="text-grey-500 text-sm font-medium">Step 3</span>
                    <small>Penatibus eu quis ante.</small>
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
                  <span className="ml-4 flex min-w-0 flex-col text-left">
                    <span className="text-grey-500 text-sm font-medium">Step 4</span>
                    <small>Faucibus nec enim leo et.</small>
                  </span>
                </div>
              </li>

              <li className="relative">
                <div className="group relative flex items-start">
                  <span className="flex h-9 items-center" aria-hidden="true">
                    <span className="border-grey-300 relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-white"></span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col text-left">
                    <span className="text-grey-500 text-sm font-medium">Step 5</span>
                    <small>Iusto et officia maiores porro ad non quas.</small>
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        <div className="flex w-full flex-col">
          <nav className="mb-0" aria-label="Progress">
            <ol className="mb-4 flex divide-y border-b-2 bg-white px-4 md:flex md:divide-y-0">
              <li className="relative md:flex md:flex-1">
                <button type="button" className="group flex w-full items-center">
                  <span className="flex items-center p-4 text-sm font-medium">
                    <span className="bg-primary-600 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
                      <CheckCircle className="text-white" />
                    </span>
                    <span className="ml-4 flex flex-col text-left">
                      <span className="text-sm font-bold text-black">Step 1.A</span>
                      <small>Vitae sed mi luctus laoreet.</small>
                    </span>
                  </span>
                </button>
              </li>

              <li className="relative md:flex md:flex-1">
                <button
                  type="button"
                  className="flex items-center p-4 text-sm font-medium"
                  aria-current="step"
                >
                  <span className="border-primary-600 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2">
                    <span className="text-primary-600">B</span>
                  </span>
                  <span className="ml-4 flex flex-col text-left">
                    <span className="text-primary-600 text-sm font-bold">Step 1.B</span>
                    <small>Cursus semper viverra.</small>
                  </span>
                </button>
              </li>

              <li className="relative md:flex md:flex-1">
                <button type="button" className="group flex items-center">
                  <span className="flex items-center p-4 text-sm font-medium">
                    <span className="border-grey-700 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2">
                      <span className="text-grey-500">C</span>
                    </span>
                    <span className="ml-4 flex flex-col text-left">
                      <span className="text-grey-600 text-sm font-bold">Step 1.C</span>
                      <small>Penatibus eu quis ante.</small>
                    </span>
                  </span>
                </button>
              </li>
            </ol>
          </nav>

          <div className="m-4 flex flex-col gap-2">
            <h3 className="text-lg font-bold text-black">Step 1.A</h3>
            <p className="text-grey-600 text-sm">
              Vitae sed mi luctus laoreet sed mi luctus laoreet.
            </p>
          </div>

          {/* Autocomplete suggestion bar */}
          <div className="mx-4 mb-4 flex flex-wrap items-center gap-2">
            <span className="text-grey-600 text-xs">Suggestions:</span>
            <button
              type="button"
              onClick={() => {}}
              className="hover:bg-primary-100 border-primary-200 bg-primary-50 text-primary-700 inline-flex items-center rounded-md border-2 px-2.5 py-1 text-xs font-medium transition-colors"
            >
              Use clear, specific language
            </button>
            <button
              type="button"
              onClick={() => {}}
              className="hover:bg-primary-100 border-primary-200 bg-primary-50 text-primary-700 inline-flex items-center rounded-md border-2 px-2.5 py-1 text-xs font-medium transition-colors"
            >
              Include examples
            </button>
            <button
              type="button"
              onClick={() => {}}
              className="hover:bg-primary-100 border-primary-200 bg-primary-50 text-primary-700 inline-flex items-center rounded-md border-2 px-2.5 py-1 text-xs font-medium transition-colors"
            >
              Specify output format
            </button>
            <button
              type="button"
              onClick={() => {}}
              className="hover:bg-primary-100 border-primary-200 bg-primary-50 text-primary-700 inline-flex items-center rounded-md border-2 px-2.5 py-1 text-xs font-medium transition-colors"
            >
              Define constraints
            </button>
          </div>

          <div className="bg-grey-100 m-4 max-h-90 overflow-y-auto rounded-md p-8">
            <p>
              <strong className="cursor-pointer outline-2 outline-offset-2 outline-dotted">
                The standard Lorem Ipsum passage, used since the 1500s:
              </strong>{' '}
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum."
            </p>

            <p>
              <div className="relative">
                <strong className="outline-primary-500 bg-primary-100 text-primary-900 cursor-pointer outline-2 outline-offset-2 outline-dotted">
                  Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC:
                </strong>{' '}
                <div className="position-absolute top-full left-0 flex h-full w-full justify-center">
                  <div
                    id="tooltip-default"
                    role="tooltip"
                    className="rounded-base absolute mx-auto inline-block min-w-56 cursor-pointer bg-black px-3 py-2 text-center text-sm font-medium text-white shadow-xs duration-300"
                  >
                    Anti-pattern: content only on hover
                    <div
                      className="tooltip-arrow absolute bottom-full left-1/2 h-0 w-0 -translate-x-1/2 border-r-12 border-b-12 border-l-12 border-r-transparent border-b-black border-l-transparent"
                      data-popper-arrow
                    ></div>
                  </div>
                </div>
              </div>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
              sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
              amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
              labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
              nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
              commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
              nulla pariatur?"
            </p>

            <p>
              <strong className="cursor-pointer outline-2 outline-offset-2 outline-dotted">
                1914 translation by H. Rackham:
              </strong>{' '}
              "But I must explain to you how all this mistaken idea of denouncing pleasure and
              praising pain was born and I will give you a complete account of the system, and
              expound the actual teachings of the great explorer of the truth, the master-builder of
              human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is
              pleasure, but because those who do not know how to pursue pleasure rationally
              encounter consequences that are extremely painful. Nor again is there anyone who loves
              or pursues or desires to obtain pain of itself, because it is pain, but because
              occasionally circumstances occur in which toil and pain can procure him some great
              pleasure. To take a trivial example, which of us ever undertakes laborious physical
              exercise, except to obtain some advantage from it? But who has any right to find fault
              with a man who chooses to enjoy a pleasure that has no annoying consequences, or one
              who avoids a pain that produces no resultant pleasure?"
            </p>

            <p>
              <strong className="cursor-pointer outline-2 outline-offset-2 outline-dotted">
                Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC:
              </strong>{' '}
              "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
              voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
              occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
              mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
              expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
              assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis
              debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et
              molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut
              reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores
              repellat."
            </p>
          </div>
          <div className="mt-auto mb-0 flex flex-col gap-2 border-t-2 p-4">
            <p className="flex gap-1 text-xs font-semibold text-red-900">
              <XCircle />
              Please apply suggestions to continue
            </p>
            <div className="mr-0 ml-auto flex gap-2">
              {/* Start — primary with icon */}
              <button
                type="button"
                className="text-md focus:outline-primary-500 bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 inline-flex min-w-32 items-center justify-center gap-2 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline-1 focus:outline-offset-2"
              >
                Start
                <ArrowRight className="h-5 w-5 flex-shrink-0" />
              </button>
            </div>
            <div className="flex justify-between gap-2">
              {/* Next — primary with icon */}
              <button
                type="button"
                className="text-md active:bg-grey-200 hover:bg-grey-100 focus:outline-primary-600 flex min-w-32 items-center justify-center gap-2 rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline-1 focus:outline-offset-2"
              >
                <ArrowLeft className="h-5 w-5 flex-shrink-0" />
                Back
              </button>
              {/* Back — primary with icon */}
              <button
                type="button"
                className="text-md focus:outline-primary-500 bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 inline-flex min-w-32 items-center justify-center gap-2 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline-1 focus:outline-offset-2"
              >
                Next
                <ArrowRight className="h-5 w-5 flex-shrink-0" />
              </button>
            </div>
            <div className="mr-0 ml-auto flex gap-2">
              {/* Finish — primary with icon */}
              <button
                type="button"
                className="text-md focus:outline-primary-500 bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 inline-flex min-w-32 items-center justify-center gap-2 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline-1 focus:outline-offset-2"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
