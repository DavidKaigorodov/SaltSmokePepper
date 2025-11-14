<script>
import GuestLayout from "@/app/layouts/GuestLayout.vue";
import RegisterForm from "@/features/auth/ui/RegisterForm.vue";

export default {
  components: { RegisterForm, GuestLayout },
};
</script>

<template>
  <GuestLayout>
    <RegisterForm class="login-form" />
  </GuestLayout>
</template>
