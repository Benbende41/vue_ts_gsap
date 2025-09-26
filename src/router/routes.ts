import type { RouteRecordRaw } from "vue-router";

export const staticRoute: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/pages/Home.vue"),
  },
];
