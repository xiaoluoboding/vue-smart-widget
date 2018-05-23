import Vue from 'vue'
import Router from 'vue-router'
import HomeIndex from '@/views/index'
import SmartGroup from '@/views/SmartGroup'
import ShopifyDraggable from '@/components/ShopifyDraggable'
import DraggableGrid from '@/components/DraggableGrid'

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
    },
    {
      path: '/shopify-draggable',
      name: 'shopify-draggable',
      component: ShopifyDraggable
    },
    {
      path: '/draggable-grid',
      name: 'draggable-grid',
      component: DraggableGrid
    }
  ]
})
