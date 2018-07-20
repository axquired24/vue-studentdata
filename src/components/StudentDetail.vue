<template>
  <div class="content">
      <HeaderTitle title="Student Detail" description="Lorem ipsum description" withBackBtn></HeaderTitle>
      <div v-if="rows.length > 0">
        <DetailBase label="Student ID" :value="getUrlQuery('id')"></DetailBase>
        <DetailBase v-for="(r, index) in rows" :label="r.label" :value="r.value" :key="index"></DetailBase>
      </div>
      <h3 align="center" v-else>Loading...</h3>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import lodash from "lodash";
import HeaderTitle from "./layouts/HeaderTitle";
import DetailBase from "./base/DetailBase";

var _ = require("lodash");

export default {
  name: "StudentDetail",
  components: {
    HeaderTitle,
    DetailBase
  },
  data: function() {
    return {
      dataUrl: "https://api.myjson.com/bins/qz6wi",
      rows: []
    };
  },
  mounted() {
    this.loadStudent(this.getUrlQuery("id"));
  },
  methods: {
    getUrlQuery: function(key) {
      let val = this.$route.query[key];
      return val ? val : null;
    },
    loadStudent: function(id) {
      const vm = this;
      axios
        .get(this.dataUrl)
        .then(response => {
          let rows = response.data;
          rows = [
            { label: "Name", value: rows.name },
            { label: "City", value: rows.city },
            { label: "Email", value: rows.email },
            { label: "Created at", value: rows.created_at }
          ];
          vm.rows = rows;
        })
        .catch(error => {
          console.log(error);
        });
    },
    capitalize: function(str) {
      const word = [];
      for (let char of str.split(" ")) {
        word.push(char[0].toUpperCase() + char.slice(1));
      }
      return word.join(" ");
    }
  }
};
</script>

<style scoped>
</style>
