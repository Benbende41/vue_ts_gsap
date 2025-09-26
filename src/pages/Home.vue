<template>
  <div>Hello -world</div>
  <p>{{ userName }}</p>
  <box />
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUserStore } from "@/piniaStore";
import box from "@/components/boxGsapTo.vue";
defineOptions({
  name: "Home",
});

const store = useUserStore();

const { userName } = storeToRefs(store);
</script>
<style scoped></style>
