import SmartWidgetGrid from './components/SmartWidgetGrid'
import SmartWidget from './components/SmartWidget'

const components = [
  SmartWidgetGrid,
  SmartWidget
]

function install (Vue, _) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default install

export {
  SmartWidgetGrid,
  SmartWidget
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
  if (install.installed) {
    install.installed = false
  }
}
