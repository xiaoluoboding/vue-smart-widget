import {
  createApp
} from 'vue'
import App from './App.vue'
import VueSmartWidget from 'vue-smart-widget'
// import 'vue-smart-widget/lib/style.css'
import './assets/style.css'

const app = createApp(App)

app.use(VueSmartWidget)
app.mount('#app')