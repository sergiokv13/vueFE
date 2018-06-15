<template>
  <div>
    <h1>Inventory</h1>
    <span v-if="techs">
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
      <template v-if="showRouteParam">
        {{$route.params.displayName}} - {{$route.params.locationId}}
        <TechInventory v-bind:locationId="$route.params.locationId" v-bind:truck_name="$route.params.displayName"/>
        
      </template>
      <template v-else="showRouteParam">
        <TechInventory v-bind:locationId="selectedTech.locationId" v-bind:truck_name="selectedTech.displayName"/>
      </template>
    </span>
    <span v-else>
      <Loader/>
    </span>

  </div>
</template>

<script>
  import TechInventory from '@/components/TechInventory'
  import Loader from '@/components/Loader'
  export default {
    name: 'InventoryView',
    components: {
      'TechInventory': TechInventory,
      'Loader': Loader
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
    computed: {
      showRouteParam: function(){
        return (this.$route.params.locationId && this.selectedTech.locationId == '')
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
