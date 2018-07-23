<template>
  <div>
      <span v-if="isLoading">Loading...</span>
      <select v-if="! isLoading" v-model="model">
        <option v-for="o in opt" :value="o" :key="o.val">{{ o.label }}</option>
    </select>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import lodash from 'lodash'

const baseUrl = "https://api.myjson.com/bins/8vm42";

export default {
  name: 'SelectBoxStudent',
  props: {
      kelas: {
          type: Object,
          required: true
      }
  },
  components: {
  },
  data () {
    return {
      dataUrl: baseUrl,
      isLoading: true,
      opt: [],
      model: {}
    }
  },
  watch: {
      kelas: {
            handler(newVal, oldVal) {
                console.log("Changed Val: " + JSON.stringify(newVal));
                this.loadKelas(newVal.id);
            },
            // used to watch all element inside, watch computed value to inspect spesific value
            // https://stackoverflow.com/questions/42133894/vue-js-how-to-properly-watch-for-nested-data
            deep: true
      }
  },
  mounted() {
    this.loadKelas();
  },
  methods: {
    loadKelas: function(kelasId = this.kelas.id) {
        this.isLoading = true
        this.dataUrl = baseUrl + "?kelasId=" + kelasId
        const vm = this
            axios.get(this.dataUrl)
            .then(response => {
                const studentRows = response.data;
                vm.opt = _.map(studentRows, function(m) {
                    return {val: m.id, label: m.name}
                });
                this.isLoading = false;
                vm.model = vm.opt[0];
            }).catch(error => {
                console.log(error);
                this.isLoading = false;
            })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
