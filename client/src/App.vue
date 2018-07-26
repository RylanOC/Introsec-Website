<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    'navbar': NavBar
  }
}
</script>

<style>
#app {
  background-color: #27282A;
  background-image: url(assets/binary-background.svg);
  background-size:180mm;
  background-position:center;
  background-repeat: repeat;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #dfdfd5;
}

.container {
    background: #27282A
}
</style>
