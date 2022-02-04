import Main from "./components/login/Main.vue";
import Dashboard from "./components/dashboard/Dashboard.vue";
import Profile from './components/profile/Profile.vue'
export const routes = [
  { path: "/", component: Main, name: "login" },
  { path: "/dashboard", component: Dashboard, name: "dashboard" },
  { path: "/dashboard/profile", component: Profile, name: "Profile" },
];
