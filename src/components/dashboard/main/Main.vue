<template>
    <div class="main">
        <h2>Dashboard</h2>
        <app-summary></app-summary>
    </div>
</template>

<script>
import Summary from './Summary.vue'
export default {
    name:'Main',
    components:{
      appSummary:Summary
    }
}
</script>

<style>
  .main
  {
    margin: 52px 24px 0px;
    position: relative;
  }
</style>