import auth0 from 'auth0-js'
import { AUTH_CONFIG } from './auth0-variables'
import EventEmitter from 'EventEmitter'
import router from './../router'

export default class AuthService {

    constructor() {
        this.authenticated = this.isAuthenticated()
        this.authNotifier = new EventEmitter() 
        this.login = this.login.bind(this)
        this.setSession = this.setSession.bind(this)
        this.logout = this.logout.bind(this)
        this.isAuthenticated = this.isAuthenticated.bind(this)

        // create auth0 object with values defined in config file
        this.auth0 = new auth0.WebAuth({
            domain: AUTH_CONFIG.domain,
            clientID: AUTH_CONFIG.clientId,
            redirectUri: AUTH_CONFIG.callbackUrl,
            audience: `https://${AUTH_CONFIG.domain}/userinfo`,
            responseType: 'token id_token',
            scope: 'openid'
        })
    }

    

    // parse URL for authentication hash
    handleAuthentication () {
        console.log('handleAuthentication')
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
              this.setSession(authResult)
              console.log(authResult)
              router.replace('home')
            } else if (err) {
              router.replace('home')
              console.log(err)
              alert(`Error: ${err.error}. Check the console for further details.`)
            }
      })
    }

    // cache tokens
    setSession (authResult) {
        // set expiration date for access token
        let expiresAt = JSON.stringify (
            authResult.expiresIn * 1000 + new Date().getTime()
        )
        localStorage.setItem('access_token', authResult.accessToken)
        localStorage.setItem('id_token', authResult.idToken)
        localStorage.setItem('expires_at', expiresAt)
        localStorage.setItem('authChange', {authenticated: true})
    }

    login () {
        this.auth0.authorize()
        console.log('login')
    }

    logout () {
        // clear tokens from cache
        localStorage.removeItem('access_token')
        localStorage.removeItem('id_token')
        localStorage.removeItem('expires_at')
        this.userProfile = null
        this.authNotifier.emit('authChange', false)

        router.replace('home')
    }

    // compare current time to token exiration date
    isAuthenticated () {
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
        let expired = new Date().getTime() < expiresAt
        return expired
    }
}