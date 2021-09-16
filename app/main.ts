import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { BarChart, PieChart } from 've-charts'

import VueSmartWidget from '../src/index'
import hljs from './components/hljs'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(BarChart)
app.use(PieChart)
app.use(VueSmartWidget)
app.use(hljs)

app.mount('#app')
