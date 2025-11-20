<script>
import Label from "@/shared/ui/label/Label.vue";
import StringInput from "@/shared/ui/stringInput/StringInput.vue";
import BaseInput from "@/shared/ui/baseInput/BaseInput.vue";
import Select from "@/shared/ui/select/Select.vue";

export default {
  components: { Select, Label, StringInput, BaseInput },

  props: {
    modelValue: { type: Object, required: true },
  },

  emits: ["update:modelValue"],

  computed: {
    user: {
      get() {
        return this.modelValue;
      },
      set(v) {
        this.$emit("update:modelValue", v);
      },
    },

  },

  async mounted() {
    const store = useGenderStore();
    await store.fetchGenders();
  },
};
</script>

<template>
  <div class="user-info-form">
    <Label label="Имя" />
    <StringInput v-model="user.name" />

    <Label label="Email" />
    <StringInput v-model="user.email" />

    <Label label="Пол" />
    <Select
      v-model="user.gender_id"
      :options="genders"
      placeholder="Выберите пол"
    />

    <Label label="Дата рождения" />
    <BaseInput type="date" v-model="user.birthday" />
  </div>
</template>

<style lang="sass" scoped>
.user-info-form
  display: flex
  flex-direction: column
  gap: 16px
  width: 900px

.select
  padding: 10px 14px
  background: rgba(40, 40, 40, 0.8)
  border: none
  border-radius: 8px
  color: var(--text-color)
  font-size: 1rem
</style>
