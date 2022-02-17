import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueToastify from "vue-toastify";
import { routes } from "./router.js";
Vue.config.productionTip = false;
import store from './store.js';
Vue.use(VueRouter);
Vue.use(VueToastify);

const router = new VueRouter({
  routes,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  if(to.meta.isAuth)
  {
      store.dispatch('TRACK_LOGIN');
      if(!store.getters.getToken && to.name!='login')
      {
           next({path:'/',replace:false});
      }
      else if(store.getters.getToken && to.name =='login')
      {
        next({path:'/dashboard',replace:false});
      }
      else next();
     
  }
  else next()
});


const app = new Vue({
  render: (h) => h(App),
  store,
  router,
});

app.$mount("#app");
