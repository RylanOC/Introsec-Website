
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
      }
      return valid
    },
    show () {
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
    }
  }
}
</script>

<style>
  .text-center {
    cursor: pointer;
  }
</style>
