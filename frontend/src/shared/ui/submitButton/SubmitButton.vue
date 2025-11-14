<script>
import BaseButton from "../button/BaseButton.vue";

export default {
  components: { BaseButton },
  props: {
    disabled: { type: Boolean, default: false },
    sbm: String,
  },
  emits: ["click"],
  methods: {
    handleClick(event) {
      if (!this.disabled) this.$emit("click", event);
    },
  },
};
</script>

<template>
  <BaseButton
    type="submit"
    :disabled="disabled"
    class="submit-button"
    @click="handleClick"
  >
    <slot>{{ sbm }}</slot>
  </BaseButton>
</template>

<style lang="sass" scoped>
.submit-button
    min-width: 160px
    padding: 5px 15px
    height: 43px
    background: var(--text-color-hover)
    color: var(--text-color)
</style>
