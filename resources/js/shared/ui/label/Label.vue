<script>
export default {
  props: {
    label: String,
  },
};
</script>

<template>
  <label class="label">
    {{ label }}
  </label>
</template>

<style lang="sass" scoped>
.label
  display: block
  color: var(--text-color)
  margin-bottom: 4px
  font-size: 1.2rem
</style>
