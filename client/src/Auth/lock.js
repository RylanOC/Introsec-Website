import Auth0Lock from 'auth0-lock'
import UserService from '../services/UserService'

var events = require('events')

var AUTH_CONFIG = {
  clientId: 'hg9CdCL32KCltUgUb5PSAW590gnJSXkJ',
  domain: 'introsec.auth0.com',
  callbackUrl: 'https:/rylan.party/callback',
  apiUrl: 'https://introsec.auth0.com/api/v2/'
}

var options = {
  autofocus: true,
  autoclose: true,
  allowShowPassword: true,
  languageDictionary: {
    emailInputPlaceholder: 'something@youremail.com',
    title: 'Introsec'
  },
  additionalSignUpFields: [{
    name: 'user_name',
    placeholder: 'User name',
    validator: function (address) {
      return {
        valid: address.length >= 1,
        hint: 'Please enter a user name' // optional
      }
    }
  },
  {
    name: 'mailing_list',
    placeholder: 'Add me to the mailing list',
    type: 'checkbox',
    prefill: 'true'
  }]
}

const lock = new Auth0Lock(AUTH_CONFIG.clientId, AUTH_CONFIG.domain, options)
var authNotifier = new events.EventEmitter()
var authenticated = false
var name

// create a local database entry for user if they don't already exist
// otherwise return existing entry
async function updateDB (profile) {
  var user = await UserService.getUser({
    sub: profile.sub
  })

  console.log(user.data.user)
  console.log('found: ' + user.data.found)

  // if the user is new, add them to database so we can track points
  if (!user.data.found) {
    await UserService.addUser({
      email: profile.email,
      name: profile.name,
      nickname: profile.nickname,
      sub: profile.sub,
      points: 0,
      solved: [],
      updated_at: profile.updated_at
    })
  }
}

// Listening for the authenticated event
lock.on('authenticated', function (authResult) {
  // Use the token in authResult to getUserInfo() and save it to localStorage
  lock.getUserInfo(authResult.accessToken, function (error, profile) {
    if (error) {
      // Handle error
      return
    }

    localStorage.setItem('accessToken', authResult.accessToken)
    localStorage.setItem('profile', JSON.stringify(profile))

    updateDB(profile)

    name = profile.nickname
    authenticated = true

    authNotifier.emit('authChange')
  })
})

export const notifier = authNotifier

export function isAuthenticated () {
  return authenticated
}

export function login () {
  lock.show()
}

export function logout () {
  authenticated = false
  localStorage.removeItem('accessToken')
  localStorage.removeItem('profile')
  authNotifier.emit('authChange')
  lock.logout({
    returnTo: 'https://rylan.party'
  })
}

export function getNick () {
  return name
}
