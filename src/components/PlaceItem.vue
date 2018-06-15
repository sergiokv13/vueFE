<template>
  <div>
    <h3>Place item in my truck</h3>
    <input v-model="macAddress" placeholder="Mac address">
    <button class="btn btn-success" v-on:click="checkMacStatus()">Place item</button>
  </div>
</template>

<script>
export default {
  name: 'PlaceItem',
  data() {
    return{
      macAddress: '4844878FCA26'    
    }
  },
  methods: {
    checkMacStatus: function(){
      this.$http
      .get('http://localhost:3000/inventory/place_item?item_mac=' + this.macAddress + '&employee_id=828' + this.currentUser.userId)
      .then(
        response => ( 
          alert(response.data.data ? response.data.data : "The item is already in your truck.")
        ))
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
