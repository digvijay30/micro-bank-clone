<template>
  <div class="container flex-1">
    <app-login :style="tracklogin" @togglePage="registerPage"></app-login>
    <app-signup :style="tracksignup" @togglePage="registerPage"></app-signup>
  </div>
</template>

<script>
import Login from "../../components/login/Login.vue";
import Signup from "../../components/login/Signup.vue";
export default {
  name: "main",
  components: {
    appLogin: Login,
    appSignup: Signup,
  },
  data: () => {
    return {
      name: "adb",
      activepage: "login",
    };
  },
  methods: {
    registerPage() {
      this.activepage = this.activepage == "login" ? "register" : "login";
    },
  },
  computed: {
    tracklogin() {
      return { display: this.activepage == "login" ? "block" : "none" };
    },
    tracksignup() {
      return { display: this.activepage == "register" ? "block" : "none" };
    },
  },
};
</script>

<style>
@import "../../assets/styles/login-signup.css";
@import "../../assets/styles/responsive/login-signup-responsive.css";
</style>
