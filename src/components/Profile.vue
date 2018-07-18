<template>
  <HeaderTitle title="Vue Profile!" description="Describe yourself"></HeaderTitle>
</template>

<script>
/* eslint-disable */
import HeaderTitle from './layouts/HeaderTitle'

export default {
  name: 'Profile',
  components: {
    HeaderTitle
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
