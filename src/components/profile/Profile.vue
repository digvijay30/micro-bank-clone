<template>
  <div class="main">
    <h2>Edit Profiles</h2>
    <div class="profile-section">
      <div class="profile-content">
        <div class="profile-pic">
          <div class="image-view">
            <img
              :src="!images ? dummyImage : images"
              alt="images"
              :class="{ 'image-logo': true, 'image-size': images }"
            />
          </div>
          <div>
            <form enctype="multipart/form-data" @submit.prevent="handleUpdate">
              <div class="upload-file" v-if="!profileImages">
                <label for="upload">Choose file</label>
                <input
                  type="file"
                  name="profileImages"
                  id="upload"
                  hidden
                  @change="changeProfile"
                />
              </div>
              <div class="submit-image" v-else>
                <button type="submit" class="common-btn">submit</button>
                <button class="common-btn" @click="resetImage">Reset</button>
              </div>
            </form>
          </div>
        </div>
        <div class="profile-form">
          <form
            class="form-style"
            enctype="multipart/form-data"
            @submit.prevent="UpdateDetails"
          >
            <div>
              <label for="cname">Company Name</label>
              <div
                :class="{
                  'input-field': true,
                  error: handleValidation('cname'),
                }"
              >
                <input type="text" name="cname" v-model="cname" />
              </div>
            </div>
            <div>
              <label for="email">Email Address</label>
              <div
                :class="{
                  'input-field': true,
                  error: handleValidation('email'),
                }"
              >
                <input type="text" name="email" v-model="email" />
              </div>
            </div>
            <div>
              <label for="oldpassword">Old Password</label>
              <div
                :class="{
                  'input-field': true,
                  error: handlePassword,
                }"
              >
                <input
                  :type="hideOldPass ? 'password' : 'text'"
                  name="oldpassword"
                  v-model="oldpassword"
                />
                <i
                  :class="{
                    'fas fa-eye-slash': hideOldPass,
                    'fas fa-eye': !hideOldPass,
                  }"
                  @click="hideOldPass = !hideOldPass"
                ></i>
              </div>
            </div>
            <div v-if="oldpassword">
              <label for="newpassword">New Password</label>
              <div
                :class="{
                  'input-field': true,
                  error: handlePassword,
                }"
              >
                <input
                  :type="hideNewPass ? 'password' : 'text'"
                  name="newpassword"
                  v-model="newpassword"
                />
                <i
                  :class="{
                    'fas fa-eye-slash': hideNewPass,
                    'fas fa-eye': !hideNewPass,
                  }"
                  @click="hideNewPass = !hideNewPass"
                ></i>
              </div>
            </div>
            <div v-if="oldpassword">
              <label for="cpassword">Confirm Password</label>
              <div
                :class="{
                  'input-field': true,
                  error: handlePassword,
                }"
              >
                <input
                  :type="hideConPass ? 'password' : 'text'"
                  name="cpassword"
                  v-model="cpassword"
                />
                <i
                  :class="{
                    'fas fa-eye-slash': hideConPass,
                    'fas fa-eye': !hideConPass,
                  }"
                  @click="hideConPass = !hideConPass"
                ></i>
              </div>
            </div>
            <button>Update</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Profile",
  data() {
    return {
      hideOldPass: true,
      hideNewPass: true,
      hideConPass: true,
      submitClick: false,
      email: null,
      cname: null,
      oldpassword: null,
      newpassword: null,
      cpassword: null,
      profileImages: null,
      images: null,
      userId: null,
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
    handlePassword() {
      if (!this.oldpassword && !this.cpassword && !this.newpassword) {
        return false;
      }

      return true;
    },
    dummyImage() {
      return require("../../assets/images.jpg");
    },
  },
  created() {
    const { email, _id, company_name } = this.$store.getters.getUserDetails;
    this.email = email;
    this.userId = _id;
    this.cname = company_name;
  },
  methods: {
    async handleUpdate() {
      let Form = new FormData();
      const { _id } = this.$store.getters.getUserDetails;
      Form.append("profileImages", this.profileImages);
      Form.append("_id", _id);
      const { data } = await axios.post("http://localhost:3000/update", Form);
      if (data.type === "error") this.$vToastify.error(data.msg);
      else if (data.type === "success") this.$vToastify.success(data.msg);
    },
    async UpdateDetails() {
      this.submitClick = true;
      if (!this.oldpassword && !this.newpassword && !this.cpassword) {
        const formValue = {
          email: this.email,
          company_name: this.cname,
          _id: this.userId,
        };
        const { data } = await axios.patch("http://localhost:3000", formValue);

        localStorage.setItem("token", data.token);
        this.$store.dispatch("SET_TOKEN", data.token);
        this.$store.dispatch("TRACK_LOGIN");

        if (data.type == "error") {
          this.$vToastify.error(data.msg);
        } else if (data.type == "success") {
          this.$vToastify.success(data.msg);
        }
      } else {
        if (this.oldpassword && this.newpassword && this.cpassword) {
          if (this.newpassword != this.cpassword) {
            this.$vToastify.error("Confirm Password not Matched");
            return 0;
          }
          const formValue = {
            email: this.email,
            company_name: this.cname,
            _id: this.userId,
            oldpassword: this.oldpassword,
            password: this.newpassword,
          };
          const { data } = await axios.patch(
            "http://localhost:3000",
            formValue
          );
          if (data.type == "error") {
            this.$vToastify.error(data.msg);
          } else if (data.type == "success") {
            this.$vToastify.success(data.msg);
          }
        } else {
          this.$vToastify.error("Fill all the required fields");
        }
      }
      this.oldpassword = null;
      this.cpassword = null;
      this.newpassword = null
    },
    resetImage() {
      this.profileImages = null;
      this.images = null;
    },
    changeProfile(e) {
      this.profileImages = e.target.files[0];
      const support = ["image/jpeg", "image/png"];
      if (!support.includes(this.profileImages.type)) {
        this.$vToastify.error("File Extension not Acceptable");
        this.profileImages = null;
        return 0;
      }

      this.images = URL.createObjectURL(this.profileImages);
    },
  },
};
</script>
