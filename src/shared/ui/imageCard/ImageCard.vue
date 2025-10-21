<script>
export default {
  name: "ImageCard",
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
  width: 100%
  height: 100%
  border-radius: 12px
  overflow: hidden
  position: relative

  &__image
    width: 100%
    height: 100%
    object-fit: cover
</style>
