<script setup lang="ts">
import {
  BCollapse,
  BNavbar,
  BNavbarBrand,
  BNavbarNav,
  BNavbarToggle,
  BNavItem,
  BNavText,
} from 'bootstrap-vue-next';
</script>

<template>
  <BNavbar v-b-color-mode="'dark'" variant="dark">
    <BNavbarBrand href="#">
      <img src="/src/assets/DataLabsLogo@2x.png" height="90" width="343" />
    </BNavbarBrand>
    <BNavbarToggle target="nav-collapse" />
    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav class="ms-auto">
        <BNavItem
          href="https://waps.cfa.harvard.edu/microobservatory/diy"
          variant="light"
          opacity-hover="75"
          >DIY Planet Search</BNavItem
        >
        <BNavText class="text-gen-grey">|</BNavText>
        <BNavItem
          href="https://waps.cfa.harvard.edu/microobservatory/spectrum"
          variant="light"
          opacity-hover="75"
          >Spectrum Lab</BNavItem
        >
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
</template>
