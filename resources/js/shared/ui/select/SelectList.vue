<script>
export default {
  props: {
    options: Array,
    modelValue: [String, Number, null],
  },

  emits: ["select"],

  data() {
    return {
      searchQuery: "",
    };
  },

  computed: {
    filteredOptions() {
      const q = this.searchQuery.trim().toLowerCase();
      return q
        ? this.options.filter((o) => o.label.toLowerCase().includes(q))
        : this.options;
    },
  },

  methods: {
    select(option) {
      this.$emit("select", option);
      this.searchQuery = "";
    },
  },
};
</script>

<template>
  <div class="select-dropdown">
    <div class="search-wrapper">
      <input
        v-model="searchQuery"
        class="search-input"
        type="text"
        placeholder="Поиск..."
        @click.stop
      />
    </div>

    <ul>
      <li
        v-for="o in filteredOptions"
        :key="o.value"
        class="select-option"
        :class="{ 'is-selected': o.value === modelValue }"
        @click.stop="select(o)"
      >
        {{ o.label }}
      </li>

      <li v-if="filteredOptions.length === 0" class="select-empty">
        Ничего не найдено
      </li>
    </ul>
  </div>
</template>

<style lang="sass" scoped>
.select-dropdown
  position: absolute
  top: calc(100% + 6px)
  left: 0
  width: 100%
  background: rgba(40, 40, 40, 0.95)
  border-radius: 8px
  padding: 0
  z-index: 200
  box-shadow: 0 4px 10px rgba(0,0,0,0.4)
  backdrop-filter: blur(4px)

.search-wrapper
  padding: 6px 10px

.search-input
  width: 100%
  padding: 8px 10px
  background: rgba(30, 30, 30, 0.9)
  border: 1px solid rgba(90, 90, 90, 0.3)
  border-radius: 6px
  color: var(--text-color)
  font-size: 0.95rem
  outline: none

  &:focus
    border-color: rgba(150, 150, 150, 0.6)

ul
  list-style: none
  margin: 0
  padding: 0

.select-option
  padding: 10px 14px
  cursor: pointer
  color: var(--text-color)
  font-size: 1rem
  transition: 0.15s

  &:hover
    background: rgba(70, 70, 70, 0.8)
    &:last-child
        border-radius: 0 0 6px 6px

  &.is-selected
    background: rgba(255, 255, 255, 0.08)

.select-empty
  padding: 12px 14px
  text-align: center
  color: rgba(200, 200, 200, 0.6)
  font-size: 0.9rem
</style>
