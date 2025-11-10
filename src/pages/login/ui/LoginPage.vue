<script>
import GuestLayout from "@/app/layouts/GuestLayout.vue";
import LoginForm from "@/features/auth/ui/LoginForm.vue";

export default {
  components: { LoginForm, GuestLayout },
};
</script>

<template>
  <GuestLayout>
    <LoginForm class="login-form" />
  </GuestLayout>
</template>

<style lang="sass" scoped>
.login-page
  position: relative
  width: 100%
  height: 100vh
  display: flex
  align-items: center
  justify-content: center
  overflow: hidden
</style>
