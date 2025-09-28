<template>
  <div class="noisy h-[100vh] flex-center">
    <section id="hero">
      <h1 class="title">MOJITO</h1>
      <img src="/images/hero-left-leaf.png" alt="left-leaf" class="left-leaf" />
      <img
        src="/images/hero-right-leaf.png"
        alt="right-leaf"
        class="right-leaf"
      />
      <div class="body">
        <div class="content">
          <div class="space-y-5 hidden md:block">
            <p>Cool. Crisp Classic.</p>
            <p class="subtitle">
              Sip the Spirit<br />
              of Summer
            </p>
          </div>
          <div class="view-cocktails">
            <p class="subtitle">
              Every cocktail on our menu is a blend of premium ingredients,
              creative flair, and timeless recipes — designed to delight your
              senses.
            </p>
            <router-link to="/cocktails">View Cocktails</router-link>
          </div>
        </div>
      </div>
    </section>
    <div class="video absolute inset-0">
      <video muted playsinline preload="auto" ref="videoRef" loop></video>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { onMounted, useTemplateRef } from "vue";
import { useMediaQuery, useMediaControls } from "@vueuse/core";

const videoRef = useTemplateRef("videoRef");
const { currentTime, duration } = useMediaControls(videoRef, {
  src: "videos/input.mp4",
});

const isMobile = useMediaQuery("(max-width:767px)");

onMounted(() => {
  const heroSplit = new SplitText(".title", { type: "chars,words" });
  const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

  heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
  gsap.from(heroSplit.chars, {
    yPercent: 60,
    duration: 1.4,
    ease: "expo.inOut",
    stagger: 0.06,
  });
  gsap.from(paragraphSplit.lines, {
    opacity: 0,
    yPercent: 100,
    duration: 1.8,
    ease: "expo.out",
    stagger: 0.08,
    delay: 1,
  });
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })
    .to(".right-leaf", { y: 200 }, 0)
    .to(".left-leaf", { y: -200 }, 0);

  const startValue = isMobile ? "top 50%" : "120% 120%";
  const endValue = isMobile ? "120% top" : "120% 120%";

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "video",
      start: startValue,
      end: endValue,
      scrub: true,
      pin: true,
    },
  });
  videoRef.value!.onloadedmetadata = () => {
    tl.to(videoRef.value as HTMLVideoElement, {
      currentTime: duration.value,
    });
  };
});
</script>
<style scoped></style>
