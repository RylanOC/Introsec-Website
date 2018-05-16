import auth0 from 'auth0-js'
import EventEmitter from 'EventEmitter'
import router from './../router'

// FIX ME
authenticated = this.isAuthenticated()
authNotifier = new EventEmitter()

export default class AuthService {

    

    constructor() {
        this.login = this.login.bind(this)
        this.setSession = this.setSession.bind(this)
        this.logout = this.logout.bind(this)
        this.isAuthenticated = this.isAuthenticated.bind(this)
    }

    // parse URL for authentication hash
    handleAuthentication () {
        this.auth0.parseHash((err, authResult ) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult)
                router.replace('home')
            }
            else if (err) {
                router.replace('home')
                console.log(err)
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
        localStorage.setItem('expires_at', authResult.expiresAt)
        localStorage.setItem('authChange', {authenticated: true})
    }

    login () {
        this.auth0.authorize()
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