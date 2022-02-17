<template>
  <!-- signup form -->
  <div class="login_section signup_section">
    <div class="login-layout">
      <div class="bg-image"></div>
      <div class="login-form-position">
        <div class="login-form">
          <div class="web-logo size"><img src="../../assets/logo.jpg" /></div>
          <form class="form-style" @submit.prevent="registeredData">
            <div>
              <label for="name">Full Name</label>
              <div
                :class="{
                  'input-field': true,
                  error: handleValidation('name'),
                }"
              >
                <input type="text" name="name" v-model="formValue.name" />
                <i class="fas fa-user"></i>
              </div>
            </div>
            <div>
              <label for="DOB">Date of Incorporation</label>
              <div
                :class="{
                  'input-field': true,
                  error: handleValidation('DOB'),
                }"
              >
                <input
                  type="date"
                  name="DOB"
                  class="full-width"
                  v-model="formValue.DOB"
                />
              </div>
            </div>
            <div>
              <label for="email">Email</label>
              <div
                :class="{
                  'input-field': true,
                  error: handleValidation('email'),
                }"
              >
                <input type="text" name="email" v-model="formValue.email" />
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
                  v-model="formValue.password"
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

            <div>
              <label for="password">Confirm Password</label>
              <div
                :class="{
                  'input-field': true,
                  error: handleValidation('confirmPassword'),
                }"
              >
                <input
                  :type="hideConfirmPassword ? 'password' : 'text'"
                  name="password"
                  v-model="formValue.confirmPassword"
                />
                <i
                  :class="{
                    'fas fa-eye-slash': hideConfirmPassword,
                    'fas fa-eye': !hideConfirmPassword,
                  }"
                  @click="hideConfirmPassword = !hideConfirmPassword"
                ></i>
              </div>
            </div>
            <button type="submit" :disabled="disableButton" v-html="handleButtonClick"></button>
          </form>
          <div class="register-account">
            <p>
              Already have an account?
              <a
                href="javascript:void(0)"
                class="link"
                @click="$emit('togglePage')"
                >Login</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end Signup form -->
</template>

<script>
import axios from "axios";
export default {
  name: "Signup",
  emits: ["togglePage"],
  data: () => {
    return {
      hidePassword: true,
      hideConfirmPassword: true,
      submitClick: false,
      disableButton: false,
      formValue: {
        name: null,
        DOB: null,
        email: null,
        password: null,
        confirmPassword: null,
      },
    };
  },
  computed: {
    handleValidation() {
      return (data) => {
        if (!this.formValue[data] && this.submitClick) {
          return true;
        }
        return false;
      };
    },
    handleButtonClick()
    {
       return this.disableButton?`<div class="loader"></div>`:'Register'
    }
  },
  methods: {
    async registeredData() {
      this.disableButton = true;
      this.submitClick = true;
      if (this.formValue.confirmPassword && this.formValue.password) {
        if (this.formValue.confirmPassword !== this.formValue.password) {
          this.confirmPassword();
          this.formValue.confirmPassword = null;
          this.disableButton = false;
          return 0;
        }
      }
      for (let key in this.formValue) {
        if (!this.formValue[key]) {
          this.disableButton = false;
          return 0;
        }
      }

      const getValue = await axios.post(
        "http://localhost:3000",
        this.formValue
      );
      let id = this.$vToastify.loader("Please Wait...");
      setTimeout(() => {
        this.$vToastify.stopLoader(id);
        if (getValue.status === 201) {
          this.$vToastify.success("Registration Completed");
          this.formValue = {
            name: null,
            DOB: null,
            email: null,
            password: null,
            confirmPassword: null,
          };
          this.submitClick = false;
          this.$emit("togglePage");
        } else {
          const { data } = getValue;
          this.$vToastify.error(data.msg);
        }
           this.disableButton = false;
      }, 3000);  
    },
    confirmPassword() {
      this.$vToastify.error("Confirm password not matched !");
    },
  },
};
</script>
