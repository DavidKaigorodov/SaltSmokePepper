<script>
import ProductCard from "@/entities/product/ui/ProductCard.vue";
import ProductTypeBar from "@/entities/product/ui/ProductTypeBar.vue";
import { products as allProducts } from "@/entities/product/model/products";

export default {
  components: { ProductCard, ProductTypeBar },
  data() {
    return {
      sectionsToShow: [],
      currentIndex: 0,
      groupedProducts: {},
      types: [],
      observer: null,
    };
  },
  computed: {
    sectionKeys() {
      return Object.keys(this.groupedProducts);
    },
  },
  methods: {
    groupProducts() {
      const groups = {};
      const typesSet = new Set();
      allProducts.forEach((p) => {
        if (!groups[p.type]) groups[p.type] = [];
        groups[p.type].push(p);
        typesSet.add(p.type);
      });
      this.groupedProducts = groups;
      this.types = Array.from(typesSet);
    },

    loadNextSection() {
      const keys = this.sectionKeys;
      if (this.currentIndex >= keys.length) return;

      const type = keys[this.currentIndex];
      this.sectionsToShow.push({
        type,
        products: this.groupedProducts[type],
      });

      this.$nextTick(() => {
        const el = document.getElementById(`section-${type}`);
        if (el && this.$refs.typeBar) {
          this.$refs.typeBar.observeSection(el, type);
        }
      });

      this.currentIndex++;
    },

    async loadSection(type) {
      if (this.sectionsToShow.find((s) => s.type === type)) return;

      while (this.currentIndex < this.sectionKeys.length) {
        const nextType = this.sectionKeys[this.currentIndex];
        this.sectionsToShow.push({
          type: nextType,
          products: this.groupedProducts[nextType],
        });

        this.$nextTick(() => {
          const el = document.getElementById(`section-${nextType}`);
          if (el && this.$refs.typeBar) {
            this.$refs.typeBar.observeSection(el, nextType);
          }
        });

        this.currentIndex++;
        if (nextType === type) break;
      }

      await this.$nextTick();
    },

    setupObserver() {
      const options = { root: null, rootMargin: "200px", threshold: 0 };
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) this.loadNextSection();
        });
      }, options);

      this.$nextTick(() => {
        const sentinel = document.querySelector("#scroll-sentinel");
        if (sentinel) this.observer.observe(sentinel);
      });
    },
  },

  mounted() {
    this.groupProducts();
    this.loadNextSection();
    this.setupObserver();
  },

  beforeUnmount() {
    if (this.observer) this.observer.disconnect();
  },
};
</script>

<template>
  <section class="product-catalog" id="catalog">
    <div id="catalog-top-sentinel" style="height: 1px"></div>

    <h2 class="partners-title">Каталог</h2>

    <ProductTypeBar
      ref="typeBar"
      v-if="types.length"
      :types="types"
      :load-section="loadSection"
      top-sentinel="#catalog-top-sentinel"
      bottom-sentinel="#catalog-bottom-sentinel"
    />

    <div
      v-for="section in sectionsToShow"
      :key="section.type"
      :id="'section-' + section.type"
      class="product-section"
    >
      <h2 class="section-title">{{ section.type }}</h2>
      <div class="product-catalog__list">
        <ProductCard
          v-for="product in section.products"
          :key="product.id"
          :title="product.title"
          :price="product.price"
          :old_price="product.old_price"
          :weight="product.weight"
          :image="product.image"
          :description="product.description"
          :kcal="product.kcal"
          :proteins="product.proteins"
          :fats="product.fats"
          :carbs="product.carbs"
          :badge="product.badge"
        />
      </div>
    </div>

    <div id="scroll-sentinel" style="height: 1px"></div>

    <div id="catalog-bottom-sentinel" style="height: 1px"></div>
  </section>
</template>

<style lang="sass" scoped>
.product-catalog
  width: 100%
  height: auto
  display: flex
  justify-content: space-evenly
  flex-direction: column
  align-items: center

.partners-title
  font-size: 2rem
  font-weight: 700
  margin-bottom: 20px
  text-align: center
  color: var(--text-color)

.product-section
  width: 100%
  margin-bottom: 40px
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

.section-title
  font-size: 1.5rem
  font-weight: 600
  margin-bottom: 20px
  text-align: center
  color: var(--text-color)

.product-catalog__list
  display: grid
  gap: 20px
  width: 100%
  justify-content: center
  grid-template-columns: repeat(auto-fill, 300px)

  & > *
    justify-self: center
</style>
