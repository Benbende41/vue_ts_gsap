import { defineStore } from "pinia";

export const useUserStore = defineStore("store", {
  state: () => {
    return {
      userName: "herbert",
    };
  },
});
