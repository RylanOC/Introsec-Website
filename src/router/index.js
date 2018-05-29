import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Challenges from '../components/Challenges'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  build: {
    assetsPublicPath: '/dist/'
  },
  base: '/dist/',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/challenges',
      name: 'Challenges',
      component: Challenges
    }
  ]
})

export default router
