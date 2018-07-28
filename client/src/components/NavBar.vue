<template>
  <b-navbar toggleable="md" type="dark" variant="dark">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#">INTROSEC</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-item href="/home">Home</b-nav-item>
      <b-nav-item href="/about">About</b-nav-item>
      <b-nav-item href="/challenges">Challenges</b-nav-item>
      <b-nav-item-dropdown text="Resources" right>
        <b-dropdown-item href="/tools">Tools</b-dropdown-item>
        <b-dropdown-item href="/slides">Slides</b-dropdown-item>
        <b-dropdown-item href="https://rpis.ec/">RPISEC</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item >
        <div v-if="this.authenticated" class="row">
          <b-btn v-on:click="logout">Logout</b-btn>
        </div>
        <div v-else>
          <b-btn v-on:click="challenge">Login</b-btn>
        </div>
      </b-nav-item>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</template>

<script>
var lock = require('../Auth/lock.js')

export default {
  name: 'Navbar',
  data: function () {
    lock.notifier.on('authChange', () => {
      this.updateAuthStatus()
    })
    return {
      user: null,
      lock,
      authenticated: false
    }
  },
  methods: {
    challenge: function () {
      lock.login()
    },
    logout: function () {
      lock.logout()
    },
    updateAuthStatus: function () {
      this.user = localStorage.getItem('profile')
      if (typeof this.user !== 'undefined' && this.user != null) {
        this.authenticated = true
      } else {
        this.authenticated = false
      }
    }
  },
  mounted () {
    this.updateAuthStatus()
  }
}

</script>

<style>
#navbar {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
