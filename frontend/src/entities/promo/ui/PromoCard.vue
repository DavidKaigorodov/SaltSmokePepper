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
  overflow: hidden
  border-radius: 20px
  transition: transform 0.4s ease, box-shadow 0.4s ease
  cursor: pointer

  &:hover
    transform: scale(1.015)
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25)

</style>
