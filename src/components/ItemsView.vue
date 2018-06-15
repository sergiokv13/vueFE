<template>
  <div>
      <h1>Items</h1>
      <CheckStatus/>
      <PlaceItem/>
  </div>
</template>

<script>
import CheckStatus from '@/components/CheckStatus'
import PlaceItem from '@/components/PlaceItem'
export default {
  name: 'ItemsView',
  components: {
    'CheckStatus': CheckStatus,
    'PlaceItem': PlaceItem
  },
  data() {
    return {
      techs: ''
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
