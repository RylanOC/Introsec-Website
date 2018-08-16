
<template>
        <b-card
            style="max-width: 90px; min-width: 90px; height: 85px;"
            v-if="solved"
            v-bind="{
            }"
                bg-variant='success'
                class="text-center"
                @click="show">
                
            <h3 class="card-text"> {{ points }}</h3>
        </b-card>

        <b-card
            style="max-width: 95px; min-width: 95px; height: 85px;"
            v-else
            v-bind="{
            }"
                bg-variant='light'
                class="text-center"
                @click="show">
            <h3 class="card-text"> {{ points }}</h3>
        </b-card>
</template>

<script>
import swal from 'sweetalert2'
import ChallengeService from '@/services/ChallengeService'

export default {
  props: [
    'points',
    'catagory',
    'name',
    'hint',
    'author',
    'solved',
    'id'
  ],
  methods: {
    async checkFlag (flag, id, sub) {
      var response = await ChallengeService.verifyFlag({
        _id: id,
        user_flag: flag,
        user_id: sub
      })

      var valid = response.data.valid
      if (valid === 0) {
        this.$parent.$emit('recalculate_solved')
      } else {
        this.$parent.$emit('invalid_flag')
      }
      return valid
    },
    show () {
      var authenticated = false
      var user = localStorage.getItem('profile')
      if (typeof user !== 'undefined' && user != null) {
        authenticated = true
      }

      // If the user is logged in, give them a field to submit a flag
      if (authenticated) {
        swal({
          title: this.name,
          html: this.hint,
          input: 'text',
          inputAttributes: {
            autocapitalize: 'off'
          },
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Submit',
          footer: 'Challenge by ' + this.author,
          preConfirm: (flag) => {
            var user = JSON.parse(localStorage.getItem('profile'))
            this.checkFlag(flag, this.id, user.sub)
          }
        })
      // If the user is not logged in, show an alert with no button/field
      } else {
        swal({
          title: this.name,
          html: this.hint,
          inputAttributes: {
            autocapitalize: 'off'
          },
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          footer: 'Challenge by ' + this.author
        })
      }
    }
  }
}
</script>

<style>
  .text-center {
    cursor: pointer;
  }
</style>
