<script>
// import { useUserStore } from "@/entities/user/model/store";
import BaseLayout from "@/app/layouts/BaseLayout.vue";
import EditProfileForm from "@/features/editProfileForm/ui/EditProfileForm.vue";
import { Link } from "@inertiajs/vue3";


export default {
  components: { BaseLayout, EditProfileForm, Link },

  setup() {
    const userStore = useUserStore();

    if (!userStore.user && userStore.token) {
      userStore.fetchUser();
    }

    return { userStore };
  },
};
</script>

<template>
  <BaseLayout>
    <div class="profile-page">
      <div v-if="!userStore.isAuth" class="no-auth">
        <h2>Вы не авторизованы</h2>
        <Link href="/login" label="Войти" />
      </div>

      <EditProfileForm v-else />
    </div>
  </BaseLayout>
</template>

<style lang="sass" scoped>
.profile-page
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  margin-top: 40px
</style>
