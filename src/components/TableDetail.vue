<template lang="jade">
    .content
        h1 {{student.name}}
        table.table.table-hover.table-responsive
            tr
                td City:
                td {{student.city}}
            tr
                td Email:
                td {{student.email}}
            tr
                td Created Date:
                td {{student.created_at}}
</template>

<script>
/* eslint-disable */
export default {
  name: "TableDetail",
//   props: ['student'],
  data: function () {
      return {
        student: this.$TableData.$student
        //   student : {
        //       "id":1,
        //       "name":"Kristien Spores",
        //       "city":"Miribel",
        //       "email":"kspores0@mapquest.com",
        //       "created_at":"2018-01-21"
        //       }
      }
  }
}
</script>

