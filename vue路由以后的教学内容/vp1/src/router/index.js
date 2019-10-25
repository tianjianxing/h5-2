import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Product from '@/components/Product'
import Recommend from '@/components/Recommend'
import Hot from '@/components/Hot'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/product',
      name: 'Product',
      component: Product,
      children:[//配置子路由
        {
          path: '/product/recommend',
          name: 'Recommend',
          component: Recommend
        },
        {
          path: '/product/hot',
          name: 'Hot',
          component: Hot
        }
      ],
      redirect: '/product/recommend'//路由重定向
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
