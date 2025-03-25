<template>
  <BNavbar v-b-color-mode="'dark'" variant="dark">
    <BNavbarBrand href="#">
      <img src="/src/assets/DataLabsLogo@2x.png" height="90" width="343" />
    </BNavbarBrand>
    <BNavbarToggle target="nav-collapse" />
    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav class="ms-auto">
        <BNavItem :href="DIY_URL" variant="light" opacity-hover="75">DIY Planet Search</BNavItem>
        <BNavText class="text-gen-grey">|</BNavText>
        <BNavItem :href="SPECLAB_URL" variant="light" opacity-hover="75">Spectrum Lab</BNavItem>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
</template>

<script setup lang="ts">
import { DIY_URL, SPECLAB_URL } from '@/constants';
</script>
