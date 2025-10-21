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
.promo-info-card
    position: absolute
    width: 280px
    display: flex
    flex-direction: column
    justify-content: center
    align-items: flex-start
    text-align: left
    backdrop-filter: blur(10px)
    background: rgba(0, 0, 0, 0.5)
    border: 1px solid var(--text-color)
    border-radius: 20px
    color: var(--text-color)
    padding: 8px 12px
    transition: all 0.3s ease

    &--large,
    &--medium,
    &--tall
        bottom: 20px
        left: 20px
        transform: none   

    &--small
        bottom: 10px
        left: 50%
        transform: translateX(-50%)  
        text-align: start
        align-items: start

    &__title
        color: var(--text-color-hover)
        font-weight: 700
        font-size: clamp(0.8rem, 1vw, 1rem)
        margin-bottom: 0.2rem
        line-height: 1

    &__text
        color: rgba(255, 255, 255, 0.9)
        font-weight: 400
        font-size: clamp(0.9rem, 1.2vw, 1.1rem)
        line-height: 1.3
        max-width: 100%
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap
</style>
