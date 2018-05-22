import Vue from 'vue'
import router from './router'
import lock from './Auth/lock'
import BootstrapVue from 'bootstrap-vue'

import NavBar from './NavBar.vue'
import Login from './Login.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  el: '#navbar',
  lock,
  render: h => h(NavBar)
})

new Vue({
  el: '#login',
  router,
  render: h => h(Login)
})