<script setup lang="ts">
import { BCol, BContainer, BRow } from 'bootstrap-vue-next';
</script>

<template>
  <div class="text-light green-purple-lines-bg d-flex flex-column justify-content-end">
    <BContainer>
      <BRow>
        <BCol cols="12" lg="8">
          <h1>Data Labs</h1>
          <p>
            are interactive instructional modules that engage high school students in authentic
            investigations using real data and online data visualization tools from the Smithsonian
            Astrophysical Observatory at the Center for Astrophysics | Harvard &amp; Smithsonian.
          </p>
        </BCol>
      </BRow>
    </BContainer>
  </div>
</template>

<style>
.green-purple-lines-bg {
  background-image: url('/src/assets/green_purple_data_lines.jpg');
  background-size: cover;
  background-position: top 100% left 50%;
  min-height: 450px;
}
</style>
