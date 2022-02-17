<template>
  <!-- start login form -->
  <div class="login_section login-height">
    <!-- Login form -->
    <div class="login-layout">
      <div class="bg-image"></div>
      <div class="login-form-position">
        <div class="login-form">
          <div class="web-logo"><img src="../../assets/logo.jpg" /></div>
          <p>Please login to your account</p>
          <form class="form-style" @submit.prevent="handleLogin">
            <div>
              <label for="email">Email or Phone</label>
              <div
                :class="{
                  'input-field': true,
                  error: handleValidation('email'),
                }"
              >
                <input
                  type="text"
                  name="email"
                  autocomplete="off"
                  v-model="email"
                />
                <i class="fas fa-envelope-open-text"></i>
              </div>
            </div>
            <div>
              <label for="password">Password</label>
              <div
                :class="{
                  'input-field': true,
                  error: handleValidation('password'),
                }"
              >
                <input
                  :type="hidePassword ? 'password' : 'text'"
                  name="password"
                  v-model="password"
                  autocomplete="off"
                />
                <i
                  :class="{
                    'fas fa-eye-slash': hidePassword,
                    'fas fa-eye': !hidePassword,
                  }"
                  @click="hidePassword = !hidePassword"
                ></i>
              </div>
            </div>
            <div class="forgot">
              <a href="#" class="link">Forgot Password</a>
            </div>
            <button
              type="submit"
              :disabled="disableButton"
              v-html="handleButtonClick"
            >
              Login
            </button>
          </form>
          <div class="register-account">
            <p>
              Don't have an account?
              <a
                href="javascript:void(0)"
                class="link"
                @click="$emit('togglePage')"
                >Create an Account</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end login form -->
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  emits: ["togglePage"],
  data: () => {
    return {
      hidePassword: true,
      email: null,
      password: null,
      submitClick: false,
      disableButton: false,
      time: new Date(),
    };
  },
  computed: {
    handleValidation() {
      return (data) => {
        if (!this[data] && this.submitClick) {
          return true;
        }
        return false;
      };
    },
    handleButtonClick() {
      return this.disableButton ? `<div class="loader"></div>` : "Register";
    },
  },
  methods: {
    async handleLogin() {
      this.disableButton = true;
      this.submitClick = true;
      if (!this.email || !this.password) {
        this.disableButton = false;
        return 0;
      }

      const { data } = await axios.post("http://localhost:3000/login", {
        email: this.email,
        password: this.password,
      });

      if (data.status != 200 && data.type == "error") {
        this.$vToastify.error(data.msg);
      } else if (data.status != 200 && data.type == "failed") {
        this.$vToastify.warning(data.msg);
      } else if (data.status == 200 && data.type == "success") {
        localStorage.setItem("token", data.token);
        this.$store.dispatch("SET_TOKEN", data.token);
        this.$store.dispatch("TRACK_LOGIN");
        const token = this.$store.getters.getToken;
        if (token) {
          this.$router.push("/dashboard");
        }
      }
      this.disableButton = false;
    },
  },
};
</script>
