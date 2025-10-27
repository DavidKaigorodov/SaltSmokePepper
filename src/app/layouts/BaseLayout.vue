<script>
import Header from "@/widgets/header/ui/Header.vue";
import LocomotiveScroll from "locomotive-scroll";

export default {
  components: { Header },
  props: { name: String },

  mounted() {
    this.scroll = new LocomotiveScroll({
      el: this.$el,
      smooth: true,
      inertia: 0.85,
      multiplier: 1.1,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    const sections = Array.from(this.$el.querySelectorAll("section"));

    let timeout = null;
    this.scroll.on("scroll", (obj) => {
      if (timeout) clearTimeout(timeout);

      timeout = setTimeout(() => {
        const scrollY = obj.scroll.y;
        let closestSection = sections[0];
        let minDistance = Infinity;

        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + scrollY;
          const distance = Math.abs(scrollY - sectionTop);
          if (distance < minDistance) {
            minDistance = distance;
            closestSection = section;
          }
        });
        if (closestSection) {
          this.scroll.scrollTo(closestSection, {
            duration: 800,
            easing: [0.25, 0.0, 0.35, 1.0],
          });
        }
      }, 100);
    });
  },

  beforeUnmount() {
    if (this.scroll) this.scroll.destroy();
  },
};
</script>

<template>
  <div :class="['layout', name]" data-scroll-container>
    <Header />

    <main class="main-content" data-scroll-section>
      <slot />
    </main>

    <video autoplay muted loop playsinline class="video-bg">
      <source src="@/app/assets/bg-video.webm" type="video/webm" />
    </video>
  </div>
</template>

<style lang="sass">
.layout
  position: relative
  min-height: 100vh
  overflow: hidden

  .main-content
    display: flex

.main-content > section
  min-height: 100vh
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  position: relative

.video-bg
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  object-fit: cover
  z-index: -1
</style>
