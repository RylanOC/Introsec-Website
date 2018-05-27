

<template>
  <div>
        <b-card 
            v-if="solved"
            v-bind="{ 
            }"
                bg-variant='success'
                class="text-center"
                @click="show=true">
            <h3 class="card-text"> {{ points }}</h3>
        </b-card>

        <b-card 
            v-else
            v-bind="{ 
            }"
                bg-variant='light'
                class="text-center"
                @click="show=true">
            <h3 class="card-text"> {{ points }}</h3>
        </b-card>

        <b-modal 
            v-model="show"
            v-bind="{title: name}">
            <b-container fluid>
                {{ hint }}
            </b-container>
            <div slot="modal-footer" class="w-100">
                <p class="float-left">Challenge by {{ author }}</p>
                <b-btn size="sm" 
                    class="float-right" 
                    @click="
                    show=false">
                Close
                </b-btn>
            </div>
        </b-modal>
    </div>
</template>

<script>
export default {
    props: [
        'points',
        'catagory',
        'name',
        'hint',
        'author',
        'solved'
        ],
  data () {
    return {
      //points: 0,
      //catagory: '',
      //name: '',
      //hint: '',
      //author: '',
      //solved: false,
      show: false,
    }
  }
}
</script>

<style>
  b-card {
    cursor: pointer;
  }
</style>
