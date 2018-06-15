<template>
  <div>
    <div v-if="this.isAuthenticated">
      <h1>Inventory</h1>
        <select v-model="selectedTech">
          <option disabled v-bind:value="{locationId: '',displayName: ''}">
            Select one
          </option>
          <option selected 
                  v-bind:value="{locationId: this.currentUser.locationId,
                                  displayName: 'My Truck'}">
            My truck
          </option>
          <option v-for="tech in techs"
                  v-bind:value="{locationId: tech.location_pk, 
                                  displayName: tech.display_name}">
            {{ tech.display_name }}
          </option>
        </select>
        <TechInventory v-bind:locationId="selectedTech.locationId" v-bind:truck_name="selectedTech.displayName"/>
    
    </div>
    <div v-else="this.isAuthenticated">
      <h1>Please login.</h1>
    </div>
  </div>
</template>

<script>
  import TechInventory from '@/components/TechInventory'
  export default {
    name: 'InventoryView',
    components: {
      'TechInventory': TechInventory
    },
    data() {
      return {
        techs: '',
        selectedTech: {
          locationId: '',
          displayName: ''
        }
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
