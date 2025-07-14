<template>
  <div class="bg-dl-bright-purple py-4">
    <BContainer>
      <BRow gutter-y="4">
        <DataLabsTile
          :link-url="SPECLAB_URL"
          :img-src="speclabImg"
          img-alt="Colored glass filters"
          card-title="Spectrum Lab"
          tall-image
        >
          <p>
            An interactive data visualization tool that helps students explore the electromagnetic
            spectrum. Students develop deeper reasoning around light and color phenomena through a
            series of investigations using:
          </p>
          <ul>
            <li>Hands-on materials</li>
            <li>Models</li>
            <li>Simulations</li>
            <li>Authentic spectral data from many disciplines</li>
          </ul>
          Implemented over 3 - 8 class periods.
        </DataLabsTile>
        <DataLabsTile
          :link-url="DIY_URL"
          :img-src="diyImg"
          img-alt="Exoplanet transiting a star"
          card-title="DIY Planet Search"
        >
          <p>
            An interactive data interface where students engage with the messiness of real data,
            using the same analytical methods that professional scientists use to separate signal
            from noise in their investigations. Through 6 core activities students:
          </p>

          <ul>
            <li>Explore models of exoplanets</li>
            <li>Collect real telescope data</li>
            <li>Analyze their own images of other star systems</li>
          </ul>
          Implemented over 4 to 6 instructional hours.
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
