import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
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
  ],
});

export default router;
