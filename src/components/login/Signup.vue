<template>
  <!-- signup form -->
  <div class="login_section signup_section">
    <div class="login-layout">
      <div class="bg-image"></div>
      <div class="login-form-position">
        <div class="login-form">
           <div class="web-logo size"><img src="../../assets/logo.jpg"/></div>
          <form class="form-style">
            <div>
              <label for="name">Full Name</label>
              <div class="input-field">
                <input type="text" name="name" />
                <i class="fas fa-user"></i>
              </div>
            </div>
            <div>
              <label for="DOB">Date of Incorporation</label>
              <div class="input-field">
                <input type="date" name="DOB" class="full-width"/>
               
              </div>
            </div>
            <div>
              <label for="email">Email</label>
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

            <div>
              <label for="password">Confirm Password</label>
               <div class="input-field">
                <input :type="hideConfirmPassword?'password':'text'" name="password" />
                 <i :class="{'fas fa-eye-slash':hideConfirmPassword,'fas fa-eye':!hideConfirmPassword}" @click="hideConfirmPassword=!hideConfirmPassword"></i>
              </div>
            </div>
            <button type="submit">Register</button>
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
export default {
  name: "Signup",
  emits: ["togglePage"],
  data:()=>{
      return {
          hidePassword:true,
          hideConfirmPassword:true
      }
  }
};
</script>
