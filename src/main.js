import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

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
