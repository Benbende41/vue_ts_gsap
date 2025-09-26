import { createRouter, createWebHistory } from "vue-router";
import { staticRoute } from "./routes";

export const router = createRouter({
  history: createWebHistory(),
  routes: staticRoute,
});
