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
    container: 'hiw-login-container'
};

const lock = new Auth0Lock(AUTH_CONFIG.clientId, AUTH_CONFIG.domain, options);

// Listening for the authenticated event
lock.on("authenticated", function(authResult) {
    // Use the token in authResult to getUserInfo() and save it to localStorage
    lock.getUserInfo(authResult.accessToken, function(error, profile) {
      if (error) {
        // Handle error
        return;
      }
  
      document.getElementById('nick').textContent = profile.nickname;
  
      localStorage.setItem('accessToken', authResult.accessToken);
      localStorage.setItem('profile', JSON.stringify(profile));
    });
});

exports.show = function(){
    if (document.getElementById('hiw-login-container')){
        lock.show();
    }
};