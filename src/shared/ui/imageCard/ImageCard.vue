<script>
export default {
  props: {
    src: { type: String, required: true },
    alt: { type: String, default: "" },
  },
};
</script>

<template>
  <div class="image-card">
    <img :src="src" :alt="alt" class="image-card__image" loading="lazy"/>
    <slot />
  </div>
</template>

<style lang="sass" scoped>
.image-card
  position: relative
  width: 100%
  height: 100%
  overflow: hidden
  border-radius: inherit

  &__image
    width: 100%
    height: 100%
    object-fit: cover
    object-position: center
    display: block
    transition: transform 0.6s ease
    will-change: transform

  &:hover .image-card__image
    transform: scale(1.05)
</style>
