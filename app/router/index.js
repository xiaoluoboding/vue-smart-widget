import Vue from 'vue'
import Router from 'vue-router'
import HomeIndex from '@/views/index'
import WidgetOnly from '@/views/WidgetOnly'
import WidgetWithGrid from '@/views/WidgetWithGrid'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: HomeIndex
    },
    {
      path: '/widget-only',
      name: 'widget-only',
      component: WidgetOnly
    },
    {
      path: '/widget-with-grid',
      name: 'WidgetWithGrid',
      component: WidgetWithGrid
    }
  ]
})
