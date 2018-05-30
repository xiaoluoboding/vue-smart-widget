import Vue from 'vue'
import Router from 'vue-router'
import HomeIndex from '@/views/index'
import WidgetWithGrid from '@/views/WidgetWithGrid'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/widget-only'
    },
    {
      path: '/widget-only',
      name: 'widget-only',
      component: HomeIndex
    },
    {
      path: '/widget-with-grid',
      name: 'WidgetWithGrid',
      component: WidgetWithGrid
    }
  ]
})
