import ardi, { css, html } from 'https://unpkg.com/ardi'
import links from '/@/assets/media/media.js'

ardi({
  tag: 'media-links',
  template() {
    return links.map(
      (link, i) => html`
        ${i !== 0 ? html`<hr />` : ''}
        <h3>${link.title}</h3>
        ${link.subtitle ? html`<p>${link.subtitle}</p>` : ''}
        <div>
          <a href=${link.url} class="arrow">Read More</a>
          <small>${link.publisher}</small>
        </div>
      `
    )
  },
  styles: css`
    :host {
      display: grid;
      gap: 0.66rem;
    }
    h3 {
      font-family: Josefin Sans;
    }
    h3,
    p {
      margin: 0;
    }
    div {
      align-items: baseline;
      display: flex;
      justify-content: space-between;
    }
    a.arrow {
      text-decoration: none;
    }
    .arrow:after {
      content: '➔';
      margin-left: 0.25rem;
      transition: margin-left 0.25s;
    }
    .arrow:hover:after {
      margin-left: 0.5rem;
    }
    hr {
      background: var(--border);
      border: none;
      height: 1px;
      margin: 0.66rem 0;
    }
  `,
})
