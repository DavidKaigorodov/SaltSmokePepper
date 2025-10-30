<script>
export default {
  props: {
    types: Array,
    loadSection: Function,
  },
  data() {
    return {
      activeType: null,
      showBar: false,
      observer: null,
      catalogObserver: null,
    };
  },
  mounted() {
    this.setupCatalogObserver();
    this.setupObserver();
  },
  beforeUnmount() {
    if (this.observer) this.observer.disconnect();
    if (this.catalogObserver) this.catalogObserver.disconnect();
  },
  methods: {
    async scrollToType(type) {
      if (this.loadSection) await this.loadSection(type);
      await this.$nextTick();

      const el = document.getElementById(`section-${type}`);
      console.log("scrollToType -> el", el);
      if (!el) return;

      const prev = el.style.scrollMarginTop;
      el.style.scrollMarginTop = "150px";

      el.scrollIntoView({ behavior: "smooth", block: "start" });

      setTimeout(() => {
        el.style.scrollMarginTop = prev || "";
      }, 1200);

      this.activeType = type;
    },

    setupCatalogObserver() {
      const catalog = document.querySelector(".product-catalog");
      if (!catalog) return;

      this.catalogObserver = new IntersectionObserver(
        ([entry]) => {
          this.showBar = entry.isIntersecting;
        },
        { root: null, threshold: 0.05 }
      );

      this.catalogObserver.observe(catalog);
    },

    setupObserver() {
      const options = { root: null, rootMargin: "-50% 0px -50%", threshold: 0 };
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) this.activeType = entry.target.dataset.type;
        });
      }, options);

      this.$nextTick(() => {
        this.types.forEach((type) => {
          const el = document.getElementById(`section-${type}`);
          if (el) {
            el.dataset.type = type;
            this.observer.observe(el);
          }
        });
      });
    },

    observeSection(el, type) {
      if (!el) return;
      el.dataset.type = type;
      if (this.observer) this.observer.observe(el);
    },
  },
};
</script>

<template>
  <transition name="floating-fade">
    <div v-if="showBar && types.length" class="product-type-bar floating">
      <button
        v-for="type in types"
        :key="type"
        class="product-type-bar__button"
        :class="{ active: activeType === type }"
        @click="scrollToType(type)"
      >
        {{ type }}
      </button>
    </div>
  </transition>
</template>

<style lang="sass" scoped>
.product-type-bar
  display: flex
  width: 80%
  justify-content: center
  gap: 12px
  flex-wrap: nowrap
  padding: 8px 12px
  // background: rgba(0, 0, 0, 0.3)
  // border-radius: 16px
  // backdrop-filter: blur(3px)
  transition: all 0.5s ease

.product-type-bar.floating
  position: fixed
  top: 70px
  left: 50%
  transform: translateX(-50%)
  z-index: 999

.product-type-bar__button
  padding: 0.5rem 1rem
  border-radius: 12px
  border: 1px solid var(--text-color)
  background: rgba(0, 0, 0, 0.6)
  color: var(--text-color)
  font-weight: 600
  backdrop-filter: blur(3px)
  cursor: pointer
  transition: all 0.3s ease

  &:hover
    filter: brightness(1.1)

  &.active
    border: 1px solid var(--text-color-hover)
    color: var(--text-color-hover)

.floating-fade-enter-active,
.floating-fade-leave-active
  transition: opacity 0.5s ease, transform 0.5s ease

.floating-fade-enter-from
  opacity: 0
  transform: translateY(20px)

.floating-fade-enter-to
  opacity: 1
  transform: translateY(0)

.floating-fade-leave-from
  opacity: 1
  transform: translateY(0)

.floating-fade-leave-to
  opacity: 0
  transform: translateY(20px)
</style>
