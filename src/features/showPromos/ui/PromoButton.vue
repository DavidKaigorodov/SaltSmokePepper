<script>
import BaseButton from "@/shared/ui/button/BaseButton.vue";

export default {
  components: { BaseButton },
};
</script>

<template>
  <BaseButton class="promo-button">
    <slot />
  </BaseButton>
</template>

<style lang="sass" scoped>
.promo-button
    backdrop-filter: blur(10px)
    height: 50px
    width: 250px
    background: rgba(0, 0, 0, 0.1)
    border: 1px solid var(--text-color)
    border-radius: 20px
    color: var(--text-color)
    padding: 5px 10px
    font-size: 1.2rem
    font-weight: 600

    &:hover
        transform: scale(1.02)
</style>
