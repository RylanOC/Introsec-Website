import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Challenges from '@/components/Challenges'
import Tools from '@/components/Tools'
import Slides from '@/components/Slides'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/challenges',
      name: 'Challenges',
      component: Challenges
    },
    {
      path: '/tools',
      name: 'Tools',
      component: Tools
    },
    {
      path: '/slides',
      name: 'Slides',
      component: Slides
    }
  ]
})
