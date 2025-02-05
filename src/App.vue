<script setup lang="ts">
import DataLabsIntro from './components/DataLabsIntro.vue'
import DataLabsNavBar from './components/DataLabsNavBar.vue'
</script>

<template>
  <header>
    <DataLabsNavBar />
  </header>

  <main>
    <DataLabsIntro />
    <DataLabsTiles />
  </main>
</template>
