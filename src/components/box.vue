<template>
  <div class="mt-20 space-y-10 mx-2" ref="container" >
    <button
      class="px-4 py-2 bg-gray-500 rounded-lg text-amber-50 transition-all duration-200 hover:bg-blue-500 cursor-pointer"
    >
      Play/Pause
    </button>
    <div class="box w-36 aspect-square bg-blue-400 rounded-lg"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted,ref } from "vue";
import gsap from "gsap";

const container = ref<HTMLDivElement>()



onMounted(() => {
    //将伪数组转成标准数组
    const boxes = gsap.utils.toArray(container.value!.childNodes)
    console.log(boxes)    
  gsap.fromTo(
    ".box",
    {
      opacity: 0,
    },
    {
      opacity: 0.5,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "back.inOut",
    }
  );
});
</script>
<style scoped></style>
