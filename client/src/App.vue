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

<style lang="scss">
@import "../src/assets/main.css";
</style>
