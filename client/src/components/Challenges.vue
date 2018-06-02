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
                        v-for="challenge in webChallenges" :key="challenge.points"
                        v-bind:points="challenge.points"
                        v-bind:catagory="challenge.catagory"
                        v-bind:name="challenge.name"
                        v-bind:hint="challenge.hint"
                        v-bind:author="challenge.author"
                        v-bind:solved="challenge.solved">
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
                        v-for="challenge in shellChallenges" :key="challenge.points"
                        v-bind:points="challenge.points"
                        v-bind:catagory="challenge.catagory"
                        v-bind:name="challenge.name"
                        v-bind:hint="challenge.hint"
                        v-bind:author="challenge.author"
                        v-bind:solved="challenge.solved">
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
                        v-for="challenge in networkingChallenges" :key="challenge.points"
                        v-bind:points="challenge.points"
                        v-bind:catagory="challenge.catagory"
                        v-bind:name="challenge.name"
                        v-bind:hint="challenge.hint"
                        v-bind:author="challenge.author"
                        v-bind:solved="challenge.solved">
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
                        v-for="challenge in cryptoChallenges" :key="challenge.points"
                        v-bind:points="challenge.points"
                        v-bind:catagory="challenge.catagory"
                        v-bind:name="challenge.name"
                        v-bind:hint="challenge.hint"
                        v-bind:author="challenge.author"
                        v-bind:solved="challenge.solved">
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
                        v-for="challenge in reverseEngineeringChallenges" :key="challenge.points"
                        v-bind:points="challenge.points"
                        v-bind:catagory="challenge.catagory"
                        v-bind:name="challenge.name"
                        v-bind:hint="challenge.hint"
                        v-bind:author="challenge.author"
                        v-bind:solved="challenge.solved">
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
                        v-for="challenge in pwningChallenges" :key="challenge.points"
                        v-bind:points="challenge.points"
                        v-bind:catagory="challenge.catagory"
                        v-bind:name="challenge.name"
                        v-bind:hint="challenge.hint"
                        v-bind:author="challenge.author"
                        v-bind:solved="challenge.solved">
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
                        v-for="challenge in reconChallenges" :key="challenge.points"
                        v-bind:points="challenge.points"
                        v-bind:catagory="challenge.catagory"
                        v-bind:name="challenge.name"
                        v-bind:hint="challenge.hint"
                        v-bind:author="challenge.author"
                        v-bind:solved="challenge.solved">
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
                        v-for="challenge in steganographyChallenges" :key="challenge.points"
                        v-bind:points="challenge.points"
                        v-bind:catagory="challenge.catagory"
                        v-bind:name="challenge.name"
                        v-bind:hint="challenge.hint"
                        v-bind:author="challenge.author"
                        v-bind:solved="challenge.solved">
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
                        v-for="challenge in forensicsChallenges" :key="challenge.points"
                        v-bind:points="challenge.points"
                        v-bind:catagory="challenge.catagory"
                        v-bind:name="challenge.name"
                        v-bind:hint="challenge.hint"
                        v-bind:author="challenge.author"
                        v-bind:solved="challenge.solved">
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
                        v-for="challenge in csawChallenges" :key="challenge.points"
                        v-bind:points="challenge.points"
                        v-bind:catagory="challenge.catagory"
                        v-bind:name="challenge.name"
                        v-bind:hint="challenge.hint"
                        v-bind:author="challenge.author"
                        v-bind:solved="challenge.solved">
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
                        v-for="challenge in miscChallenges" :key="challenge.points"
                        v-bind:points="challenge.points"
                        v-bind:catagory="challenge.catagory"
                        v-bind:name="challenge.name"
                        v-bind:hint="challenge.hint"
                        v-bind:author="challenge.author"
                        v-bind:solved="challenge.solved">
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
                        v-for="challenge in physicalChallenges" :key="challenge.points"
                        v-bind:points="challenge.points"
                        v-bind:catagory="challenge.catagory"
                        v-bind:name="challenge.name"
                        v-bind:hint="challenge.hint"
                        v-bind:author="challenge.author"
                        v-bind:solved="challenge.solved">
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

export default {
  name: 'challenges',
  components: {
    'challenge-card': ChallengeCard
  },
  data () {
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
      CSAWChallenges: [],
      miscChallenges: [],
      physicalChallenges: []
    }
  },
  mounted () {
    this.getChallenges()
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
    }
  }
}
</script>

<style>
h2{
    color: #dfdfd5;
}

.container {
    background: #27282A
}

table {
    border:none;
    border-collapse: collapse;
}

table td {
    border-left: 1px solid #000;
    border-right: 1px solid #000;
}

table td:first-child {
    border-left: none;
}

table td:last-child {
    border-right: none;
}

/*container {
    background-image:url(require);
    background-position:center -75%
}*/
</style>
