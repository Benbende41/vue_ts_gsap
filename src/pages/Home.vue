<template>
  <div>Hello -world</div>
  <p>{{ userName }}</p>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUserStore } from "@/piniaStore";
defineOptions({
  name: "Home",
});

const store = useUserStore();

const { userName } = storeToRefs(store);
</script>
<style scoped lang="scss"></style>
