<script>
import ImageCard from "@/shared/ui/imageCard/ImageCard.vue";
import InfoCard from "@/shared/ui/infoCard/InfoCard.vue";

export default {
  components: { ImageCard, InfoCard },
  props: {
    image: String,
    title: String,
    label: String,
    size: {
      type: String,
      default: "medium",
    },
  },
};
</script>

<template>
  <div class="promo-card" :class="`promo-card--${size}`">
    <ImageCard :src="image" :alt="title">
      <InfoCard :title="title" :text="label" :size="size" />
    </ImageCard>
  </div>
</template>

<style lang="sass" scoped>
.promo-card
    position: relative
    width: 100%
    height: 100%
    transition: transform 0.3s ease
    cursor: pointer

    &:hover
      transform: scale(1.02)

    &--small
      grid-column: span 3
      grid-row: span 3
      aspect-ratio: 1 / 1

    &--medium
      grid-column: span 3
      grid-row: span 2
      aspect-ratio: 4 / 3

    &--large
      grid-column: span 6
      grid-row: span 6
      aspect-ratio: 16 / 9
</style>
