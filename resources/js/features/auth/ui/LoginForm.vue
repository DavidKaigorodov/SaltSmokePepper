<script>

import Label from "@/shared/ui/label/Label.vue";
import BaseInput from "@/shared/ui/baseInput/BaseInput.vue";
import StringInput from "@/shared/ui/stringInput/StringInput.vue";
import Checkbox from "@/shared/ui/checkBox/CheckBox.vue";
import SubmitButton from "@/shared/ui/submitButton/SubmitButton.vue";
import BaseForm from "@/shared/ui/baseForm/BaseForm.vue";

export default {
  components: {
    BaseForm,
    Label,
    BaseInput,
    StringInput,
    Checkbox,
    SubmitButton,
  },

  data() {
    return {
      email: "",
      password: "",
      remember: false,
    };
  },

  methods: {
    async handleSubmit() {
      const auth = useUserStore();

      try {
        await auth.login(this.email, this.password);

        this.$router.push("/");
      } catch (e) {
        console.error("Ошибка входа:", e.response?.data || e);
      }
    },
  },
};
</script>

<template>
  <BaseForm class="login-form" @submit="handleSubmit">
    <template #header> Вход </template>

    <template #content>
      <div class="form-group">
        <Label label="Логин" />
        <StringInput v-model="email" />
      </div>

      <div class="form-group">
        <Label label="Пароль" />
        <BaseInput type="password" v-model="password" />
      </div>

      <div class="form-row">
        <Checkbox v-model="remember" label="Запомнить меня" />
      </div>
    </template>

    <template #backside>
      <div class="backside">
        <div class="links">
          <a href="#">Забыли пароль?</a>
          <a href="/register">Регистрация</a>
        </div>
        <SubmitButton sbm="Войти" />
      </div>
    </template>
  </BaseForm>
</template>

<style lang="sass" scoped>
.login-form
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
    justify-content: space-between
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
