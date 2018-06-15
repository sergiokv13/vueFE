<template>
  <div>
    <h2>{{truck_name}}</h2>
    <table class="table table-bordered text-left table-hover">
      <thead>
        <tr>
          <th>Vend code</th>
          <th>Description</th>
          <th>Serial</th>
          <th>Status</th>
          <th>Truck</th>
          <th>Last location</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items">
          <th>{{item.prd_vend_code}}</th>
          <th>{{item.prd_description}}</th>
          <th>{{item.serial}}</th>
          <th>{{item.status}}</th>
          <th>{{item.ivl_description}}</th>
          <th>{{item.last_location}}</th>
          <th>{{item.bmh_start_date}}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TechInventory',
  props: [
    'locationId',
    'truck_name'
  ],
  data() {
    return {
      items: '',
    }
  },
  updated () {
    this.$http
      .get('http://localhost:3000/inventory/get?location_id=' + this.locationId)
      .then(response => (this.items = response.data.data))
  },
  created () {
    this.$http
      .get('http://localhost:3000/inventory/get?location_id=' + this.locationId)
      .then(response => (this.items = response.data.data))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
