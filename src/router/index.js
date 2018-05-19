import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Callback from '../components/Callback'
import Home from '../components/Home'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'Callback',
      component: Callback
  },
  {
    path: '*',
    redirect: '/home'
  }
  ]
})

export default router