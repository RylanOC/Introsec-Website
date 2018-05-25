import EventEmitter from 'EventEmitter'

var AUTH_CONFIG = {
    clientId: 'hg9CdCL32KCltUgUb5PSAW590gnJSXkJ',
    domain: 'introsec.auth0.com',
    callbackUrl: 'http://localhost:8080/callback',
    apiUrl: 'https://introsec.auth0.com/api/v2/'
}

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

const lock = new Auth0Lock(AUTH_CONFIG.clientId, AUTH_CONFIG.domain, options);
var authNotifier = new EventEmitter()
var authenticated = false;
var nick;

// Listening for the authenticated event
lock.on("authenticated", function(authResult) {
    // Use the token in authResult to getUserInfo() and save it to localStorage
    lock.getUserInfo(authResult.accessToken, function(error, profile) {
      if (error) {
        // Handle error
        return;
      }

      localStorage.setItem('accessToken', authResult.accessToken);
      localStorage.setItem('profile', JSON.stringify(profile));

      name = profile.nickname;
      authenticated = true;

      authNotifier.emit('authChange')
    });
});

export const notifier = authNotifier;

export function is_authenticated() {
    return authenticated;
}

export function login() {
    lock.show();
}

export function logout() {
    lock.logout();
    authenticated = false;
    authNotifier.emit('authChange');
}

export function get_nick() {
    return name;
}

