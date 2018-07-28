<template>
  <div class="container">
    <br>
      <table cellpadding="10">
        <tbody>
            <tr>
                <td style="width: 10%">
                    <h2 style="text-align: right">Web</h2>
                </td>
                <td>
                    <b-card-group deck class="mb-3">
                        <challenge-card
                        v-for="(challenge, index) in webChallenges" :key="index"
                        v-bind:points="challenge.points"
                        v-bind:catagory="challenge.catagory"
                        v-bind:name="challenge.name"
                        v-bind:hint="challenge.hint"
                        v-bind:author="challenge.author"
                        v-bind:solved="challenge.solved"
                        v-bind:id="challenge._id">
                        </challenge-card>
                    </b-card-group>
                </td> 
            </tr>
            <tr>
                <td style="width: 10%">
                    <h2 style="text-align: right">Shell</h2>
                </td>
                <td>
                    <b-card-group deck class="mb-3">
                        <challenge-card
                        v-for="(challenge, index) in shellChallenges" :key="index"
                        v-bind:points="challenge.points"
                        v-bind:catagory="challenge.catagory"
                        v-bind:name="challenge.name"
                        v-bind:hint="challenge.hint"
                        v-bind:author="challenge.author"
                        v-bind:solved="challenge.solved"
                        v-bind:id="challenge._id">
                        </challenge-card>
                    </b-card-group>
                </td> 
            </tr>
            <tr>
                <td style="width: 10%">
                    <h2 style="text-align: right">Networking</h2>
                </td>
                <td>
                    <b-card-group deck class="mb-3">
                        <challenge-card
                        v-for="(challenge, index) in networkingChallenges" :key="index"
                        v-bind:points="challenge.points"
                        v-bind:catagory="challenge.catagory"
                        v-bind:name="challenge.name"
                        v-bind:hint="challenge.hint"
                        v-bind:author="challenge.author"
                        v-bind:solved="challenge.solved"
                        v-bind:id="challenge._id">
                        </challenge-card>
                    </b-card-group>
                </td> 
            </tr>
            <tr>
                <td style="width: 10%">
                    <h2 style="text-align: right">Crypto</h2>
                </td>
                <td>
                    <b-card-group deck class="mb-3">
                        <challenge-card
                        v-for="(challenge, index) in cryptoChallenges" :key="index"
                        v-bind:points="challenge.points"
                        v-bind:catagory="challenge.catagory"
                        v-bind:name="challenge.name"
                        v-bind:hint="challenge.hint"
                        v-bind:author="challenge.author"
                        v-bind:solved="challenge.solved"
                        v-bind:id="challenge._id">
                        </challenge-card>
                    </b-card-group>
                </td> 
            </tr>
            <tr>
                <td style="width: 10%">
                    <h2 style="text-align: right">Reverse Engineering</h2>
                </td>
                <td>
                    <b-card-group deck class="mb-3">
                        <challenge-card
                        v-for="(challenge, index) in reverseEngineeringChallenges" :key="index"
                        v-bind:points="challenge.points"
                        v-bind:catagory="challenge.catagory"
                        v-bind:name="challenge.name"
                        v-bind:hint="challenge.hint"
                        v-bind:author="challenge.author"
                        v-bind:solved="challenge.solved"
                        v-bind:id="challenge._id">
                        </challenge-card>
                    </b-card-group>
                </td> 
            </tr>
            <tr>
                <td style="width: 10%">
                    <h2 style="text-align: right">Pwning</h2>
                </td>
                <td>
                    <b-card-group deck class="mb-3">
                        <challenge-card
                        v-for="(challenge, index) in pwningChallenges" :key="index"
                        v-bind:points="challenge.points"
                        v-bind:catagory="challenge.catagory"
                        v-bind:name="challenge.name"
                        v-bind:hint="challenge.hint"
                        v-bind:author="challenge.author"
                        v-bind:solved="challenge.solved"
                        v-bind:id="challenge._id">
                        </challenge-card>
                    </b-card-group>
                </td> 
            </tr>
            <tr>
                <td style="width: 10%">
                    <h2 style="text-align: right">Recon</h2>
                </td>
                <td>
                    <b-card-group deck class="mb-3">
                        <challenge-card
                        v-for="(challenge, index) in reconChallenges" :key="index"
                        v-bind:points="challenge.points"
                        v-bind:catagory="challenge.catagory"
                        v-bind:name="challenge.name"
                        v-bind:hint="challenge.hint"
                        v-bind:author="challenge.author"
                        v-bind:solved="challenge.solved"
                        v-bind:id="challenge._id">
                        </challenge-card>
                    </b-card-group>
                </td> 
            </tr>
            <tr>
                <td style="width: 10%">
                    <h2 style="text-align: right">Steganography</h2>
                </td>
                <td>
                    <b-card-group deck class="mb-3">
                        <challenge-card
                        v-for="(challenge, index) in steganographyChallenges" :key="index"
                        v-bind:points="challenge.points"
                        v-bind:catagory="challenge.catagory"
                        v-bind:name="challenge.name"
                        v-bind:hint="challenge.hint"
                        v-bind:author="challenge.author"
                        v-bind:solved="challenge.solved"
                        v-bind:id="challenge._id">
                        </challenge-card>
                    </b-card-group>
                </td> 
            </tr>
            <tr>
                <td style="width: 10%">
                    <h2 style="text-align: right">Forensics</h2>
                </td>
                <td>
                    <b-card-group deck class="mb-3">
                        <challenge-card
                        v-for="(challenge, index) in forensicsChallenges" :key="index"
                        v-bind:points="challenge.points"
                        v-bind:catagory="challenge.catagory"
                        v-bind:name="challenge.name"
                        v-bind:hint="challenge.hint"
                        v-bind:author="challenge.author"
                        v-bind:solved="challenge.solved"
                        v-bind:id="challenge._id">
                        </challenge-card>
                    </b-card-group>
                </td> 
            </tr>
            <tr>
                <td style="width: 10%">
                    <h2 style="text-align: right">CSAW</h2>
                </td>
                <td>
                    <b-card-group deck class="mb-3">
                        <challenge-card
                        v-for="(challenge, index) in csawChallenges" :key="index"
                        v-bind:points="challenge.points"
                        v-bind:catagory="challenge.catagory"
                        v-bind:name="challenge.name"
                        v-bind:hint="challenge.hint"
                        v-bind:author="challenge.author"
                        v-bind:solved="challenge.solved"
                        v-bind:id="challenge._id">
                        </challenge-card>
                    </b-card-group>
                </td> 
            </tr>
            <tr>
                <td style="width: 10%">
                    <h2 style="text-align: right">Misc</h2>
                </td>
                <td>
                    <b-card-group deck class="mb-3">
                        <challenge-card
                        v-for="(challenge, index) in miscChallenges" :key="index"
                        v-bind:points="challenge.points"
                        v-bind:catagory="challenge.catagory"
                        v-bind:name="challenge.name"
                        v-bind:hint="challenge.hint"
                        v-bind:author="challenge.author"
                        v-bind:solved="challenge.solved"
                        v-bind:id="challenge._id">
                        </challenge-card>
                    </b-card-group>
                </td> 
            </tr>
            <tr>
                <td style="width: 10%">
                    <h2 style="text-align: right">Physical</h2>
                </td>
                <td>
                    <b-card-group deck class="mb-3">
                        <challenge-card
                        v-for="(challenge, index) in physicalChallenges" :key="index"
                        v-bind:points="challenge.points"
                        v-bind:catagory="challenge.catagory"
                        v-bind:name="challenge.name"
                        v-bind:hint="challenge.hint"
                        v-bind:author="challenge.author"
                        v-bind:solved="challenge.solved"
                        v-bind:id="challenge._id">
                        </challenge-card>
                    </b-card-group>
                </td> 
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import ChallengeCard from './ChallengeCard.vue'
import ChallengeService from '@/services/ChallengeService'
import UserService from '@/services/UserService'
var lock = require('../Auth/lock.js')

export default {
  name: 'challenges',
  components: {
    'challenge-card': ChallengeCard
  },
  data () {
    // if a user logs in while on challenges page, update solved list
    lock.notifier.on('authChange', () => {
      this.getSolved()
    })
    return {
      webChallenges: [],
      shellChallenges: [],
      networkingChallenges: [],
      cryptoChallenges: [],
      reverseEngineeringChallenges: [],
      pwningChallenges: [],
      reconChallenges: [],
      steganographyChallenges: [],
      forensicsChallenges: [],
      csawChallenges: [],
      miscChallenges: [],
      physicalChallenges: []
    }
  },
  mounted () {
    this.getChallenges()
    this.$on('recalculate_solved', () => {
      this.getSolved()
    })
  },
  methods: {
    async getChallenges () {
      var response
      response = await ChallengeService.fetchWebChallenges()
      this.webChallenges = response.data.webChallenges
      response = await ChallengeService.fetchShellChallenges()
      this.shellChallenges = response.data.shellChallenges
      response = await ChallengeService.fetchNetworkingChallenges()
      this.networkingChallenges = response.data.networkingChallenges
      response = await ChallengeService.fetchCryptoChallenges()
      this.cryptoChallenges = response.data.cryptoChallenges
      response = await ChallengeService.fetchReverseEngineeringChallenges()
      this.reverseEngineeringChallenges = response.data.reverse_engineeringChallenges
      response = await ChallengeService.fetchPwningChallenges()
      this.pwningChallenges = response.data.pwningChallenges
      response = await ChallengeService.fetchReconChallenges()
      this.reconChallenges = response.data.reconChallenges
      response = await ChallengeService.fetchSteganographyChallenges()
      this.steganographyChallenges = response.data.steganographyChallenges
      response = await ChallengeService.fetchForensicsChallenges()
      this.forensicsChallenges = response.data.forensicsChallenges
      response = await ChallengeService.fetchCSAWChallenges()
      this.csawChallenges = response.data.csawChallenges
      response = await ChallengeService.fetchMiscChallenges()
      this.miscChallenges = response.data.miscChallenges
      response = await ChallengeService.fetchPhysicalChallenges()
      this.physicalChallenges = response.data.physicalChallenges
      this.getSolved()
    },

    // gets a list of challenges solved by current user
    // modifies local challenge array to force challenge cards to update
    async getSolved () {
      var user = JSON.parse(localStorage.getItem('profile'))
      var solved = await UserService.getSolved({
        user_id: user.sub
      })
      solved = solved.data.solved
      // for each challenge, update the corresponding card so solved = true
      var index
      for (var i = 0; i < solved.length; i++) {
        switch (solved[i].category) {
          case 'Web':
            index = this.webChallenges.map(
                function (obj) { return obj._id }
            ).indexOf(solved[i]._id)
            this.webChallenges[index].solved = true
            break
          case 'Shell':
            index = this.shellChallenges.map(
                function (obj) { return obj._id }
            ).indexOf(solved[i]._id)
            this.shellChallenges[index].solved = true
            break
          case 'Networking':
            index = this.networkingChallenges.map(
                function (obj) { return obj._id }
            ).indexOf(solved[i]._id)
            this.networkingChallenges[index].solved = true
            break
          case 'Crypto':
            index = this.cryptoChallenges.map(
                function (obj) { return obj._id }
            ).indexOf(solved[i]._id)
            this.cryptoChallenges[index].solved = true
            break
          case 'Reverse Engineering':
            index = this.reverseEngineeringChallenges.map(
                function (obj) { return obj._id }
            ).indexOf(solved[i]._id)
            this.reverseEngineeringChallenges[index].solved = true
            break
          case 'Pwning':
            index = this.pwningChallenges.map(
                function (obj) { return obj._id }
            ).indexOf(solved[i]._id)
            this.pwningChallenges[index].solved = true
            break
          case 'Recon':
            index = this.reconChallenges.map(
                function (obj) { return obj._id }
            ).indexOf(solved[i]._id)
            this.reconChallenges[index].solved = true
            break
          case 'Steganography':
            index = this.steganographyChallenges.map(
                function (obj) { return obj._id }
            ).indexOf(solved[i]._id)
            this.steganographyChallenges[index].solved = true
            break
          case 'Forensics':
            index = this.forensicsChallenges.map(
                function (obj) { return obj._id }
            ).indexOf(solved[i]._id)
            this.forensicsChallenges[index].solved = true
            break
          case 'CSAW':
            index = this.csawChallenges.map(
                function (obj) { return obj._id }
            ).indexOf(solved[i]._id)
            this.csawChallenges[index].solved = true
            break
          case 'Misc':
            index = this.miscChallenges.map(
                function (obj) { return obj._id }
            ).indexOf(solved[i]._id)
            this.miscChallenges[index].solved = true
            break
          case 'Physical':
            index = this.physicalChallenges.map(
                function (obj) { return obj._id }
            ).indexOf(solved[i]._id)
            this.physicalChallenges[index].solved = true
            break
        }
      }
    }
  }
}
</script>

<style>
table {
    border:none;
    border-collapse: collapse;
}

table td {
    border-left: 3px solid #2c3e50;
    border-right: 1px solid #2c3e50;
}

table td:first-child {
    border-left: none;
}

table td:last-child {
    border-right: none;
}

h3 {
    color: #2c3e50
}
</style>
