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
  cursor: pointer
  transition: transform 0.3s ease
  border-radius: 12px
  overflow: hidden

  &:hover
    transform: scale(1.02)

  &--large
    grid-column: span 2
    grid-row: span 2

  &--small
    grid-column: span 1
    grid-row: span 1
</style>
