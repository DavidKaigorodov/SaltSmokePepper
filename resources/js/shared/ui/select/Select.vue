<script>
import SelectList from "./SelectList.vue";
import SelectInput from "./SelectInput.vue";

export default {
  components: {
    SelectList,
    SelectInput,
  },

  props: {
    modelValue: [String, Number, null],
    options: {
      type: Array,
      default: () => [], // ← важно!
    },
    label: String,
    name: String,
    disabled: Boolean,
    placeholder: String,
  },

  emits: ["update:modelValue"],

  data() {
    return {
      isOpen: false,
    };
  },

  computed: {
    selectedLabel() {
      if (!this.options || !Array.isArray(this.options)) return "";

      const option = this.options.find((o) => o.value === this.modelValue);

      return option ? option.label : "";
    },
  },

  methods: {
    toggleDropdown(event) {
      event.stopPropagation();
      if (!this.disabled) this.isOpen = !this.isOpen;
    },

    selectOption(option) {
      this.$emit("update:modelValue", option.value);
      this.isOpen = false;
    },

    clickOutside(event) {
      if (this.$refs.wrapper && !this.$refs.wrapper.contains(event.target)) {
        this.isOpen = false;
      }
    },
  },

  mounted() {
    document.addEventListener("click", this.clickOutside);
  },

  beforeUnmount() {
    document.removeEventListener("click", this.clickOutside);
  },
};
</script>

<template>
  <div
    class="select-wrapper"
    ref="wrapper"
    :class="{ 'is-disabled': disabled }"
    @click="toggleDropdown"
  >
    <SelectInput
      :selected-label="selectedLabel"
      :placeholder="placeholder"
      :is-open="isOpen"
      :disabled="disabled"
    />

    <SelectList
      v-show="isOpen"
      :options="options"
      :model-value="modelValue"
      @select="selectOption"
    />
  </div>

  <input v-if="name" type="hidden" :name="name" :value="modelValue" />
</template>

<style lang="sass">
.select-wrapper
  position: relative
  width: 100%
</style>
