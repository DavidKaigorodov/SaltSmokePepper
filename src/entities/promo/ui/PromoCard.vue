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
      <div class="promo-card__overlay">
        <InfoCard :title="title" :text="label" :size="size" />
      </div>
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
    grid-row: span 4
    aspect-ratio: 1 / 1

  &--medium
    grid-column: span 3
    grid-row: span 2
    aspect-ratio: 4 / 3

  &--large
    grid-column: span 6
    grid-row: span 8
    aspect-ratio: 16 / 9

  &__overlay
    position: absolute
    inset: 0
    background: rgba(0,0,0,0.2)
    color: white
    display: flex
    flex-direction: column
    justify-content: flex-end
    padding: 1rem
    border-radius: 12px
    transition: background 0.3s ease

    &:hover
      background: rgba(0,0,0,0.1)
</style>
