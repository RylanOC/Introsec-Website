<template>
  <b-navbar toggleable="md" type="dark" variant="dark">

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
      <b-nav-item href="#register" v-b-modal.modalPopover>Register</b-nav-item>
      <b-nav-item href="#login" v-b-modal.modalPopover>Login</b-nav-item>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</template>


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
