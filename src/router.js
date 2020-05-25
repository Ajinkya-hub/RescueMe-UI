import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "PostCodeSearch",
      component: () => import("./components/MainPage.vue")
    },
    {
      path: "/404",
      name: "404",
      component: () => import("./components/error/404.vue")
    },
  ]
});
export default router;

