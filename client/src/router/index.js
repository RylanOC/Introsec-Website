import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Challenges from '@/components/Challenges'
import Tools from '@/components/Tools'
import Scoreboard from '@/components/Scoreboard'

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
      path: '/scoreboard',
      name: 'Scoreboard',
      component: Scoreboard
    }
  ]
})
