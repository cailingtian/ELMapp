import Vue from 'vue'
import Router from 'vue-router'
import goods from '@/components/goods/Goods'
import ratings from '@/components/ratings/Ratings'
import seller from '@/components/seller/Seller'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/goods',
      name: 'Goods',
      component: goods
    },
    {
      path: '/ratings',
      name: 'Ratings',
      component: ratings
    },
    {
      path: '/seller',
      name: 'Seller',
      component: seller
    }
  ]
})
