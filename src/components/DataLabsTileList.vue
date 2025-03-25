<template>
  <div class="bg-dl-bright-purple py-4">
    <BContainer>
      <BRow>
        <DataLabsTile
          :link-url="DIY_URL"
          :img-src="diyImg"
          img-alt="Exoplanet transiting a star"
          card-title="DIY Planet Search"
        >
          New planets are being discovered on a regular basis. After new planets have been
          discovered the scientific community needs to follow up with further investigations. Help
          scientists better understand the movements of these planets around other stars by taking
          your own measurements of known exoplanets and contributing them to the DIY Planet Search
          Community. Using the DIY tools you’ll collect and analyze your own images of other star
          systems.
        </DataLabsTile>
        <DataLabsTile
          :link-url="SPECLAB_URL"
          :img-src="speclabImg"
          img-alt="Colored glass filters"
          card-title="Spectrum Lab"
          tall-image
        >
          The Spectrum Lab is an online data visualization tool and associated set of investigations
          that supports students in learning about light, color, and the electromagnetic spectrum by
          working with hands-on materials, models and simulations, and authentic scientific spectral
          data. Implemented over 3 to 8 class periods, Spectrum Lab activities promote students’
          reasoning about light and color phenomena.
        </DataLabsTile>
      </BRow>
    </BContainer>
  </div>
</template>

<script setup lang="ts">
import { DIY_URL, SPECLAB_URL } from '@/constants';
import diyImg from '/src/assets/wasp-96b.png';
import speclabImg from '/src/assets/Filters.jpeg';
</script>
