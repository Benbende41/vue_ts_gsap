<script setup lang="ts">
import NavBar from './components/NavBar.vue';

</script>

<template>
  <main>
    <NavBar/>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </main>
</template>

<style scoped></style>
