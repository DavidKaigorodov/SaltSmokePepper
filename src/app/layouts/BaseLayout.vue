<script>
import Footer from "@/widgets/footer/ui/Footer.vue";
import Header from "@/widgets/header/ui/Header.vue";

export default {
  components: { Header, Footer },
  props: { name: String },
  data() {
    return {
      showScrollTop: false,
      appEl: null,
    };
  },
  mounted() {
    this.appEl = document.querySelector("#app");
    if (this.appEl) {
      this.appEl.addEventListener("scroll", this.handleScroll, {
        passive: true,
      });
      this.handleScroll();
    }
  },
  beforeUnmount() {
    if (this.appEl) this.appEl.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    scrollToTop() {
      if (this.appEl) {
        this.appEl.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    handleScroll() {
      if (!this.appEl) return;
      const scrollY = this.appEl.scrollTop;
      this.showScrollTop = scrollY > 150;
    },
  },
};
</script>

<template>
  <div :class="['layout', name]">
    <Header />

    <main class="main-content">
      <slot />
    </main>

    <Footer />

    <video autoplay muted loop playsinline class="video-bg">
      <source src="@/app/assets/bg-video.webm" type="video/webm" />
    </video>

    <transition name="fade">
      <button
        v-if="showScrollTop"
        class="scroll-btn up"
        title="Наверх"
        @click="scrollToTop"
      >
        ↑
      </button>
    </transition>
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


.main-content > section
  min-height: 100vh
  display: flex
  flex-direction: column
  justify-content: space-evenly
  align-items: center
  position: relative
  transition: transform 0.4s ease

.main-content > section:first-child
  padding-top: 80px


.main-content > section:last-child
  min-height: 70vh
  

.video-bg
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  object-fit: cover
  z-index: -10

.scroll-btn
  position: fixed
  bottom: 40px
  right: 40px
  width: 48px
  height: 48px
  border: none
  border-radius: 50%
  background: rgba(255, 255, 255, 0.25)
  color: white
  font-size: 22px
  font-weight: 700
  cursor: pointer
  backdrop-filter: blur(8px)
  transition: all 0.3s ease
  box-shadow: 0 4px 10px rgba(0,0,0,0.3)
  z-index: 1000

  &:hover
    background: rgba(255, 255, 255, 0.45)
    transform: scale(1.1)

.fade-enter-active, .fade-leave-active
  transition: opacity 0.4s ease, transform 0.4s ease

.fade-enter-from, .fade-leave-to
  opacity: 0
  transform: translateY(10px)
</style>
