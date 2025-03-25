<script setup lang="ts">
import { BCol, BContainer, BRow } from 'bootstrap-vue-next';
</script>

<template>
  <div class="text-light green-purple-lines-bg d-flex flex-column justify-content-end">
    <BContainer>
      <BRow>
        <BCol cols="6">
          <h1>Data Labs</h1>
          <p>
            are technology-enabled instructional modules that, over 3–8 class periods, engage high
            school students in authentic investigations using real data and online data
            visualization tools. Developed with funding from the National Science Foundation, the
            Smithsonian Institution, and NASA, these data-centric explorations incorporate exciting
            trans-disciplinary content connections from across the Smithsonian.
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
