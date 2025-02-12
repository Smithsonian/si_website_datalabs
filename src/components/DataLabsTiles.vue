<script setup lang="ts">
import { BCard, BCardGroup, BCardText, BCol, BContainer, BRow } from 'bootstrap-vue-next'
</script>

<template>
  <div class="dl-tiles-section py-4">
    <BContainer>
      <BRow>
        <BCol cols="4">
          <div class="card dl-tiles text-light h-100">
            <div class="card-img-top dl-tile-image-window">
              <img
                src="/src/assets/wasp-96b.png"
                class="dl-tile-image"
                alt="Exoplanet transiting a star"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title">DIY Planet Search</h5>
              <p class="card-text">
                New planets are being discovered on a regular basis. After new planets have been
                discovered the scientific community needs to follow up with further investigations.
                Help scientists better understand the movements of these planets around other stars
                by taking your own measurements of known exoplanets and contributing them to the DIY
                Planet Search Community. Using the DIY tools you’ll collect and analyze your own
                images of other star systems.
              </p>
            </div>
          </div>
        </BCol>
        <BCol cols="4">
          <div class="card dl-tiles text-light h-100">
            <img src="/src/assets/Filters.jpeg" class="card-img-top" alt="Colored glass filters" />
            <div class="card-body">
              <h5 class="card-title">Spectrum Lab</h5>
              <p class="card-text">
                The Spectrum Lab is an online data visualization tool and associated set of
                investigations that supports students in learning about light, color, and the
                electromagnetic spectrum by working with hands-on materials, models and simulations,
                and authentic scientific spectral data. Implemented over 3 to 8 class periods,
                Spectrum Lab activities promote students’ reasoning about light and color phenomena.
              </p>
            </div>
          </div>
        </BCol>
      </BRow>
    </BContainer>
  </div>
</template>

<style>
.dl-tiles-section {
  background-color: #3a3b75;
}

.card.dl-tiles {
  background-color: #291a56;
}

.dl-tile-image-window {
  overflow: hidden;
  height: 200px;
}

.dl-tile-image {
  height: 200px;
  margin: auto;
}
</style>
