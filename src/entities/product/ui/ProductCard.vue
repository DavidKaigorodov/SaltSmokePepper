<script>
import ImageCard from "@/shared/ui/imageCard/ImageCard.vue";

export default {
  components: { ImageCard },
  props: {
    title: String,
    price: Number,
    weight: String,
    image: String,
  },
};
</script>

<template>
  <div class="product-card">
    <div class="product-card__container">

      <div class="product-card__image">
        <ImageCard :src="image" />
      </div>


      <div class="product-info">
        <div class="product-info__container">
          <div class="product-info__title">{{ title }}</div>

          <div class="product-info__bottom">
            <div class="product-info__price">{{ price }}</div>
            <div class="product-info__weight">{{ weight }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.product-card
  width: 300px
  height: 400px
  display: flex
  justify-content: center
  align-items: center

  &__container
    padding: 20px
    width: 100%
    height: 100%
    background: rgba(0, 0, 0, 0.5)
    backdrop-filter: blur(8px)
    border-radius: 35px
    display: flex
    flex-direction: column
    overflow: hidden
    transition: transform 0.3s ease
    &:hover
      transform: translateY(-5px)

  &__image
    width: 255px
    height: 255px
    overflow: hidden
    border-radius: 15px
    display: flex
    justify-content: center
    align-items: center
    margin: 0 auto

.product-info
  width: 255px
  margin: 20px auto
  background: rgba(60, 60, 60, 1)
  backdrop-filter: blur(8px)
  border-radius: 16px
  padding: 10px
  color: var(--text-color)
  &__container
    display: flex
    flex-direction: column

  &__title
    font-size: 20px
    font-weight: 600
    text-align: left

  &__bottom
    display: flex
    justify-content: space-between
    align-items: center
    font-size: 16 px

  &__price
    font-weight: 600
    color: var(--text-color)
  &__weight
    color: rgba(255, 255, 255, 0.6)
</style>
