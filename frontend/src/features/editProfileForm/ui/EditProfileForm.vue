<script>
import { ref, onMounted } from "vue";
import BaseForm from "@/shared/ui/baseForm/BaseForm.vue";
import SubmitButton from "@/shared/ui/submitButton/SubmitButton.vue";
import {
  fetchUser,
  saveUser,
  user,
  loading,
} from "@/entities/user/model/userStore.js";
import UserInfoForm from "@/entities/user/ui/UserInfoForm.vue";

export default {
  components: { BaseForm, UserInfoForm, SubmitButton },
  setup() {
    const formData = ref({ ...user.value });

    onMounted(() => {
      if (!user.value) fetchUser();
      else formData.value = { ...user.value };
    });

    const handleSubmit = async (e) => {
      e.preventDefault();
      await saveUser(formData.value);
    };

    return { formData, loading, handleSubmit };
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
    </template>
  </BaseForm>
</template>
<style lang="sass">
.edit-profile-form
    width: 1000px
</style>
