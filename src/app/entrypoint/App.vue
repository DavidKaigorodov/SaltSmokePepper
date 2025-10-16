<script setup>
// import HeaderWidget from '@/widgets/header/HeaderWidget.vue'
</script>

<template>
  <div class="app">
    <!-- <HeaderWidget /> -->
    <main>
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </main>
  </div>
</template>

