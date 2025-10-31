<script>
export default {
  props: {
    type: { type: String, default: "default" },
    disabled: { type: Boolean, default: false },
  },
  emits: ["click"],
  methods: {
    handleClick(event) {
      if (!this.disabled) {
        this.$emit("click", event); 
      }
    },
  },
};
</script>

<template>
  <button
    class="base-button"
    :class="[`base-button--${type}`, { 'base-button--disabled': disabled }]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<style lang="sass" scoped>
.base-button
  display: inline-flex
  align-items: center
  justify-content: center
  // padding: 0.6rem 1.2rem
  border-radius: 12px
  font-weight: 600
  font-size: 1rem
  cursor: pointer
  transition: all 0.3s ease
  border: none
  background: var(--button-background, #2b2b2b)
  color: var(--button-text-color, #fff)

  &:hover
    filter: brightness(1.1)

  &--disabled
    opacity: 0.6
    cursor: not-allowed
</style>
