<template>
  <div>
    <h2>{{truck_name}}</h2>
    <span v-show="loading">
      <Loader/>
    </span>
    <span v-show="!loading">
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
    </span>
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
  methods: {
    fireLoading: function(){
      if (this.locationId != '')
      {
      this.loading = true
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
    }
  },
  created() {
    this.fireLoading()
  },
  watch: {
    'locationId': function(val,oldVal) {
      this.fireLoading()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
