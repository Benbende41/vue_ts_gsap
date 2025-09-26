<template>
  <div class="mt-20 space-y-10 mx-2">
    <button
      @click="
        () => {
          if (tl.paused()) {
            tl.play();
          } else {
            tl.pause();
          }
        }
      "
      class="px-4 py-2 bg-gray-500 rounded-lg text-amber-50 transition-all duration-200 hover:bg-blue-500 cursor-pointer"
    >
      Play/Pause
    </button>
    <div class="box w-36 aspect-square bg-blue-400 rounded-lg"></div>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { onMounted } from "vue";
const tl = gsap.timeline({
  repeat: -1,
  repeatDelay: 1,
  yoyo: true,
});
onMounted(() => {
  //必须要放在生命周期当中，确保dom已经挂载
  tl.to(".box", {
    x: 250,
    rotation: 360,
    borderRadius: "100%",
    duration: 2,
    ease: "back.inOut",
  });
  tl.to(".box", {
    y: 200,
    scale: 2,
    rotation: 360,
    borderRadius: "100%",
    duration: 2,
    ease: "back.inOut",
  });
  tl.to(".box", {
    x: 500,
    scale: 1,
    rotation: 360,
    borderRadius: "8px",
    duration: 2,
    ease: "back.inOut",
  });
});
</script>
<style scoped></style>
