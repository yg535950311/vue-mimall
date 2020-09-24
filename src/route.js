import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/home'
import Index from './views/index'
// import Product from './views/product'
// import Detail from './views/detail'
// import Login from './views/login'
// import Cart from './views/cart'
// import Order from './views/order'
// import OrderConfirm from './views/orderConfirm'
// import OrderList from './views/orderList'
// import OrderPay from './views/orderPay'
// import AliPay from './views/alipay'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: Index
      }, {
        path: '/product/:id',
        name: 'product',
        component: () => import('./views/product')
      }, {
        path: '/detail/:id',
        name: 'detail',
        component: () => import('./views/detail')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./views/login')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('./views/cart')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('./views/order'),
    children: [
      {
        path: 'confirm',
        name: 'order-confirm',
        component: () => import('./views/orderConfirm')
      }, {
        path: 'list',
        name: 'order-list',
        component: () => import('./views/orderList')
      }, {
        path: 'pay',
        name: 'order-pay',
        component: () => import('./views/orderPay')
      }, {
        path: 'alipay',
        name: 'alipay',
        component: () => import('./views/alipay')
      }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
