<script setup lang="ts">
import { useHead } from '@unhead/vue';
useHead({ title: 'Smithsonian Datalabs' });
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
