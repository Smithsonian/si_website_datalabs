<script setup lang="ts">
import { BCol, BContainer, BRow } from 'bootstrap-vue-next';
</script>

<template>
  <div class="bg-dark text-light pt-3">
    <BContainer>
      <BRow>
        <BCol cols="8">
          <p>
            <small>
              Smithsonian DataLabs are supported by the Smithsonian Institution’s Together We Thrive
              initiative and funded in part by the Jeff Bezos gift to the National Air and Space
              Museum.
            </small>
          </p>
        </BCol>
        <BCol>
          <a href="https://www.cfa.harvard.edu/">
            <img src="/src/assets/CfALogo@2x.png" width="100%" />
          </a>
        </BCol>
      </BRow>
    </BContainer>
  </div>
</template>
