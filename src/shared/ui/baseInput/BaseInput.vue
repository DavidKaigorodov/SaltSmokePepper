<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    modelValue: String,
  },
};
</script>

<template>
  <input
    :type="type"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="base-input"
  />
</template>

<style lang="sass" scoped>
.base-input
  width: 100%
  background: #2b2b2b
  border: none
  border-radius: 6px
  padding: 10px 12px
  color: var(--text-color)
  font-size: 1rem 
  outline: none
</style>
