<template>
  <div class="login-form">
    <div v-if="this.isAuthenticated">
      <h1>Welcome</h1>
    </div>
    <div v-else="this.isAuthenticated" class="form-group">
      <label for="userId">User id</label>
      <input v-model="userIdField" class="form-control">
      <span class="text-danger">{{userIdError}}</span>
      <br>
      <label for="lcoationId">Location id</label>
      <input v-model="locationIdField" class="form-control">
      <span class="text-danger">{{locationIdError}}</span>
      <br>
      <button v-on:click="login" class="btn btn-success">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      locationIdField: '',
      userIdField: '',
      userIdError: '',
      locationIdError: ''
    }
  },
  methods: {
    login: function() {
      this.locationIdError = (!this.locationIdField) ? "can't be blank" : ""
      this.userIdError = (!this.userIdField) ? "can't be blank" : ""
      if (!this.locationIdError && !this.userIdError)
        this.loginUser(this.userIdField, this.locationIdField)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
