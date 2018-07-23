<template>
  <div>
    <HeaderTitle title="Vue Profile!" description="Describe yourself"></HeaderTitle>
    <SelectBoxStudent :kelas="kelas"></SelectBoxStudent>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import lodash from 'lodash'
import HeaderTitle from './layouts/HeaderTitle'
import SelectBoxStudent from './core/SelectBoxStudent'

function KelasM(id, name) {
  return {id: id, name: name}
}

export default {
  name: 'Profile',
  components: {
    HeaderTitle, SelectBoxStudent
  },
  data () {
    return {
      kelas: KelasM(6, "NamKelas")
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
