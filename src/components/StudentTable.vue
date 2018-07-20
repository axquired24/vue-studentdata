<template>
  <div class="content">
      <HeaderTitle title="Vue Table Data" description="Lorem ipsum description"></HeaderTitle>
      <TableBase :isLoading="isLoading" :vheads="table.heads" :vrows="table.rows"></TableBase>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import lodash from 'lodash'
import HeaderTitle from './layouts/HeaderTitle'
import TableBase from './base/TableBase'

var _ = require('lodash');

export default {
    name: 'StudentTable',
    components: {
        TableBase,
        HeaderTitle
    },
    data: function () {
        return {
            // dataUrl: 'https://my.api.mockaroo.com/vue-dummy.json',
            dataUrl: "https://api.myjson.com/bins/8vm42",
            isLoading: true,
            table: {
                heads: ['Name', 'City', 'Email'],
                rows: []
            }
        }
    },
    mounted() {
        this.loadTable();
    },
    methods: {
        loadTable: function () {
            const vm = this;
            this.setTableLoading();
            axios.get(this.dataUrl)
            .then(response => {
                const studentRows = response.data;
                vm.table.rows = _.map(studentRows, function(m) {
                    let name = "<a href='#/student-dt?id="+m.id+"'>"+m.name+"</a>"
                    return [name, m.city, m.email]
                });
                vm.setTableVisible();
            }).catch(error => {
                console.log(error);
            })
        },
        setTableVisible: function () {
            this.isLoading = false;
        },
        setTableLoading: function () {
            this.isLoading = true;
        }
    }
}
</script>

<style scoped>
    .tableLoading {
        margin: 30px 0;
    }
</style>
