<template>
  <div>
    <div v-if="this.isAuthenticated">
      <h1>Local Techs</h1>
      <table class="table table-bordered text-left table-hover">
        <thead>
          <tr>
            <th>Tech/Truck</th>
            <th>Location id</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tech in techs">
            <th>{{tech.display_name}}</th>
            <th>{{tech.location_pk}}</th>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else="this.isAuthenticated">
      <h1>Please login.</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechsView',
  data() {
    return {
      techs: ''
    }
  },
  mounted () {
    this.$http
      .get('http://localhost:3000/local_techs/get?employee_id=' + this.currentUser.userId)
      .then(response => (this.techs = response.data.data))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
