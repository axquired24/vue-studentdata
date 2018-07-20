<template>
  <div>
    <h1>
      <a v-if="withBackBtn" href="javascript:history.back()"><i class="fa fa-chevron-left"></i></a>
      {{ title }} <br>
      <!-- check if any description value -->
      <small v-if="description">{{ description }}</small>
    </h1>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'HeaderTitle',
  props: {
    title: {
      type: String,
      required: true
      // default: "Nomnom"
    },
    description: {
      type: String
    },
    withBackBtn: Boolean
  },
  data: function () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
small {
    font-size: 0.5em;
  }
</style>
