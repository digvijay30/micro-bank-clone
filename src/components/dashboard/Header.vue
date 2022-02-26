<template>
  <div class="header-container">
    <div class="header-top">
      <div class="menu-left">
        <div>
          <router-link to="/"
            ><img src="../../assets/logo.jpg" alt="logo"
          /></router-link>
        </div>
        <hr class="horizontal" />
        <div>
          <h2>{{ HandleCompany|upperCase }}</h2>
        </div>
      </div>
      <div class="menu-right">
        <div class="bell-notification"><i class="fas fa-bell"></i></div>
        <div class="profile-dropdown" @click="UpdateProfileStatus">
          <div class="profile">{{ shortName }}</div>
          <i
            :class="{
              'fas fa-sort-down': !isClickProfile,
              'fas fa-sort-up': isClickProfile,
            }"
          ></i>
        </div>

        <div class="dropdown-list" v-if="isClickProfile">
          <div class="user-details">
            <div
              class="user-profile"
              v-html="profile_pic ? profile_pic : shortName"
            ></div>
          </div>
          <div class="user-account-details">
            <div class="account-email">
              <h4>{{ userDetails.name }}</h4>
              <a :href="'mailto:' + handleEmail">{{ handleEmail }}</a>
            </div>

            <div class="list-profile-menu">
              <div class="border-t common-strip">
                <router-link to="/dashboard/profile" class="profile-link"
                  >profile</router-link
                >
              </div>
              <div class="border-b-t common-strip">
                <router-link to="/" class="profile-link">Settings</router-link>
              </div>
              <div class="common-strip" @click="logout">Logout</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      userDetails: null,
    };
  },
  filters:{
    upperCase(data)
    {
      return data.toString().toUpperCase();
    }
  },
  methods: {
    UpdateProfileStatus() {
      this.$store.dispatch("UPDATE_STATUS");
    },
    logout() {
      this.$store.dispatch("LOGOUT");
      this.$store.dispatch("TRACK_LOGIN");
      if (!this.$store.getters.getToken) {
        this.$router.push("/");
      }
    },
  },
  computed: {
    ...mapGetters({
      isClickProfile: "getClickProfileStatus",
      userData: "getUserDetails",
    }),
    shortName() {
      const shortNameArray = this.userDetails.name.split(" ");
      let shortName = "";
      shortNameArray.forEach((element) => {
        let charName = element[0].toUpperCase();
        shortName += charName;
      });

      return shortName;
    },
    profile_pic()
    {
      if(this.userData.profile_img)
      {
        return `<img width='100%' height='100%' style='border-radius: 50%;' src='http://localhost:3000/profile/${this.userData.profile_img}' />`;
      }
      else
      {
        return false;
      }

    },
    HandleCompany() {
      const { company_name } = this.userData;
      return company_name;
    },
    handleEmail() {
      const { email } = this.userData;
      return email;
    },
  },
  created() {
    this.userDetails = this.$store.getters.getUserDetails;
    this.$store.dispatch("TRACK_LOGIN");
  },
};
</script>
<style scoped>
@import "../../assets/styles/Header.css";
@import "../../assets/styles/responsive/header-responsive.css";
</style>
