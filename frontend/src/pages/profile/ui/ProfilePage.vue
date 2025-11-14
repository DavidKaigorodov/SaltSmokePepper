<script>
import BaseLayout from "@/app/layouts/BaseLayout.vue";
import EditProfileForm from "@/features/editProfileForm/ui/EditProfileForm.vue";

export default {
  components: { BaseLayout, EditProfileForm },
};
</script>

<template>
  <BaseLayout>
    <div class="profile-page">
      <EditProfileForm />
    </div>
  </BaseLayout>
</template>

<style lang="sass" scoped>
.profile-page
  display: flex
  align-items: center
  justify-content: center
</style>
