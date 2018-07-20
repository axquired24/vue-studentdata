<template>
  <div class="content">
      <HeaderTitle title="Vue Table Data" description="Lorem ipsum description"></HeaderTitle>
      <DetailBase label="Nama" key="name" value="Albert Septiawan"></DetailBase>

    <!-- TableData -->
    <h3 align="center" class="tableLoading" v-if="! isShow.tableData">Loading ...</h3>
    <table class="table table-responsive table-hover" v-if="isShow.tableData">
        <thead>
            <th>#</th>
            <th>Name</th>
            <th>City</th>
            <th>Email</th>
        </thead>
        <tbody>
            <tr v-for="student in students" :key="student.id">
                <td>{{ student.id }}</td>
                <td>
                    <a href="#" v-on:click="showStudent(student)">
                        {{ student.name }}
                    </a>
                </td>
                <td>{{ student.city }}</td>
                <td>{{ student.email }}</td>
            </tr>
        </tbody>
    </table>

    <!-- TableDetail -->
    <a href="#" class="btn btn-default" v-on:click="showTableData()" v-if="isShow.tableDetail"><i class="fa fa-chevron-left"></i> Back</a>
    <TableDetail student="student" v-if="isShow.tableDetail"></TableDetail>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import TableDetail from '@/components/TableDetail'
import HeaderTitle from './layouts/HeaderTitle'
import DetailBase from './base/DetailBase'

export default {
    name: 'TableData',
    components: {
        TableDetail,
        DetailBase,
        HeaderTitle
    },
    data: function () {
        return {
            dataUrl: 'https://my.api.mockaroo.com/vue-dummy.json',
            student: {},
            students: [],
            isShow: {
                tableData: false,
                tableDetail: false,
                loading: true
            }
        }
    },
    created() {
        this.showTableData();
    },
    methods: {
        showStudent: function(student) {
            this.student = student;
            this.isShow.tableData = false;
            this.isShow.tableDetail = true;
        },
        showTableData: function () {
            const vm = this;
            this.isShow.tableDetail = false;
            this.isShow.loading = true;
            axios.get(this.dataUrl, {
                headers: {
                    'X-API-Key': '6c398fb0'
                }
            }).then(response => {
                vm.students = response.data;
                vm.visTableData();
            }).catch(error => {
                console.log(error);
            })
        },
        visTableData: function () {
            this.isShow.loading = false;
            this.isShow.tableData = true;
        }
    }
}
</script>

<style scoped>
    .tableLoading {
        margin: 30px 0;
    }
</style>
