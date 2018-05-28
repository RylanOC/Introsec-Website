'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _auth0Js = require('auth0-js');

var _auth0Js2 = _interopRequireDefault(_auth0Js);

var _auth0Variables = require('./auth0-variables');

var _EventEmitter = require('EventEmitter');

var _EventEmitter2 = _interopRequireDefault(_EventEmitter);

var _router = require('./../router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthService = function () {
    function AuthService() {
        _classCallCheck(this, AuthService);

        this.authenticated = this.isAuthenticated();
        this.authNotifier = new _EventEmitter2.default();
        this.login = this.login.bind(this);
        this.setSession = this.setSession.bind(this);
        this.logout = this.logout.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);

        // create auth0 object with values defined in config file
        this.auth0 = new _auth0Js2.default.WebAuth({
            domain: _auth0Variables.AUTH_CONFIG.domain,
            clientID: _auth0Variables.AUTH_CONFIG.clientId,
            redirectUri: _auth0Variables.AUTH_CONFIG.callbackUrl,
            audience: 'https://' + _auth0Variables.AUTH_CONFIG.domain + '/userinfo',
            responseType: 'token id_token',
            scope: 'openid'
        });
    }

    // parse URL for authentication hash


    _createClass(AuthService, [{
        key: 'handleAuthentication',
        value: function handleAuthentication() {
            var _this = this;

            console.log('handleAuthentication');
            this.auth0.parseHash(function (err, authResult) {
                if (authResult && authResult.accessToken && authResult.idToken) {
                    _this.setSession(authResult);
                    console.log(authResult);
                    _router2.default.replace('home');
                } else if (err) {
                    _router2.default.replace('home');
                    console.log(err);
                    alert('Error: ' + err.error + '. Check the console for further details.');
                }
            });
        }

        // cache tokens

    }, {
        key: 'setSession',
        value: function setSession(authResult) {
            // set expiration date for access token
            var expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
            localStorage.setItem('access_token', authResult.accessToken);
            localStorage.setItem('id_token', authResult.idToken);
            localStorage.setItem('expires_at', expiresAt);
            localStorage.setItem('authChange', { authenticated: true });
        }
    }, {
        key: 'login',
        value: function login() {
            this.auth0.authorize();
            console.log('login');
        }
    }, {
        key: 'logout',
        value: function logout() {
            // clear tokens from cache
            localStorage.removeItem('access_token');
            localStorage.removeItem('id_token');
            localStorage.removeItem('expires_at');
            this.userProfile = null;
            this.authNotifier.emit('authChange', false);

            _router2.default.replace('home');
        }

        // compare current time to token exiration date

    }, {
        key: 'isAuthenticated',
        value: function isAuthenticated() {
            var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
            var expired = new Date().getTime() < expiresAt;
            return expired;
        }
    }]);

    return AuthService;
}();

exports.default = AuthService;