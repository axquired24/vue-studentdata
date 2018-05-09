<template>
  <div id="app">
    <div class="container">
      <!-- Top Logo -->
      <div align="center" class="row">
        <img src="./assets/logo.png">
      </div>

      <!-- Main Layout -->
      <div class="row">
        <!-- Main Sidebar -->
        <div class="col-md-3">
          <SideNav></SideNav>
        </div>
        <!-- END Main Sidebar -->

        <!-- Main Content -->
        <div class="col-md-9">
          <router-view/>
        </div>
        <!-- END Main Content -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </div>
  <!-- /#App -->
</template>

<script>
/* eslint-disable */
import SideNav from '@/components/layouts/SideNav'

export default {
  name: 'App',
  components: {
    SideNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
