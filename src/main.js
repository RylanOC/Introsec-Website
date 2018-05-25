import Vue from 'vue'
import router from './router'
import lock from './Auth/lock'
import BootstrapVue from 'bootstrap-vue'

import NavBar from './NavBar.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

var navbar = new Vue({
  el: '#navbar',
  router,
  components: { NavBar },
  data: {
    test: 'test'
  },
  render: h => h(NavBar)
})
