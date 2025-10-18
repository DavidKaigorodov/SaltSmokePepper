<script setup>
// import HeaderWidget from '@/widgets/header/HeaderWidget.vue'
</script>

<template>
  <div class="app">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
  </div>
</template>

