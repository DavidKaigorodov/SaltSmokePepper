<script>
import Footer from "@/widgets/footer/ui/Footer.vue";
import Header from "@/widgets/header/ui/Header.vue";
import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/dist/locomotive-scroll.css";

export default {
  components: { Header, Footer },
  props: { name: String },
  // mounted() {
  //   const container = this.$refs.scrollContainer;

  //   this.scroll = new LocomotiveScroll({
  //     el: container,
  //     smooth: true,
  //     inertia: 0.9,
  //     multiplier: 1.1,
  //     smartphone: { smooth: true },
  //     tablet: { smooth: true },
  //   });

  //   const sections = Array.from(container.querySelectorAll("section"));

  //   let timeout = null;
  //   let isSnapping = false;

  //   const onScrollHandler = (obj) => {
  //     if (isSnapping) return;
  //     if (timeout) clearTimeout(timeout);

  //     timeout = setTimeout(() => {
  //       const scrollY = obj.scroll.y;
  //       const viewportTop = scrollY;

  //       let closestSection = null;
  //       let minDistance = Infinity;

  //       for (const section of sections) {
  //         const rect = section.getBoundingClientRect();
  //         const sectionTop = rect.top + scrollY;
  //         const distance = Math.abs(viewportTop - sectionTop);

  //         if (distance < minDistance) {
  //           minDistance = distance;
  //           closestSection = section;
  //         }
  //       }

  //       if (!closestSection || minDistance < 1) return;

  //       isSnapping = true;

  //       this.scroll.scrollTo(closestSection, {
  //         offset: 0,
  //         duration: 600,
  //         easing: [0.25, 0.0, 0.35, 1.0],
  //         callback: () => {
  //           isSnapping = false;
  //         },
  //       });
  //     }, 300);
  //   };

  //   this.scroll.on("scroll", onScrollHandler);
  // },
  // beforeUnmount() {
  //   if (this.scroll) this.scroll.destroy();
  // },
};
</script>

<template>
  <div :class="['layout', name]">
    <Header />
    <div >
      <main class="main-content" >
        <slot />
      </main>
    </div>
    <Footer />

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

.main-content
  display: flex
  flex-direction: column
  padding: 0 100px
  justify-content: space-evenly

.main-content > section
  height: 100vh
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  position: relative
  transition: transform 0.4s ease
  justify-content: space-evenly

.main-content > section:first-child
  padding: 100px 0
  justify-content: start

.main-content > section:last-child
  height: 70vh

.video-bg
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  object-fit: cover
  z-index: -10
</style>
