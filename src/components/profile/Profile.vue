<template>
   <div class="dashboard">
        <app-header></app-header>
        <p>a</p>
        <app-footer></app-footer>
    </div>  
</template>

<script>
import Header from '../dashboard/Header.vue'
import Footer from '../dashboard/Footer.vue'
export default {
    name:'Profile',
    components:{
        appHeader:Header,
        appFooter:Footer
    }
}
</script>

<style scoped>

</style>