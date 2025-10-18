<script>
import Header from "@/widgets/header/ui/Header.vue";
export default {
  components: {
    Header,
  },
  props: {
    name: String,
  },
};
</script>

<template>
  <div :class="['layout', name]">
    <Header />
    <main class="main-content">
      <slot />
    </main>
    
    <video autoplay muted loop playsinline class="video-bg">
      <source src="@/app/assets/bg-video.webm" type="video/webm" />
    </video>
  </div>
</template>

<style lang="sass">
.video-bg
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
</style>
