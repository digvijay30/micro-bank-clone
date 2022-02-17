<template>
   <div class="dashboard">
        <app-header></app-header>
        <app-main></app-main>
        <app-footer></app-footer>
    </div>  
</template>

<script>
import Header from '../dashboard/Header.vue'
import Footer from '../dashboard/Footer.vue'
import Main from '../profile/Profile.vue'

export default {
    name:'Profile',
    components:{
        appHeader:Header,
        appFooter:Footer,
        appMain:Main
    }
}
</script>

<style>
@import "../../assets/styles/Profiles.css";
</style>