<template>
  <BCol cols="4">
    <a :href="linkUrl" class="text-decoration-none">
      <div class="card dl-tile text-light h-100">
        <div class="card-img-top dl-tile-image-window position-relative">
          <img
            :src="imgSrc"
            :class="{ 'dl-tile-image': !tallImage, 'card-img-top': tallImage }"
            :alt="imgAlt"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ cardTitle }}</h5>
          <p class="card-text">
            <slot></slot>
          </p>
        </div>
      </div>
    </a>
  </BCol>
</template>

<script setup lang="ts">
defineProps<{
  linkUrl: string;
  imgSrc: string;
  imgAlt: string;
  cardTitle: string;
  tallImage?: boolean;
}>();
</script>

<style>
.card.dl-tile {
  background-color: var(--dl-dark-purple);
  transition: background-color 0.15s ease-in-out;
}
.card.dl-tile:hover {
  background-color: var(--dl-dark-purple-hover);
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
