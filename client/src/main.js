// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueSweetalert2)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router: router,
  data: function () {
    return {
      junk: 'junk'
    }
  },
  components: { App },
  template: '<App/>'
})

// The vue object must be captured in a variable,
// but ESLint requires all declared variables be used.
app.junk = 'h*ck this linter'
