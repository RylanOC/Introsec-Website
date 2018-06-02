<template>
  <div class="container">
      <br>
    <b-card-group deck class="mb-3">
        <h2>Web</h2>
        <challenge-card
        v-for="challenge in webChallenges" :key="challenge.points"
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
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/'
var webChallenges
var shellChallenges
var networkingChallenges
var cryptoChallenges
var reverseEngineeringChallenges
var pwningChallenges
var reconChallenges
var steganographyChallenges
var forensicsChallenges
var csawChallenges
var miscChallenges
var physicalChallenges

// returns all elements in a specified collection
function dumpChallengeType (queryString, dbo, db) {
  dbo.collection(queryString).find({}).toArray(function (err, result) {
    if (err) throw err
    db.close()
    return result
  })
}

MongoClient.connect(url, function (err, db) {
  var dbo = db.db('challenges')
  if (err) throw err
  webChallenges = dumpChallengeType('web', dbo, db)
  shellChallenges = dumpChallengeType('shell', dbo, db)
  networkingChallenges = dumpChallengeType('networking', dbo, db)
  cryptoChallenges = dumpChallengeType('crypto', dbo, db)
  reverseEngineeringChallenges = dumpChallengeType('reverse_engineering', dbo, db)
  pwningChallenges = dumpChallengeType('pwning', dbo, db)
  reconChallenges = dumpChallengeType('recon', dbo, db)
  steganographyChallenges = dumpChallengeType('steganography', dbo, db)
  forensicsChallenges = dumpChallengeType('forensics', dbo, db)
  csawChallenges = dumpChallengeType('csaw', dbo, db)
  miscChallenges = dumpChallengeType('misc', dbo, db)
  physicalChallenges = dumpChallengeType('physical', dbo, db)
})

export default {
  name: 'challenges',
  components: {
    'challenge-card': ChallengeCard
  },
  data () {
    return {
      webChallenges,
      shellChallenges,
      networkingChallenges,
      cryptoChallenges,
      reverseEngineeringChallenges,
      pwningChallenges,
      reconChallenges,
      steganographyChallenges,
      forensicsChallenges,
      csawChallenges,
      miscChallenges,
      physicalChallenges
    }
  }
}
</script>

<style>
  challenge-card {
    cursor: pointer;
  }
</style>
