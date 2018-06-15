<template>
  <div>
    <h1>Local Techs</h1>
    <span v-if="techs">
      <table id="techs_table" class="table table-bordered text-left table-hover">
        <thead>
          <tr>
            <th>Tech/Truck</th>
            <th>Location id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tech in techs">
            <th>{{tech.display_name}}</th>
            <th>{{tech.location_pk}}</th>
            <th>
              <router-link :to="'/Inventory/' + tech.location_pk + '/' + tech.display_name" 
              class="nav-link">Inventory</router-link>
            </th>
          </tr>
        </tbody>
      </table>
    </span>
    <span v-else>
      <Loader/>
    </span>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
export default {
  name: 'TechsView',
  components: {
    'Loader': Loader
  },
  data() {
    return {
      techs: ''
    }
  },
  mounted () {
    this.$http
      .get('http://localhost:3000/local_techs/get?employee_id=' + this.currentUser.userId)
      .then(response => (this.techs = response.data.data))
  },
  updated () {
    $('#techs_table').DataTable({
            "aLengthMenu": [[5, 10, 50, -1], [5, 10, 50, "All"]],
            "iDisplayLength": 5
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
