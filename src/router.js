import Main from "./components/login/Main.vue";
import Dashboard from "./components/dashboard/Dashboard.vue";
import Profile from './components/profile/Main.vue';
export const routes = [
  { path: "/", component: Main, name: "login",meta:{isAuth:true}},
  { path: "/dashboard", component: Dashboard, name: "dashboard",meta:{isAuth:true}},
  { path: "/dashboard/profile", component: Profile, name: "Profile",meta:{isAuth:true}},
];
