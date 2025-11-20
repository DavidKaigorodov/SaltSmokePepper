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
    async handleSubmit() {
      const userStore = useUserStore();

      const payload = {
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
      };

      const success = await userStore.register(payload);

      if (success) {
        alert("Регистрация успешна!"); //TODO поменять на всплывающее сообщение
        this.$router.push("/login");
      }
    },
  },
};
</script>

<template>
  <BaseForm class="register-form" @submit="handleSubmit">
    <template #header>Регистрация</template>

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

  .form-group
    display: flex
    flex-direction: column
    gap: 6px

  .backside
    display: flex
    justify-content: flex-end
    margin-top: 20px
</style>
