import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import vuetify from './plugins/Vuetyfy';
import VueRouter from 'vue-router'
import { routes } from './router.js';
Vue.config.productionTip = false;


Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode:'history'
})

const store = new Vuex.Store({
  state: {
    isClickProfile: false,
  },
  getters: {
    getClickProfileStatus(state) {
      return state.isClickProfile;
    },
  },
  mutations: {
    updateStatus(state) {
      state.isClickProfile = !state.isClickProfile;
    },
  },
  actions: {
    UPDATE_STATUS({ commit }) {
      commit("updateStatus");
    },
  },
});

new Vue({
  render: (h) => h(App),
  store,
  vuetify,
  router,
}).$mount("#app");
