'use client'

/**
 * Kitchen Sink / UI Kit Stress Test component.
 * Renders a comprehensive set of HTML elements for consistency testing.
 * Styled per ui-pattern-playbook/: Tailwind only, typography/spacing from scale.
 */
export default function MyCustomComponent5() {
  return (
    <div className="space-y-6">
      <h1 className="text-5xl font-extrabold">KITCHEN SINK Styled</h1>
      <header className="space-y-2">
        <h1 className="text-5xl font-extrabold">UI Kit Stress Test Page</h1>
        <p className="text-base font-normal">
          A comprehensive rundown of HTML elements for quality consistency and conciseness testing.
        </p>
      </header>

      <hr className="border-gray-200 dark:border-gray-700" />

      <section id="typography" className="space-y-4">
        <h2 className="text-xl font-bold">1. Typography & Hierarchy</h2>
        <div className="space-y-2">
          <h1 className="text-5xl font-extrabold">Heading Level 1 (h1)</h1>
          <h2 className="text-xl font-bold">Heading Level 2 (h2)</h2>
          <h3 className="text-lg font-semibold">Heading Level 3 (h3)</h3>
          <h4 className="text-lg font-semibold">Heading Level 4 (h4)</h4>
          <h5 className="text-base font-semibold">Heading Level 5 (h5)</h5>
          <h6 className="text-sm font-semibold">Heading Level 6 (h6)</h6>
        </div>

        <p className="text-base font-normal">
          This is a standard paragraph. It contains <strong>bold text</strong>,{' '}
          <em>italicized text</em>, <u>underlined text</u>, and a{' '}
          <a href="https://www.google.com" className="text-indigo-600 underline">
            standard hyperlink
          </a>
          . We also need to test{' '}
          <code className="rounded bg-gray-100 px-1 text-sm">inline code snippets</code> and{' '}
          <mark className="bg-amber-100">highlighted text</mark> within a block of prose.
        </p>

        <p className="text-base font-normal">
          Testing line-height with superscripts and subscripts: H<sub>2</sub>O and E=mc<sup>2</sup>.
          If the line-height is too tight, these will overlap with the text above or below.
        </p>

        <blockquote className="border-l-4 border-gray-200 pl-4 text-base font-normal dark:border-gray-700">
          &quot;This is a blockquote element. It should be visually distinct from the main body
          text, often using indentation, a border, or a different font style.&quot;
          <cite className="text-sm font-medium text-gray-600 dark:text-gray-400">
            — Semantic Documentation Agent
          </cite>
        </blockquote>

        <pre className="overflow-x-auto rounded-md border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900">
          <code className="text-sm font-normal">
            {`// Preformatted code block test
  function stressTest(element) {
    console.log("Testing element: " + element);
    return true;
  }`}
          </code>
        </pre>
      </section>

      <hr className="border-gray-200 dark:border-gray-700" />

      <section id="forms" className="space-y-4">
        <h2 className="text-xl font-bold">2. Forms & Interactive States</h2>
        <form action="#" method="get" className="space-y-4">
          <fieldset className="space-y-4">
            <legend className="text-lg font-semibold">Text Inputs & States</legend>

            <div className="space-y-1">
              <label htmlFor="text-default-5" className="text-sm font-medium">
                Default Text Input:
              </label>
              <input
                type="text"
                id="text-default-5"
                placeholder="e.g. John Doe"
                className="w-full rounded-md border border-gray-200 px-3 py-2 text-base dark:border-gray-700 dark:bg-gray-900"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="text-disabled-5" className="text-sm font-medium">
                Disabled Input:
              </label>
              <input
                type="text"
                id="text-disabled-5"
                value="Read only content"
                disabled
                className="w-full rounded-md border border-gray-200 bg-gray-100 px-3 py-2 text-base dark:border-gray-700 dark:bg-gray-800"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="text-readonly-5" className="text-sm font-medium">
                Read-only Input:
              </label>
              <input
                type="text"
                id="text-readonly-5"
                value="You can't edit this"
                readOnly
                className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-base dark:border-gray-700 dark:bg-gray-800"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="text-error-5" className="text-sm font-medium">
                Error State (HTML5 Validation):
              </label>
              <input
                type="email"
                id="text-error-5"
                value="invalid-email"
                required
                className="w-full rounded-md border border-red-200 px-3 py-2 text-base dark:border-red-800"
              />
              <small className="text-sm font-medium text-red-600 dark:text-red-400">
                Please enter a valid email address.
              </small>
            </div>
          </fieldset>

          <fieldset className="space-y-4 pt-4">
            <legend className="text-lg font-semibold">Selection Elements</legend>

            <p className="text-sm font-medium">Checkboxes:</p>
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="check1-5"
                  defaultChecked
                  className="rounded border-gray-300"
                />
                <label htmlFor="check1-5" className="text-sm font-medium">
                  Selected
                </label>
              </span>
              <span className="flex items-center gap-2">
                <input type="checkbox" id="check2-5" className="rounded border-gray-300" />
                <label htmlFor="check2-5" className="text-sm font-medium">
                  Unselected
                </label>
              </span>
              <span className="flex items-center gap-2">
                <input type="checkbox" id="check3-5" disabled className="rounded border-gray-300" />
                <label htmlFor="check3-5" className="text-sm font-medium text-gray-500">
                  Disabled
                </label>
              </span>
            </div>

            <p className="text-sm font-medium">Radios:</p>
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-2">
                <input
                  type="radio"
                  name="radio-grp-5"
                  id="radio1-5"
                  defaultChecked
                  className="border-gray-300"
                />
                <label htmlFor="radio1-5" className="text-sm font-medium">
                  Option A
                </label>
              </span>
              <span className="flex items-center gap-2">
                <input type="radio" name="radio-grp-5" id="radio2-5" className="border-gray-300" />
                <label htmlFor="radio2-5" className="text-sm font-medium">
                  Option B
                </label>
              </span>
            </div>

            <div className="space-y-1">
              <p className="text-sm font-medium">Dropdown Select:</p>
              <select
                id="select-test-5"
                className="w-full rounded-md border border-gray-200 px-3 py-2 text-base dark:border-gray-700 dark:bg-gray-900"
              >
                <optgroup label="Group 1">
                  <option>Option 1</option>
                  <option>Option 2</option>
                </optgroup>
                <optgroup label="Group 2">
                  <option>Option 3</option>
                </optgroup>
              </select>
            </div>
          </fieldset>

          <fieldset className="space-y-2 pt-4">
            <legend className="text-lg font-semibold">Buttons</legend>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium dark:border-gray-700 dark:bg-gray-800"
              >
                Primary Button
              </button>
              <button
                type="submit"
                disabled
                className="rounded-md border border-gray-200 bg-gray-100 px-4 py-2 text-sm font-medium text-gray-500 dark:border-gray-700 dark:bg-gray-800"
              >
                Disabled Button
              </button>
              <input
                type="reset"
                value="Reset Input"
                className="cursor-pointer rounded-md border border-gray-200 px-4 py-2 text-sm font-medium dark:border-gray-700"
              />
            </div>
          </fieldset>
        </form>
      </section>

      <hr className="border-gray-200 dark:border-gray-700" />

      <section id="lists" className="space-y-4">
        <h2 className="text-xl font-bold">3. List Variations</h2>
        <ul className="list-disc space-y-1 pl-6 text-base">
          <li>Unordered list item 1</li>
          <li>
            Unordered list item 2
            <ul className="mt-1 list-disc space-y-1 pl-6">
              <li>Nested list item level 2</li>
              <li>
                Another nested item
                <ul className="mt-1 list-disc space-y-1 pl-6">
                  <li>Deeply nested item level 3</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Unordered list item 3</li>
        </ul>

        <ol className="list-decimal space-y-1 pl-6 text-base">
          <li>Ordered list item 1</li>
          <li>Ordered list item 2 (Testing double digits below)</li>
          <li value={10}>Ordered list item 10</li>
        </ol>

        <dl className="space-y-2 text-base">
          <dt className="font-semibold">Description Term</dt>
          <dd className="ml-4 text-base font-normal">
            The description definition for the term above.
          </dd>
          <dt className="font-semibold">Agent-Centric Design</dt>
          <dd className="ml-4 text-base font-normal">
            A methodology focusing on legibility and instructive consistency for AI models.
          </dd>
        </dl>
      </section>

      <hr className="border-gray-200 dark:border-gray-700" />

      <section id="tables" className="space-y-4">
        <h2 className="text-xl font-bold">4. Data Tables</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 dark:border-gray-700">
            <caption className="text-left text-sm font-medium">Sample Transaction Data</caption>
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="border-r border-gray-200 px-4 py-2 text-left text-sm font-semibold dark:border-gray-700">
                  ID
                </th>
                <th className="border-r border-gray-200 px-4 py-2 text-left text-sm font-semibold dark:border-gray-700">
                  Status
                </th>
                <th className="border-r border-gray-200 px-4 py-2 text-left text-sm font-semibold dark:border-gray-700">
                  User
                </th>
                <th className="border-r border-gray-200 px-4 py-2 text-left text-sm font-semibold dark:border-gray-700">
                  Amount
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="border-r border-gray-200 px-4 py-2 text-base dark:border-gray-700">
                  #001
                </td>
                <td className="border-r border-gray-200 px-4 py-2 dark:border-gray-700">
                  <span className="rounded bg-emerald-50 px-2 py-0.5 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                    Success
                  </span>
                </td>
                <td className="border-r border-gray-200 px-4 py-2 text-base dark:border-gray-700">
                  Jane Doe
                </td>
                <td className="border-r border-gray-200 px-4 py-2 text-base dark:border-gray-700">
                  $120.00
                </td>
                <td className="px-4 py-2 text-base">Standard monthly subscription</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="border-r border-gray-200 px-4 py-2 text-base dark:border-gray-700">
                  #002
                </td>
                <td className="border-r border-gray-200 px-4 py-2 dark:border-gray-700">
                  <span className="rounded bg-red-50 px-2 py-0.5 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-400">
                    Failed
                  </span>
                </td>
                <td className="border-r border-gray-200 px-4 py-2 text-base dark:border-gray-700">
                  John Smith
                </td>
                <td className="border-r border-gray-200 px-4 py-2 text-base dark:border-gray-700">
                  $45.50
                </td>
                <td className="px-4 py-2 text-base">Insufficient funds at source</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td
                  colSpan={3}
                  className="border-r border-gray-200 px-4 py-2 font-semibold dark:border-gray-700"
                >
                  Total
                </td>
                <td className="border-r border-gray-200 px-4 py-2 font-semibold dark:border-gray-700">
                  $165.50
                </td>
                <td className="px-4 py-2">-</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      <hr className="border-gray-200 dark:border-gray-700" />

      <section id="media" className="space-y-4">
        <h2 className="text-xl font-bold">5. Media & HTML5 Elements</h2>

        <figure className="space-y-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://via.placeholder.com/300x150"
            className="rounded-md border border-gray-200 dark:border-gray-700"
          />
          <figcaption className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Figure 1: A standard placeholder image with a caption.
          </figcaption>
        </figure>

        <details className="rounded-md border border-gray-200 dark:border-gray-700">
          <summary className="cursor-pointer px-4 py-2 text-base font-medium">
            Select to expand: Semantic Accordion Test
          </summary>
          <p className="border-t border-gray-200 px-4 py-2 text-base dark:border-gray-700">
            This hidden content should be revealed when the summary is selected. It tests the{' '}
            <code className="rounded bg-gray-100 px-1 text-sm dark:bg-gray-800">
              &lt;details&gt;
            </code>{' '}
            and{' '}
            <code className="rounded bg-gray-100 px-1 text-sm dark:bg-gray-800">
              &lt;summary&gt;
            </code>{' '}
            native styling.
          </p>
        </details>

        <div className="space-y-1">
          <p className="text-sm font-medium">Progress (70%)</p>
          <progress
            value={70}
            max={100}
            className="h-2 w-full appearance-none rounded-full bg-gray-200 dark:bg-gray-700"
            aria-valuenow={70}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            70%
          </progress>
        </div>
      </section>

      <footer className="pt-4 text-sm font-medium text-gray-600 dark:text-gray-400">
        <p>&copy; 2026 UI Kit Stress Tester. Generated for Agent-level documentation.</p>
      </footer>
    </div>
  )
}
