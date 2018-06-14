<template>
  <div v-if="this.isAuthenticated">
    <div class="dashboard">
     <h1>This is the main page.</h1>
    </div>
  </div>
  <div v-else="this.isAuthenticated">
    <h1>Please login.</h1>
  </div>
</template>

<script>
export default {
  name: 'AppDashboard'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
