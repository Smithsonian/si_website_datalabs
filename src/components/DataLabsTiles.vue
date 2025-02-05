<script setup lang="ts">
import { BCard, BCardGroup, BCardText, BContainer } from 'bootstrap-vue-next'
</script>

<template>
  <div class="dl-tiles-section py-4">
    <BContainer>
      <BCardGroup deck>
        <BCard
          title="DIY Planet Search"
          img-src="/src/assets/wasp-96b.png"
          img-alt="Exoplanet transiting a star"
          class="dl-tiles text-light"
        >
          <BCardText
            >New planets are being discovered on a regular basis. After new planets have been
            discovered the scientific community needs to follow up with further investigations. Help
            scientists better understand the movements of these planets around other stars by taking
            your own measurements of known exoplanets and contributing them to the DIY Planet Search
            Community. Using the DIY tools you’ll collect and analyze your own images of other star
            systems.
          </BCardText>
        </BCard>
        <BCard
          title="Spectrum Lab"
          img-src="/src/assets/Filters.jpeg"
          img-alt="Colored glass filters"
          class="dl-tiles text-light"
        >
          <BCardText>
            The Spectrum Lab is an online data visualization tool and associated set of
            investigations that supports students in learning about light, color, and the
            electromagnetic spectrum by working with hands-on materials, models and simulations, and
            authentic scientific spectral data. Implemented over 3 to 8 class periods, Spectrum Lab
            activities promote students’ reasoning about light and color phenomena.
          </BCardText>
        </BCard>
      </BCardGroup>
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
</style>
