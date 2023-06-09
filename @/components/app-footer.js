import ardi, { css, html } from 'https://unpkg.com/ardi'
import nav from '../nav.js'

ardi({
  tag: 'app-footer',
  template() {
    return html`
      <footer>
        <div part="footer-nav">
          ${nav.map(
            (page) => html`
              <app-link>
                <a href=${page.href}>${page.label}</a>
              </app-link>
            `
          )}
        </div>
        <p>© ${new Date().getFullYear()} Erika George</p>
        <p>
          Made with <a href="https://ardi.netlify.app">Ardi</a> &
          <a href="https://ramidus.netlify.app">Ramidus</a>
        </p>
      </footer>
    `
  },
  styles: css`
    @import '/@/css/style.css';
    :host {
      background: var(--surface);
      color: var(--on-surface);
      display: block;
      left: 0;
      padding: 1rem 1rem;
      position: sticky;
      text-align: center;
      top: 100vh;
    }
    a {
      color: var(--on-surface);
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    [part='footer-nav'] {
      display: none;
      gap: 1rem;
      justify-content: center;
    }
    @media (min-width: 768px) {
      [part='footer-nav'] {
        display: flex;
      }
    }
    [part='footer-nav'] app-link:first-of-type {
      display: none;
    }
  `,
})
