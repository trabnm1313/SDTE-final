import Vue from "vue";
import VueRouter from "vue-router";
import homePage from "../views/homePage.vue";
import registerPage from "../views/registerPage.vue";
import checkQR from "../views/checkQR.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "homePage",
    component: homePage
  },
  {
    path: "/register",
    name: "registerPage",
    component: registerPage
  },
  {
    path: "/checkQR",
    name: "checkQR",
    component: checkQR
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
