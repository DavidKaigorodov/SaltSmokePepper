<script>
export default {
  props: {
    selectedLabel: String,
    placeholder: String,
    isOpen: Boolean,
    disabled: Boolean,
  },
};
</script>

<template>
  <div
    class="select-input"
    :class="{ 'is-open': isOpen, 'is-disabled': disabled }"
  >
    <span class="select-value">
      {{ selectedLabel || placeholder }}
    </span>
    <div class="select-arrow" />
  </div>
</template>
<style lang="sass">
.select-input
  display: flex
  justify-content: space-between
  align-items: center
  background: rgba(50, 50, 50, 0.9)
  padding: 10px 14px
  border-radius: 8px
  cursor: pointer
  color: var(--text-color)
  font-size: 1rem
  border: 1px solid transparent
  transition: 0.2s

  &.is-disabled
    opacity: 0.6
    cursor: not-allowed

.select-value
  flex: 1

.select-arrow
  width: 0
  height: 0
  border-left: 6px solid transparent
  border-right: 6px solid transparent
  border-top: 6px solid var(--text-color)
  transition: 0.2s

.is-open .select-arrow
  transform: rotate(180deg)
</style>
