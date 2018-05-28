'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _Home = require('../components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Challenges = require('../components/Challenges');

var _Challenges2 = _interopRequireDefault(_Challenges);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

var router = new _vueRouter2.default({
  mode: 'history',
  routes: [{
    path: '/home',
    name: 'Home',
    component: _Home2.default
  }, {
    path: '/challenges',
    name: 'Challenges',
    component: _Challenges2.default
  }]
});

exports.default = router;