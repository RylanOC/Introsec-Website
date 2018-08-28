<template>
  <div class="container">
    <br>
      <table class="table table-striped">
      	<thead>
      		<tr>
      			<th scope="col"> # </th>
      			<th scope="col"> User </th>
      			<th scope="col"> Points </th>
      		</tr>
      	</thead>
        <tbody>
            <tr v-for="(user, index) in users">
            	<th scope="row">
            		<h4> {{index + 1}} </h4>
            	</th>
                <td>
              		<h4> {{user.user_name}} </h4>
                </td>
                <td>
                	<h4> {{user.points}} </h4>
                </td> 
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import UserService from '../services/UserService.js'
import Points from './UserPoints.vue'

export default {
  name: 'scoreboard',
  components: {
    'points': Points
  },
  data () {
    return {
      users: []
    }
  },
  mounted () {
    this.getUsers()
  },
  methods: {
    async getUsers () {
      var response
      response = await UserService.getUsers()
      var usersUnsorted = response.data.users
      this.users = usersUnsorted.sort(this.comparePoints)
      console.log(this.users)
    },
    comparePoints (user1, user2) {
      return (user1.points < user2.points)
    }
  }
}
</script>

<style>
	.table-striped > tbody > tr:nth-child(2n+1) > td, .table-striped > tbody > tr:nth-child(2n+1) > th {
	   background-color: #3C3D3E;
	}

	.table td {
		border: none !important; 
		border-right: none !important;
		border-left: none !important;
	}

	.table th {
		border: none !important; 
		border-right: none !important;
		border-left: none !important;
	}
</style>
