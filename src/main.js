import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import NavBar from './NavBar.vue'
import Login from './Login.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

new Vue({
  el: '#navbar',
  render: h => h(NavBar)
})

new Vue({
  el: '#login',
  render: h => h(Login)
})
