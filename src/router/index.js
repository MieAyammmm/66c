import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutPage from "../views/AboutView.vue";
import LandingView from "@/views/LandingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: LandingView,
    },
    {
      path: "/home",
      name: "home-transaction",

      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/transactions",
      name: "create-transaction",

      component: () => import("../views/CreateTransactionView.vue"),
    },
    {
      path: "/transactions/:id",
      name: "edit-transaction",

      component: () => import("../views/EditTransactionView.vue"),
    },
    {
      path: "/about",
      name: "About",

      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
