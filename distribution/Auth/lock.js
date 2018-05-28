'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.notifier = undefined;
exports.is_authenticated = is_authenticated;
exports.login = login;
exports.logout = logout;
exports.get_nick = get_nick;

var _EventEmitter = require('EventEmitter');

var _EventEmitter2 = _interopRequireDefault(_EventEmitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AUTH_CONFIG = {
    clientId: 'hg9CdCL32KCltUgUb5PSAW590gnJSXkJ',
    domain: 'introsec.auth0.com',
    callbackUrl: 'http://localhost:8080/callback',
    apiUrl: 'https://introsec.auth0.com/api/v2/'
};

var options = {
    theme: {
        logo: 'src/assets/introsec.png'
    },
    auth: {
        redirect: false
    },
    autofocus: true,
    autoclose: true
};

var lock = new Auth0Lock(AUTH_CONFIG.clientId, AUTH_CONFIG.domain, options);
var authNotifier = new _EventEmitter2.default();
var authenticated = false;
var nick;

// Listening for the authenticated event
lock.on("authenticated", function (authResult) {
    // Use the token in authResult to getUserInfo() and save it to localStorage
    lock.getUserInfo(authResult.accessToken, function (error, profile) {
        if (error) {
            // Handle error
            return;
        }

        localStorage.setItem('accessToken', authResult.accessToken);
        localStorage.setItem('profile', JSON.stringify(profile));

        name = profile.nickname;
        authenticated = true;

        authNotifier.emit('authChange');
    });
});

var notifier = exports.notifier = authNotifier;

function is_authenticated() {
    return authenticated;
}

function login() {
    lock.show();
}

function logout() {
    lock.logout();
    authenticated = false;
    authNotifier.emit('authChange');
}

function get_nick() {
    return name;
}