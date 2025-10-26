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
    <img :src="src" :alt="alt" class="image-card__image" />
    <slot />
  </div>
</template>

<style lang="sass" scoped>
.image-card
  position: relative
  width: 100%
  height: 100%
  border-radius: 12px
  overflow: hidden
  display: flex
  justify-content: center
  align-items: flex-end
  z-index: 1

  &__image
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    object-fit: cover
    object-position: center
    transform: scale(1.05)
    z-index: 0
</style>
