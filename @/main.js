// load all components
const components = [
  'app-footer',
  'app-layout',
  'app-nav',
  'spa-link',
  'spa-root',
]
components.forEach((c) => import(`/@/components/${c}.js`))

import('https://unpkg.com/ardi/demos/dialog/dialog.js')

// fade in gracefully when components are loaded
const isDefined = components.map((c) => customElements.whenDefined(c))
await Promise.allSettled(isDefined)
document.body.style.opacity = 1
