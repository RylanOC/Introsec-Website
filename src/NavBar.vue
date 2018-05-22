<template>
  <b-navbar toggleable="md" type="dark" variant="secondary">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#">INTROSEC</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-item href="#">Home</b-nav-item>
      <b-nav-item href="#">About</b-nav-item>
      <b-nav-item href="#">Scoreboard</b-nav-item>
      <b-nav-item-dropdown text="Resources" right>
        <b-dropdown-item href="#">Tools</b-dropdown-item>
        <b-dropdown-item href="#">Slides</b-dropdown-item>
        <b-dropdown-item href="https://rpis.ec/">RPISEC</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item >
       <div>
        <b-btn v-b-modal.loginModal v-on:click="login">Login</b-btn>
        <b-modal id="loginModal" title="Log In" ok-only>
         <div id="hiw-login-container"></div>
        </b-modal>
      </div>
      </b-nav-item>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</template>

<script>
var lock = require('./Auth/lock.js');

export default {
  methods: {
    login: function() {
        lock.show();
      }
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
