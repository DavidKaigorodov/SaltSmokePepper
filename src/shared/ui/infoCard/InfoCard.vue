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
  <div class="promo-info-card" :class="`promo-info-card--${size}`">
    <h3 class="promo-info-card__title">{{ title }}</h3>
    <p v-if="text" class="promo-info-card__text">{{ text }}</p>
  </div>
</template>

<style lang="sass" scoped>
.promo-info-card
    position: absolute
    width: 300px
    height: 70px
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
    padding: 5px 10px
    transition: all 0.3s ease
    pointer-events: none

    &:hover
        backdrop-filter: blur(20px)
        background: rgba(0, 0, 0, 0.6)
        transform: translateY(-2px)

    &__title
        color: var(--text-color-hover)
        font-weight: 700
        font-size: clamp(0.5rem, 1vw, 1rem)
        margin-bottom: 0.2rem
        line-height: 0.8

    &__text
        color: rgba(255, 255, 255, 0.9)
        font-weight: 400
        font-size: clamp(0.9rem, 1.4vw, 1.5rem)
        line-height: 1.3
        max-width: 90%
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap

    &--large,
    &--medium,
    &--large,
    &--tall
        bottom: 20px
        left: 20px

    &--small
        left: 50%
        transform: translate(-50%)
        text-align: start
        align-items: start
</style>
