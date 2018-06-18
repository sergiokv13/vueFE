<template>
  <div>
    <h3>Place item in my truck</h3>
    <input v-model="macAddress" placeholder="Mac address">
    <template v-if="loading">
      <Loader/>
    </template>
    <template v-else>
      <button class="btn btn-success" v-on:click="checkMacStatus()">Place item</button>  
    </template>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
export default {
  name: 'PlaceItem',
    components: {
      'Loader': Loader
    },
  data() {
    return{
      macAddress: '4844878FCA26',
      loading: false
    }
  },
  methods: {
    checkMacStatus: function(){
      this.loading = true;
      this.$http
      .get('http://localhost:3000/inventory/place_item?item_mac=' + this.macAddress + '&employee_id=828' + this.currentUser.userId)
      .then(
        response => {
            this.loading = false
          alert(response.data.data ? response.data.data : "The item is already in your truck.")
        })
      .catch(error=> {
          this.loading = false;
        alert("Technical debt - Retrieve error message")
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
