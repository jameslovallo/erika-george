import 'https://unpkg.com/ardi/@/components/app-link.js'
import 'https://unpkg.com/ardi/@/components/app-root.js'
import 'https://unpkg.com/ardi/demos/dialog/dialog.js'

// load all components
const components = [
  'app-footer',
  'app-layout',
  'app-link',
  'app-nav',
  'app-root',
]
components.forEach((c) => import(`/@/components/${c}.js`))

// fade in gracefully when components are loaded
const isDefined = components.map((c) => customElements.whenDefined(c))
await Promise.allSettled(isDefined)
document.body.style.opacity = 1
