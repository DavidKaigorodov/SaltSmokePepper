<script>
import ImageCard from "@/shared/ui/imageCard/ImageCard.vue";

export default {
  components: { ImageCard },
  props: {
    image: { type: String, required: true },
    title: { type: String, default: "" },
    label: { type: String, default: "" },
  },
};
</script>

<template>
  <div class="about-card">
    <ImageCard :src="image" :alt="title" class="about-card__image" />
    <p class="about-card__label">{{ label }}</p>
  </div>
</template>

<style lang="sass" scoped>
.about-card
  display: flex
  flex-direction: column
  align-items: center
  text-align: center
  gap: 1vw

  .about-card__image
    width: clamp(160px, 25vw, 320px)
    height: clamp(160px, 25vw, 320px)
    border-radius: 50%
    overflow: hidden
    position: relative
    transition: transform 0.3s ease

    &:hover
      transform: scale(1.04)

    .image-card__image
      width: 100%
      height: 100%
      object-fit: cover

  .about-card__label
    font-weight: 600
    font-size: 1rem
    margin: 0

</style>
