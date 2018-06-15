<template>
  <div id="app">
    <AppNavbar/>
    <div class="container text-center">
      <div class="jumbotron">
        <div v-if="this.isAuthenticated">
          <router-view/>
        </div>
        <div v-else-if="showLogin">
          <router-view/>
        </div>
        <div v-else>
          <h1>Please login</h1>
        </div>
      </div>
    </div>
    <Loader/>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    showLogin: function() {
      return (this.$route.path == '/login')
    }
  }
}
</script>

<style>
  .jumbotron{
    margin-top: 5%;
  }
</style>
