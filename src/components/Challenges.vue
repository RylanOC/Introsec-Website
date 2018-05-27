<template>
  <div class="container">
      <br>
    <b-card-group deck class="mb-3">
        <h2>Web</h2>
        <challenge-card 
        v-for="challenge in web_challenges" :key="challenge.points"
        v-bind:points="challenge.points"
        v-bind:catagory="challenge.catagory"
        v-bind:name="challenge.name"
        v-bind:hint="challenge.hint"
        v-bind:author="challenge.author"
        v-bind:solved="challenge.solved">
        </challenge-card>
    </b-card-group>
  </div>
</template>

<script>
import ChallengeCard from './ChallengeCard.vue'

  export default {
    name: 'challenges',
    components: {
      'challenge-card': ChallengeCard
    },
    data () {
        return {
            web_challenges: [
                {
                    points: 5,
                    catagory: 'Web',
                    name: 'Find Flag',
                    hint: 'Find the flag hidden on this webpage!',
                    author: 'Milo',
                    solved: true
                },
                {
                    points: 10,
                    catagory: 'Web',
                    name: 'Javascript is Bad',
                    hint: 'Find the flag hidden on this webpage!\n(Looking at page source is cheating)',
                    author: 'Milo',
                    solved: false
                },
                {
                    points: 15,
                    catagory: 'Web',
                    name: 'Useragent Lock',
                    hint: 'This page has some kind of fingerprinting system to prevent unauthorized users from gaining access!\nCan you fool the system?',
                    author: 'Milo',
                    solved: false
                },
                {
                    points: 30,
                    catagory: 'Web',
                    name: 'Om nom nom',
                    hint: 'You must become an admin! But you don’t know the password!\nI wonder if there’s another way…',
                    author: 'Milo',
                    solved: false
                },
            ]
        }
    }
  }
</script>

<style>
  challenge-card {
    cursor: pointer;
  }
</style>