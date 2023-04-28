import 'https://unpkg.com/ardi/@/components/app-link.js'
import 'https://unpkg.com/ardi/@/components/app-root.js'
import 'https://unpkg.com/ardi/demos/dialog/dialog.js'

// load all components
const components = ['app-footer', 'app-layout', 'app-nav', 'mark-down']
components.forEach((c) => import(`/@/components/${c}.js`))

// fade in gracefully when components are loaded
const isDefined = ['app-link', 'app-root', ...components].map((c) =>
  customElements.whenDefined(c)
)
await Promise.allSettled(isDefined)
document.body.style.opacity = 1
