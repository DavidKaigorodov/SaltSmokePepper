<script>
import BaseInput from "../baseInput/BaseInput.vue";

export default {
  components: { BaseInput },
  props: {
    modelValue: String,
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(v) {
        this.$emit("update:modelValue", v);
      },
    },
  },
};
</script>

<template>
  <BaseInput type="text" v-model="value" />
</template>
