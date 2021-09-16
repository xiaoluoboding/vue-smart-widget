import { App } from 'vue'

import SmartWidgetGrid from './vue-smart-widget/packages/SmartWidgetGrid.vue'
import SmartWidget from './vue-smart-widget/packages/SmartWidget.vue'

const install = (app: App): void => {
  app.component(SmartWidgetGrid.name, SmartWidgetGrid)
  app.component(SmartWidget.name, SmartWidget)
}

export { SmartWidgetGrid, SmartWidget }

export default install
