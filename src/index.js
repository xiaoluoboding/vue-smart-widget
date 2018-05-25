import SmartWidgetGroup from './components/SmartWidgetGroup'
import SmartWidget from './components/SmartWidget'

const components = [
  SmartWidgetGroup,
  SmartWidget
]

function install (Vue, _) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default install

export {
  SmartWidgetGroup,
  SmartWidget
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
  if (install.installed) {
    install.installed = false
  }
}
