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
  left: 0
  right: 0
  display: flex
  flex-direction: column
  max-width: calc(100% - 40px)
  margin: 0 20px 20px 20px
  backdrop-filter: blur(8px)
  background: rgba(0, 0, 0, 0.6)
  padding: 10px
  border-radius: 16px
  border: 1px solid rgba(255, 255, 255, 0.2)
  color: var(--text-color)
  pointer-events: none
  transition: opacity 0.3s ease
  z-index: 3

  &__title
    color: var(--text-color-hover)
    font-weight: 700
    font-size: clamp(0.9rem, 1.1vw, 1.2rem)
    margin-bottom: 0.25rem
    line-height: 1.2

  &__text
    color: rgba(255, 255, 255, 0.9)
    font-weight: 400
    font-size: clamp(0.8rem, 1vw, 1rem)
    line-height: 1.3
</style>
