<template>
  <div id="app">
    <AppNavbar/>
    <div class="container text-center">
      <div class="jumbotron">
        <router-view/>
      </div>
    </div>
    <Loader/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  .jumbotron{
    margin-top: 5%;
  }
</style>
