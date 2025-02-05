<script setup lang="ts">
import DataLabsFooter from './components/DataLabsFooter.vue'
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

  <footer>
    <DataLabsFooter />
  </footer>
</template>
