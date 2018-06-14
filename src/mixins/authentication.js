import Vue from 'vue'

Vue.mixin({
  methods: {
    loginUser: function(userIdField,locationIdField) {
      this.$store.state.userId = userIdField
      this.$store.state.LocationId = locationIdField
      this.$store.state.userAuthenticated = true
    },
    logoutUser: function() {
      this.$store.state.userId = ''
      this.$store.state.LocationId = ''
      this.$store.state.userAuthenticated = false
    }
  },
  computed: {
    isAuthenticated: function() {
      return this.$store.state.userAuthenticated
    },
    currentUser: function() {
      return {
        userId: this.$store.state.userId,
        locationId: this.$store.state.LocationId 
        }
    }
  }
});