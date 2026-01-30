'use client'

/**
 * Kitchen Sink / UI Kit Stress Test component.
 * Renders a comprehensive set of HTML elements for consistency testing.
 */
export default function MyCustomComponent4() {
  return (
    <div>
      <h1>KITCHEN SINK</h1>
      <header>
        <h1>UI Kit Stress Test Page</h1>
        <p>
          A comprehensive rundown of HTML elements for quality consistency and conciseness testing.
        </p>
      </header>

      <hr />

      <section id="typography">
        <h2>1. Typography & Hierarchy</h2>
        <h1>Heading Level 1 (h1)</h1>
        <h2>Heading Level 2 (h2)</h2>
        <h3>Heading Level 3 (h3)</h3>
        <h4>Heading Level 4 (h4)</h4>
        <h5>Heading Level 5 (h5)</h5>
        <h6>Heading Level 6 (h6)</h6>

        <p>
          This is a standard paragraph. It contains <strong>bold text</strong>,{' '}
          <em>italicized text</em>, <u>underlined text</u>, and a{' '}
          <a href="https://www.google.com">standard hyperlink</a>. We also need to test{' '}
          <code>inline code snippets</code> and <mark>highlighted text</mark> within a block of
          prose.
        </p>

        <p>
          Testing line-height with superscripts and subscripts: H<sub>2</sub>O and E=mc<sup>2</sup>.
          If the line-height is too tight, these will overlap with the text above or below.
        </p>

        <blockquote>
          &quot;This is a blockquote element. It should be visually distinct from the main body
          text, often using indentation, a border, or a different font style.&quot;
          <cite>— Semantic Documentation Agent</cite>
        </blockquote>

        <pre>
          <code>
            {`// Preformatted code block test
  function stressTest(element) {
    console.log("Testing element: " + element);
    return true;
  }`}
          </code>
        </pre>
      </section>

      <hr />

      <section id="forms">
        <h2>2. Forms & Interactive States</h2>
        <form action="#" method="get">
          <fieldset>
            <legend>Text Inputs & States</legend>

            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="text-default">Default Text Input:</label>
              <br />
              <input type="text" id="text-default" placeholder="e.g. John Doe" />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="text-disabled">Disabled Input:</label>
              <br />
              <input type="text" id="text-disabled" value="Read only content" disabled />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="text-readonly">Read-only Input:</label>
              <br />
              <input type="text" id="text-readonly" value="You can't edit this" readOnly />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="text-error">Error State (HTML5 Validation):</label>
              <br />
              <input type="email" id="text-error" value="invalid-email" required />
              <small style={{ color: 'red' }}>Please enter a valid email address.</small>
            </div>
          </fieldset>

          <fieldset style={{ marginTop: '1rem' }}>
            <legend>Selection Elements</legend>
            <p>Checkboxes:</p>
            <input type="checkbox" id="check1" defaultChecked />{' '}
            <label htmlFor="check1">Selected</label>
            <input type="checkbox" id="check2" /> <label htmlFor="check2">Unselected</label>
            <input type="checkbox" id="check3" disabled /> <label htmlFor="check3">Disabled</label>
            <p>Radios:</p>
            <input type="radio" name="radio-grp" id="radio1" defaultChecked />{' '}
            <label htmlFor="radio1">Option A</label>
            <input type="radio" name="radio-grp" id="radio2" />{' '}
            <label htmlFor="radio2">Option B</label>
            <p>Dropdown Select:</p>
            <select id="select-test">
              <optgroup label="Group 1">
                <option>Option 1</option>
                <option>Option 2</option>
              </optgroup>
              <optgroup label="Group 2">
                <option>Option 3</option>
              </optgroup>
            </select>
          </fieldset>

          <fieldset style={{ marginTop: '1rem' }}>
            <legend>Buttons</legend>
            <button type="button">Primary Button</button>
            <button type="submit" disabled>
              Disabled Button
            </button>
            <input type="reset" value="Reset Input" />
          </fieldset>
        </form>
      </section>

      <hr />

      <section id="lists">
        <h2>3. List Variations</h2>
        <ul>
          <li>Unordered list item 1</li>
          <li>
            Unordered list item 2
            <ul>
              <li>Nested list item level 2</li>
              <li>
                Another nested item
                <ul>
                  <li>Deeply nested item level 3</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Unordered list item 3</li>
        </ul>

        <ol>
          <li>Ordered list item 1</li>
          <li>Ordered list item 2 (Testing double digits below)</li>
          <li value={10}>Ordered list item 10</li>
        </ol>

        <dl>
          <dt>Description Term</dt>
          <dd>The description definition for the term above.</dd>
          <dt>Agent-Centric Design</dt>
          <dd>A methodology focusing on legibility and instructive consistency for AI models.</dd>
        </dl>
      </section>

      <hr />

      <section id="tables">
        <h2>4. Data Tables</h2>
        <table style={{ borderCollapse: 'collapse', border: '1px solid' }}>
          <caption>Sample Transaction Data</caption>
          <thead>
            <tr>
              <th>ID</th>
              <th>Status</th>
              <th>User</th>
              <th>Amount</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#001</td>
              <td>
                <span style={{ background: '#d4edda' }}>Success</span>
              </td>
              <td>Jane Doe</td>
              <td>$120.00</td>
              <td>Standard monthly subscription</td>
            </tr>
            <tr>
              <td>#002</td>
              <td>
                <span style={{ background: '#f8d7da' }}>Failed</span>
              </td>
              <td>John Smith</td>
              <td>$45.50</td>
              <td>Insufficient funds at source</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Total</td>
              <td>$165.50</td>
              <td>-</td>
            </tr>
          </tfoot>
        </table>
      </section>

      <hr />

      <section id="media">
        <h2>5. Media & HTML5 Elements</h2>

        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://via.placeholder.com/300x150" />
          <figcaption>Figure 1: A standard placeholder image with a caption.</figcaption>
        </figure>

        <details>
          <summary>Click to expand: Semantic Accordion Test</summary>
          <p>
            This hidden content should be revealed when the summary is clicked. It tests the{' '}
            <code>&lt;details&gt;</code> and <code>&lt;summary&gt;</code> native styling.
          </p>
        </details>

        <progress value={70} max={100}>
          70%
        </progress>
      </section>

      <footer>
        <p>&copy; 2026 UI Kit Stress Tester. Generated for Agent-level documentation.</p>
      </footer>
    </div>
  )
}
