import Vue from 'vue'
import Router from 'vue-router'
import HomeIndex from '@/views/index'
import SmartGroup from '@/views/SmartGroup'

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
      path: '/smart-group',
      name: 'SmartGroup',
      component: SmartGroup
    }
  ]
})
