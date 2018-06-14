import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    locationId: 'Not set',
    userId: 'Not set',
    userAuthenticated: false
  }
})