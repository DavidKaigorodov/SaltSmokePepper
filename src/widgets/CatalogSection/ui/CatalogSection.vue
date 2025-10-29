<script>
import ProductCard from "@/entities/product/ui/ProductCard.vue";
import { products } from "@/entities/product/modal/products";

export default {
  components: { ProductCard },
  data() {
    return { products };
  },
};
</script>

<template>
  <section class="product-catalog">
    <h1 class="partners-title">Продукция</h1>
    <div class="product-catalog-grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :title="product.title"
        :price="product.price"
        :weight="product.weight"
        :image="product.image"
      />
    </div>
  </section>
</template>

<style lang="sass" scoped>
.product-catalog-grid
  display: grid
  grid-template-columns: repeat(5, 1fr)
  grid-auto-rows:400px
  gap: 20px
  width: 100%
  box-sizing: border-box
</style>
