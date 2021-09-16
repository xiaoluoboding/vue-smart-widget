import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './views/Home.vue'
import WidgetOnly from './components/WidgetOnly.vue'
import WidgetWithGrid from './components/WidgetWithGrid.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/widget-only',
    name: WidgetOnly.name,
    component: WidgetOnly
  },
  {
    path: '/widget-with-grid',
    name: WidgetWithGrid.name,
    component: WidgetWithGrid
  },
  {
    path: '/vue-grid-layout',
    name: 'VueGridLayout',
    component: () => import('./components/VueGridLayout.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
