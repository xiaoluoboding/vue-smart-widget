import { App } from 'vue'

import GridItem from './GridItem.vue'
import GridLayout from './GridLayout.vue'

const install = (app: App): void => {
  app.component(GridItem.name, GridItem)
  app.component(GridLayout.name, GridLayout)
}

export { GridLayout, GridItem }

export default install
