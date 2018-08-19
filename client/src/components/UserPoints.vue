<template>
  <h4>{{this.points}} </h4>
</template>

<script>
export default {
  data () {
    return {
      points: 0
    }
  },
  props: [
    'solved',
    'id'
  ],
  mounted () {
    for (var i = 0; i < this.solved.length; i++) {
      this.points += this.solved[i].points
    }
  }
}
</script>

<style>
</style>
