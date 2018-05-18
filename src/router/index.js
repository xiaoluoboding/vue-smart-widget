import Vue from 'vue'
import Router from 'vue-router'
import HomeIndex from '@/views/index'
import ShopifyDraggable from '@/components/ShopifyDraggable'

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
      path: '/shopify-draggable',
      name: 'shopify-draggable',
      component: ShopifyDraggable
    }
  ]
})
