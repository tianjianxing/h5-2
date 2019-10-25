import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import ProductList from '@/components/ProductList'
import ProductDetails from '@/components/ProductDetails'
import ActiveDemo from '@/components/ActiveDemo'
import A1 from '@/components/A1'
import A2 from '@/components/A2'
import A3 from '@/components/A3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/productList',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/productDetails',
      name: 'ProductDetails',
      component: ProductDetails
    },
    {
      path: '/activeDemo',
      name: 'ActiveDemo',
      component: ActiveDemo,
      children:[
        {
          path: '/activeDemo/a1',
          name: 'A1',
          component: A1
        },
        {
          path: '/activeDemo/a2',
          name: 'A2',
          component: A2
        },
        {
          path: '/activeDemo/a3',
          name: 'A3',
          component: A3
        }
      ],
      redirect: '/activeDemo/a1'
    }
  ]
})
