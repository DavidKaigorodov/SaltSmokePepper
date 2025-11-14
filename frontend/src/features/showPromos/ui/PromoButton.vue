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
    flex: 0 0 50px      
    height: 250px
    backdrop-filter: blur(3px)
    background: rgba(0, 0, 0, 0.5)
    border: 1px solid var(--text-color)
    border-radius: 20px
    color: var(--text-color)
    padding: 5px 10px
    font-size: 1rem
    font-weight: 600
    display: inline-flex     
    justify-content: center
    align-items: center

    &:hover
        transform: scale(1.02)
</style>
