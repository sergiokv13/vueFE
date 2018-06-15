<template>
  <div>
    <h2>{{truck_name}}</h2>
    <template v-if="loading">
      <Loader/>
    </template>
    <template v-else>
      <table id="inventory_table" class="table table-bordered text-left table-hover">
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
    </template>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
export default {
  name: 'TechInventory',
  components: {
    'Loader': Loader
  },
  props: [
    'locationId',
    'truck_name'
  ],
  data() {
    return {
      items: '',
      loading: true
    }
  },
  updated () {
    if (this.locationId != '')
    {
      this.loading = false
    this.$http
      .get('http://localhost:3000/inventory/get?location_id=' + this.locationId)
      .then(response => {
        this.loading = false
        this.items = response.data.data
        this.$nextTick(() => {
          $('#inventory_table').DataTable()
        })
      })
    }
   
  },
  created () {
    if (this.locationId != '')
    {
       this.response = ''
    this.$http
      .get('http://localhost:3000/inventory/get?location_id=' + this.locationId)
      .then(response => {
         this.response = response
        this.items = response.data.data
        this.$nextTick(() => {
          $('#inventory_table').DataTable()
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
