'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _bootstrapVue = require('bootstrap-vue');

var _bootstrapVue2 = _interopRequireDefault(_bootstrapVue);

var _NavBar = require('./components/NavBar.vue');

var _NavBar2 = _interopRequireDefault(_NavBar);

var _App = require('./App.vue');

var _App2 = _interopRequireDefault(_App);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _lock = require('./Auth/lock');

var _lock2 = _interopRequireDefault(_lock);

require('bootstrap/dist/css/bootstrap.min.css');

require('bootstrap-vue/dist/bootstrap-vue.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_bootstrapVue2.default);
_vue2.default.config.productionTip = false;

new _vue2.default({
  el: '#app',
  router: _router2.default,
  components: { App: _App2.default },
  template: '<App/>'
});

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