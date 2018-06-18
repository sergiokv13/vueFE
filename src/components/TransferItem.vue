<template>
  <div>
    <h3>Transfer item</h3>
    <input v-model="macAddress" placeholder="Mac address">
    <br>
   <select v-model="locationId">
      <option  disabled v-bind:value="''">
        Select one
      </option>
      <option v-for="tech in techs"
              v-bind:value="tech.location_pk">
        {{ tech.display_name }}
      </option>
    </select>
    <br>
    <button class="btn btn-success" v-on:click="transferItem()">Place item</button>
  </div>
</template>

<script>

export default {
  name: 'TransferItem',
  data() {
    return {
      techs: '',
      macAddress: '001DCDC647B0',
      locationId: ''
    }
  },
  mounted () {
    this.$http
      .get('http://localhost:3000/local_techs/get?employee_id=' + this.currentUser.userId)
      .then(response => (this.techs = response.data.data))
  },
  methods: {
    transferItem: function(){
      this.$http
        .post('http://localhost:3000/inventory/transfer_item?item_mac=' + this.macAddress + '&location_id='+ this.locationId)
        .then(
          response => ( 
          alert(response.data.data ? response.data.data : "The item is already in use.")
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
