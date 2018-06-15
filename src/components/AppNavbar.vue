<template>
  <div id="primary-nav">  
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Inventory FE</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/Inventory" class="nav-link">Inventory</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/techs" class="nav-link">Techs</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/items" class="nav-link">Items</router-link>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <li>
            <template v-if="this.isAuthenticated"> 
                <button v-on:click="logoutUser()" class="dropdown-item logout-button">Logout</button>
            </template>
            <template v-else="this.isAuthenticated">
                <router-link to="/login" class="nav-link">Login</router-link>
            </template>
          </li>
        </ul>

      </div>
    </nav>  
  </div>
</template>

<script>
export default {
  name: 'AppNavbar'
}
</script>

<style>
  .logout-button{
    color:white !important;
  }
  .logout-button:hover{
    color:grey !important;
  }

</style>