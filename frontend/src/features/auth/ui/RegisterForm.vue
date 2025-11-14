<script>
import Label from "@/shared/ui/label/Label.vue";
import BaseInput from "@/shared/ui/baseInput/BaseInput.vue";
import StringInput from "@/shared/ui/stringInput/StringInput.vue";
import SubmitButton from "@/shared/ui/submitButton/SubmitButton.vue";
import BaseForm from "@/shared/ui/baseForm/BaseForm.vue";

export default {
  components: {
    BaseForm,
    Label,
    BaseInput,
    StringInput,
    SubmitButton,
  },
  data() {
    return {
      email: "",
      password: "",
      password_confirmation: "",
    };
  },
  methods: {
    handleSubmit() {
      this.$axios.post("/api/register", {
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
      });
    },
  },
};
</script>

<template>
  <BaseForm class="register-form" @submit="handleSubmit">
    <template #header> Регистрация </template>

    <template #content>
      <div class="form-group">
        <Label label="Почта" />
        <StringInput v-model="email" />
      </div>

      <div class="form-group">
        <Label label="Пароль" />
        <BaseInput type="password" v-model="password" />
      </div>

      <div class="form-group">
        <Label label="Повторите пароль" />
        <BaseInput type="password" v-model="password_confirmation" />
      </div>
    </template>

    <template #backside>
      <div class="backside">
        <SubmitButton sbm="Зарегистрироваться" />
      </div>
    </template>
  </BaseForm>
</template>

<style lang="sass" scoped>
.register-form
  width: 700px
  margin: 10vh auto 0
  padding: 32px
  display: flex
  flex-direction: column
  gap: 16px
  background: rgba(0, 0, 0, 0.6)
  backdrop-filter: blur(10px)
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4)
  color: var(--text-color)


  ::v-deep(.base-form__header)
    text-align: center
    font-size: 1.5rem
    font-weight: 700
    margin-bottom: 8px

  ::v-deep(.base-form__content)
    display: flex
    flex-direction: column
    font-size: 1rem
    gap: 14px

  .form-group
    display: flex
    flex-direction: column
    gap: 6px

  .form-row
    margin-top: 4px

  .backside
    display: flex
    align-items: center
    justify-content: flex-end
    margin-top: 20px

    .links
      display: flex
      gap: 16px

      a
        color: var(--text-color)
        font-size: 1rem
        text-decoration: none
        transition: opacity .2s

        &:hover
          color: var(--text-color)
          opacity: 0.7
</style>
