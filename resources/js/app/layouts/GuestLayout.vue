<script>
import Header from "@/widgets/header/ui/Header.vue";

export default {
  components: { Header },
  props: { name: String },
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
.layout
  display: flex
  flex-direction: column
  min-height: 100vh
  overflow-x: hidden
  position: relative

.main-content
  display: flex
  flex-direction: column
  justify-content: space-evenly
  padding: 0 100px
  scroll-behavior: smooth
  flex-grow: 1
  box-sizing: border-box

.video-bg
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  object-fit: cover
  z-index: -10
</style>
