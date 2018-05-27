import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import NavBar from './components/NavBar.vue'
import App from './App.vue'
import router from './router'
import lock from './Auth/lock'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: router,
  components: { App },
  template: '<App/>'
})

/*
new Vue({
  el: '#navbar',
  router,
  components: { NavBar },
  data: {
    test: 'test'
  },
  render: h => h(NavBar),
  router: router
})
*/
