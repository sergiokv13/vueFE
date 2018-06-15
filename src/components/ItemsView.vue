<template>
  <div>
      <h1>Items</h1>
      <CheckStatus/>
  </div>
</template>

<script>
import CheckStatus from '@/components/CheckStatus'
export default {
  name: 'ItemsView',
  components: {
    'CheckStatus': CheckStatus
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
