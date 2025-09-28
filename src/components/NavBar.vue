<template>
  <nav>
    <div>
      <router-link to="/home" class="flex items-center gap-2">
        <img src="/images/logo.png" alt="logo" />
        <p>Velvet Pour</p>
      </router-link>
      <ul>
        <li v-for="navItem in navLinks" :key="navItem.id">
          <router-link :to="navItem.id">{{ navItem.title }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";

//@ts-ignore
import { navLinks } from "../../constants/index.js";
import { onMounted } from "vue";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const navTween = gsap.timeline({
    scrollTrigger: {
      trigger: "nav",
      start: "bottom top",
    },
  });
  navTween.fromTo(
    "nav",
    {
      backgroundColor: "transparent",
    },
    {
      backgroundColor: "#00000050",
      duration: 1,
      ease: "power1.inOut",
    }
  );
});
</script>
<style scoped></style>
