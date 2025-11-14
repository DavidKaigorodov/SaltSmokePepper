<script>
import Label from "@/shared/ui/label/Label.vue";
import StringInput from "@/shared/ui/stringInput/StringInput.vue";
import BaseInput from "@/shared/ui/baseInput/BaseInput.vue";

export default {
  components: { Label, StringInput, BaseInput },
  props: {
    modelValue: Object,
  },
  emits: ["update:modelValue"],
  computed: {
    user: {
      get() {
        return this.modelValue;
      },
      set(val) {
        this.$emit("update:modelValue", val);
      },
    },
  },
};
</script>
// TODO поменять на свой кастомный селект и дэйт пикер
<template>
  <div class="user-info-form">
    <Label label="Имя" />
    <StringInput v-model="user.name" />

    <Label label="Email" />
    <StringInput v-model="user.email" />

    <Label label="Пол" />
    <select v-model="user.gender" class="select">
      <option disabled value="">Выберите</option>
      <option value="male">Мужской</option>
      <option value="female">Женский</option>
    </select>

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
