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
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// returns all elements in a specified collection
function dump_challenge_type(query_string){
    dbo.collection(query_string).find({}).toArray(function(err, result) {
    if (err) throw err;
    var ret_val = result;
    db.close();
  });
  return ret_val
}

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  web_challenges = dump_challenge_type("web")
  shell_challenges = dump_challenge_type("shell")
  networking_challenges = dump_challenge_type("networking")
  crypto_challenges = dump_challenge_type("crypto")
  reverse_engineering_challenges = dump_challenge_type("reverse_engineering")
  pwning_challenges = dump_challenge_type("pwning")
  recon_challenges = dump_challenge_type("recon")
  steganography_challenges = dump_challenge_type("steganography")
  forensics_challenges = dump_challenge_type("forensics")
  csaw_challenges = dump_challenge_type("csaw")
  misc_challenges = dump_challenge_type("misc")
  physical_challenges = dump_challenge_type("physical")
}); 

export default {
  name: 'challenges',
  components: {
    'challenge-card': ChallengeCard
  },
  data () {
    return {
      web_challenges,
      shell_challenges,
      networking_challenges,
      crypto_challenges,
      reverse_engineering_challenges,
      pwning_challenges,
      recon_challenges,
      steganography_challenges,
      forensics_challenges,
      csaw_challenges,
      misc_challenges,
      physical_challenges
    }
  }
}
</script>

<style>
  challenge-card {
    cursor: pointer;
  }
</style>
