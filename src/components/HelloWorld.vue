<template>
  <HeaderTitle title="Hello There!" description="Lorem ipsum description"></HeaderTitle>
</template>

<script>
/* eslint-disable */

import HeaderTitle from './layouts/HeaderTitle'

export default {
  name: 'HelloWorld',
  components: {
    HeaderTitle
  },
  data: function () {
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
