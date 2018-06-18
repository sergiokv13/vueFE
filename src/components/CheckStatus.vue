<template>
  <div>
    <h3>Get item status</h3>
    <input v-model="macAddress" placeholder="Mac address">
    <template v-if="loading">
      <Loader/>
    </template>
    <template v-else>
      <button class="btn btn-success" v-on:click="checkMacStatus()" >Get status</button>
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
      .get('http://localhost:3000/inventory/check_mac_status?item_mac=' + this.macAddress)
      .then(
        response => {
          this.loading = false
          alert(response.data.data)
        }
      )
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
