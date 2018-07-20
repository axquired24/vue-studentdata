<template>
  <div>
    <h3 align="center" class="tableLoading" v-if="isLoading">Loading ...</h3>
    <table class="table table-responsive table-hover" v-if="! isLoading">
        <thead>
            <th> # </th>
            <th v-for="(t, index) in vheads" :key="index">{{ t }}</th>
        </thead>
        <tbody>
            <tr v-for="(ds, indexDs) in vrows" :key="indexDs">
                <td>{{ indexDs + 1 }}</td>
                <td v-for="(d, indexD) in ds" :key="indexD" v-html="d"></td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
/* eslint-disable */
import DetailBase from './DetailBase'

export default {
    name: 'TableBase',
    components: {
        DetailBase
    },
    props: [
        'isLoading',
        'vheads', // array of table header for each column :: ['no', 'name', 'etc']
        'vrows' // array of array data :: [[1,2,3], [4,5,6]]
        // withOption: true/false
    ],
    data: function () {
        return {
        }
    },
    methods: {
        // showAlert: function(msg) {
        //     alert(msg);
        // }
    }
}
</script>

<style scoped>
    .tableLoading {
        margin: 30px 0;
    }
</style>
