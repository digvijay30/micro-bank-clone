<template>
  <div class="dashboard">
    <app-header></app-header>
     <app-main></app-main>
    <app-footer></app-footer>
  </div>
</template>
<script>
import Header from "../dashboard/Header.vue";
import Footer from "../dashboard/Footer.vue";
import Main from './main/Main.vue';
export default {
  name: "Dashboard",
  components: {
    appHeader: Header,
    appFooter: Footer,
    appMain:Main
  }
};
</script>
<style>
.dashboard
 {
    background: #E5E5E5;
    font-family: "Open Sans", sans-serif;
 }
</style>
