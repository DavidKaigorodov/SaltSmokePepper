<script>
export default {
  props: {
    title: String,
    text: String,
    size: {
      type: String,
      default: "large",
    },
  },
};
</script>

<template>
  <div class="info-card" :class="`info-card--${size}`">
    <h3 class="info-card__title">{{ title }}</h3>
    <p v-if="text" class="info-card__text">{{ text }}</p>
  </div>
</template>

<style lang="sass" scoped>
.info-card
  position: absolute
  bottom: 0
  left: 0
  right: 0
  display: flex
  flex-direction: column
  backdrop-filter: blur(8px)
  background: rgba(0, 0, 0, 0.6)
  padding: 10px 14px
  border-radius: 0 0 12px 12px
  color: var(--text-color)
  z-index: 3
  opacity: 0.95
  transition: opacity 0.3s ease

  &__title
    color: var(--text-color-hover)
    font-weight: 700
    font-size: clamp(0.9rem, 1.1vw, 1.2rem)
    margin-bottom: 0.25rem

  &__text
    color: rgba(255, 255, 255, 0.9)
    font-size: clamp(0.8rem, 1vw, 1rem)

  .promo-card:hover &
    opacity: 1
</style>
