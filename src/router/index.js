import Vue from "vue";
import Router from "vue-router";
import HomePage from "../views/HomePage.vue";
import SubscribeForm from "../components/SubscribeForm.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: "public",
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/subscribe",
      name: "subscribe",
      component: SubscribeForm,
    },
  ],
});
