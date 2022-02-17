<template>
  <div id="app">
    <router-view :key="$router.name"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$store.dispatch("TRACK_LOGIN");
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background: #e5e5e5;
}
</style>
