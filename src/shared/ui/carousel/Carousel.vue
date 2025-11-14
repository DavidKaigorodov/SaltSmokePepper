<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    visibleCount: {
      type: Number,
      default: 3,
    },
    gap: {
      type: Number,
      default: 20,
    },
  },
  data() {
    return {
      currentIndex: 0,
      itemWidth: 250,
      isTransitioning: false,
      loopedItems: [],
    };
  },
  computed: {
    trackStyle() {
      const shift = this.currentIndex * (this.itemWidth + this.gap);
      return {
        transform: `translateX(-${shift}px)`,
        transition: this.isTransitioning ? "transform 0.5s ease" : "none",
      };
    },
  },
  mounted() {
    const n = this.visibleCount;
    this.loopedItems = [
      ...this.items.slice(-n),
      ...this.items,
      ...this.items.slice(0, n),
    ];
    this.currentIndex = n;
    if (this.$refs.wrapper) {
      this.$refs.wrapper.style.width =
        this.visibleCount * (this.itemWidth + this.gap) - this.gap + "px";
    }
  },
  methods: {
    next() {
      if (this.isTransitioning) return;
      this.isTransitioning = true;
      this.currentIndex++;
    },
    prev() {
      if (this.isTransitioning) return;
      this.isTransitioning = true;
      this.currentIndex--;
    },
    onTransitionEnd() {
      this.isTransitioning = false;
      const n = this.items.length;
      const v = this.visibleCount;

      if (this.currentIndex >= n + v) this.currentIndex = v;
      if (this.currentIndex < v) this.currentIndex = n + v - 1;
    },
  },
};
</script>

<template>
  <div class="carousel">
    <button class="arrow left" @click="prev"><</button>

    <div class="carousel-track-wrapper" ref="wrapper">
      <div
        class="carousel-track"
        :style="trackStyle"
        @transitionend="onTransitionEnd"
      >
        <div
          v-for="(item, index) in loopedItems"
          :key="index"
          class="carousel-item"
        >
          <slot :item="item" />
        </div>
      </div>
    </div>

    <button class="arrow right" @click="next">></button>
  </div>
</template>

<style lang="sass" scoped>
.carousel
  display: flex
  align-items: center
  gap: 10px

  .carousel-track-wrapper
    overflow: hidden

    .carousel-track
      display: flex
      gap: 20px

      .carousel-item
        flex: 0 0 auto
        width: 250px
        height: 250px
        position: relative

  .arrow
    background: none
    border: none;
    color: #fff
    font-size: 3rem
    cursor: pointer
    display: flex
    align-items: center
    justify-content: center
</style>
