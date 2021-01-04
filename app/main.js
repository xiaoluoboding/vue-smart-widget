import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import App from './App.vue'

import { SmartWidget, SmartWidgetGrid } from '../src/index' // 调试开发
// import { SmartWidget, SmartWidgetGrid } from '../lib/vue-smart-widget.min.js' // 调试线上
// import '../lib/vue-smart-widget.css'

import VeChart from 've-charts'

import VTooltip from 'v-tooltip'

Vue.use(VTooltip)

Vue.component('SmartWidget', SmartWidget)
Vue.component('SmartWidgetGrid', SmartWidgetGrid)

Vue.use(VeChart)

Vue.use(ElementUI, {
  size: 'small'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
