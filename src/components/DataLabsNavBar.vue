<script setup lang="ts">
import {
  BCollapse,
  BNavbar,
  BNavbarBrand,
  BNavbarNav,
  BNavbarToggle,
  BNavItem,
} from 'bootstrap-vue-next'
</script>

<template>
  <BNavbar v-b-color-mode="'dark'" variant="dark">
    <BNavbarBrand href="#">
      <img src="/src/assets/DataLabsLogo@2x.png" height="90" width="343" />
    </BNavbarBrand>
    <BNavbarToggle target="nav-collapse" />
    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav class="ms-auto">
        <BNavItem href="#">DIY Planet Search</BNavItem>
        <div class="vr bg-light"></div>
        <BNavItem href="#">Spectrum Lab</BNavItem>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
</template>
