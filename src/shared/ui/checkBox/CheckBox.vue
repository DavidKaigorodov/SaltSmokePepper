<script>
import CheckIco from "../icons/checkIco/CheckIco.vue";
import Label from "../label/Label.vue";

export default {
  components: { CheckIco, Label },
  props: {
    modelValue: Boolean,
    label: String,
  },
  data() {
    return {
      checked: this.modelValue,
    };
  },
  watch: {
    modelValue(v) {
      this.checked = v;
    },
    checked(v) {
      this.$emit("update:modelValue", v);
    },
  },
  methods: {
    toggle() {
      this.checked = !this.checked;
    },
  },
};
</script>

<template>
  <div class="checkbox" @click="toggle">
    <div class="box" :class="{ checked }">
      <CheckIco v-if="checked" />
    </div>
    <Label :label="label"/>
  </div>
</template>

<style lang="sass" scoped>
.checkbox
  display: flex
  align-items: center
  gap: 8px
  cursor: pointer

.box
  width: 30px
  height: 30px
  padding: 0
  border: 1px solid var(--text-color)
  border-radius: 7px
  display: flex
  align-items: center
  justify-content: center
  align-content: center
  transition: background .2s
</style>
