<script>
import { ref, onMounted } from "vue";
import BaseForm from "@/shared/ui/baseForm/BaseForm.vue";
import SubmitButton from "@/shared/ui/submitButton/SubmitButton.vue";
import BaseButton from "@/shared/ui/button/BaseButton.vue";
import UserInfoForm from "@/entities/user/ui/UserInfoForm.vue";

export default {
  components: { BaseForm, UserInfoForm, SubmitButton, BaseButton },

  setup() {
    const userStore = useUserStore();
    const formData = ref({});

    onMounted(async () => {
      await userStore.fetchUser();
      if (userStore.user) {
        formData.value = JSON.parse(JSON.stringify(userStore.user));
      }
    });

    const handleSubmit = async () => {
      const success = await userStore.updateUser(formData.value);
      if (success) alert("Профиль обновлён!"); // TODO поменять на всплывающее сообщенире
    };

    const logout = () => {
      userStore.logout();
      window.location.href = "/";
    };

    return {
      formData,
      handleSubmit,
      logout,
      loading: userStore.loading,
    };
  },
};
</script>

<template>
  <BaseForm class="edit-profile-form" @submit="handleSubmit">
    <template #header>Профиль</template>

    <template #content>
      <UserInfoForm v-model="formData" />
    </template>

    <template #backside>
      <SubmitButton
        :disabled="loading"
        :sbm="loading ? 'Сохранение...' : 'Сохранить'"
      />

      <BaseButton class="logout" @click="logout"> Выйти </BaseButton>
    </template>
  </BaseForm>
</template>

<style lang="sass">
.edit-profile-form
  width: 1000px
  .logout
    min-width: 160px
    padding: 5px 15px
    height: 43px
    background: transparent
    color: red
</style>
