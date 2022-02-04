<template>
  <!-- start login form -->
  <div class="login_section login-height">
    <!-- Login form -->
    <div class="login-layout">
      <div class="bg-image"></div>
      <div class="login-form-position">
        <div class="login-form">
          <div class="web-logo"><img src="../../assets/logo.jpg"/></div>
          <p>Please login to your account</p>
          <form class="form-style">
            <div>
              <label for="email">Email or Phone</label>
              <div class="input-field">
                <input type="text" name="email" />
                <i class="fas fa-envelope-open-text"></i>
              </div>
            </div>
            <div>
              <label for="password">Password</label>
              <div class="input-field">
                <input :type="hidePassword?'password':'text'" name="password" />
                <i :class="{'fas fa-eye-slash':hidePassword,'fas fa-eye':!hidePassword}" @click="hidePassword=!hidePassword"></i>
              </div>
            </div>
            <div class="forgot">
              <a href="#" class="link">Forgot Password</a>
            </div>
            <button type="submit">Login</button>
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
export default {
  name: "Login",
  emits: ["togglePage"],
  data:()=>{
      return {
          hidePassword:true
      }
  }
};
</script>
