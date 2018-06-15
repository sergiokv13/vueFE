<template>
  <div>
    <h3>Get item status</h3>
    <input v-model="macAddress" placeholder="Mac address">
    <button class="btn btn-success" v-on:click="checkMacStatus()" >Get status</button>
  </div>
</template>

<script>
export default {
  name: 'TechInventory',
  data() {
    return{
      macAddress: '4844878FCA26'
    }
  },
  methods: {
    checkMacStatus: function(){
      this.$http
      .get('http://localhost:3000/inventory/check_mac_status?item_mac=' + this.macAddress)
      .then(
        response => (alert(response.data.data)),
      )
      .catch(error=> {
        alert("Technical debt - Retrieve error message")
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
