<template>
  <section>
    <Hero />
    <div class="h-dvh bg-black"></div>
  </section>
</template>

<script setup lang="ts">
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Hero from "@/components/Hero.vue";
defineOptions({
  name: "Home",
});
</script>
<style scoped></style>
