import ardi, { css, html } from 'https://unpkg.com/ardi'
import nav from '../nav.js'

ardi({
  tag: 'app-nav',
  template() {
    return html`
      <nav>
        <ardi-dialog drawer ref="drawer">
          <button
            slot="opener"
            aria-label="Open the main menu."
            title="Open the main menu."
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            </svg>
          </button>
          <div part="drawer-links">
            ${nav.map(
              (page) =>
                html`
                  <app-link>
                    <a
                      href=${page.href}
                      @click=${() => (this.refs.drawer.open = false)}
                    >
                      ${page.label}
                    </a>
                  </app-link>
                `
            )}
          </div>
        </ardi-dialog>
        ${nav.map(
          (page) => html`
            <app-link>
              <a href=${page.href}>${page.label}</a>
            </app-link>
          `
        )}
      </nav>
    `
  },
  styles: css`
    nav {
      align-items: center;
      display: flex;
      gap: 1rem;
      padding: 1rem;
    }
    a {
      align-items: center;
      color: inherit;
      display: flex;
      font-size: 1rem;
      height: 100%;
      text-decoration: none;
    }
    app-link:first-of-type {
      font-weight: bold;
      margin-right: auto;
    }
    a:hover {
      color: var(--blue-medium);
    }
    @media (prefers-color-scheme: dark) {
      a:hover {
        color: white;
      }
    }
    [slot='opener'] {
      align-items: center;
      background: none;
      border-radius: 50%;
      border: none;
      display: flex;
      height: 2.5rem;
      justify-content: center;
      margin-left: -0.5rem;
      width: 2.5rem;
    }
    [slot='opener']:hover,
    [slot='opener']:focus {
      background: var(--surface-heavy);
    }
    [slot='opener'] svg {
      display: block;
      fill: currentcolor;
      width: 1.5rem;
    }
    [part='drawer-links'] {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1.5rem;
      height: calc(100vh - 2rem);
    }
    [part='drawer-links'] a {
      font-size: 1.25rem;
    }
    nav > app-link:not(:first-of-type):not(:last-of-type) {
      display: none;
    }
    @media (min-width: 768px) {
      nav ardi-dialog[drawer] {
        display: none;
      }
      nav > app-link:not(:first-of-type):not(:last-of-type) {
        display: block;
      }
    }
  `,
})
