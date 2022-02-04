<template>
  <div class="header-container">
    <div class="header-top">
      <div class="menu-left">
        <div><img src="../../assets/logo.jpg" alt="logo" /></div>
        <hr class="horizontal" />
        <div><h2>ABC Pvt. Ltd.</h2></div>
      </div>
      <div class="menu-right">
        <div class="bell-notification"><i class="fas fa-bell"></i></div>
        <div class="profile-dropdown" @click="UpdateProfileStatus">
          <div class="profile">SJ</div>
          <i
            :class="{
              'fas fa-sort-down': !isClickProfile,
              'fas fa-sort-up': isClickProfile,
            }"
          ></i>
        </div>

        <div class="dropdown-list" v-if="isClickProfile">
          <div class="user-details">
            <div class="user-profile">PT</div>
          </div>
          <div class="user-account-details">
            <div class="account-email">
              <h4>Pramod Talwalkar</h4>
              <a href="javascript:void(0)">pramod.talwalkar@abc.com</a>
            </div>

            <div class="list-profile-menu">
              <div class="border-t common-strip">Edit profile</div>
              <div class="border-b-t common-strip">Settings</div>
              <div class="common-strip">Logout</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  methods:{
    UpdateProfileStatus()
    {
      this.$store.dispatch('UPDATE_STATUS');
    }
  },
  computed: {
    isClickProfile()
    {
    return this.$store.getters.getClickProfileStatus;
    }
  }
};
</script>
<style scoped>
  @import '../../assets/styles/Header.css';
  @import '../../assets/styles/responsive/header-responsive.css';
</style>
