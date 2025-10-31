<script>
import ImageCard from "@/shared/ui/imageCard/ImageCard.vue";
import AddProductButton from "@/features/addProduct/ui/AddProductButton.vue";
import ProductModal from "@/entities/product/ui/ProductModal.vue";
import ProductBadge from "./ProductBadge.vue";

export default {
  components: { ImageCard, AddProductButton, ProductModal, ProductBadge },
  props: {
    title: String,
    price: Number,
    old_price: Number,
    weight: String,
    image: String,
    description: String,
    kcal: Number,
    proteins: Number,
    fats: Number,
    carbs: Number,
    badge: String,
  },
  data() {
    return {
      showModal: false,
      count: 0,
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    updateCount(val) {
      this.count = val;
    },
  },
};
</script>

<template>
  <div class="product-card">
    <ProductBadge v-if="badge" :type="badge" />
    <div class="product-card__container" @click="openModal">
      <div class="product-card__image">
        <ImageCard :src="image" />
      </div>

      <div class="product-info">
        <div class="product-info__title">{{ title }}</div>
        <div class="product-info__bottom">
          <div class="product-info__price">
            <div class="product-info__old_price" v-if="old_price">
              {{ old_price }} ₽
            </div>
            <span :class="{ 'new-price': old_price }">{{ price }} ₽</span>
          </div>
          <div class="product-info__weight">{{ weight }}</div>
        </div>
      </div>

      <AddProductButton
        :price="price"
        :count="count"
        @update:count="updateCount"
        @click.stop
      />
    </div>

    <ProductModal
      :show="showModal"
      :title="title"
      :price="price"
      :weight="weight"
      :image="image"
      :description="description"
      :kcal="kcal"
      :proteins="proteins"
      :fats="fats"
      :carbs="carbs"
      :count="count"
      @update:count="updateCount"
      @close="closeModal"
    />
  </div>
</template>

<style lang="sass" scoped>
.product-card
  position: relative
  width: 300px
  height: 400px
  display: flex
  justify-content: center
  align-items: center
  cursor: pointer

  &__container
    padding: 20px
    width: 100%
    height: 100%
    background: rgba(0, 0, 0, 0.2)
    backdrop-filter: blur(8px)
    border-radius: 30px
    display: flex
    flex-direction: column
    align-items: center
    gap: 20px
    overflow: hidden

  &__image
    width: 100%
    aspect-ratio: 4 / 3
    overflow: hidden
    border-radius: 15px
    display: flex
    justify-content: center
    align-items: center

    img
      width: 100%
      height: 100%
      object-fit: cover
      object-position: center

.product-info
  width: 100%
  background: rgba(60, 60, 60, 1)
  border-radius: 16px
  padding: 12px 16px
  color: var(--text-color)
  display: flex
  flex-direction: column
  justify-content: space-between

  &__title
    font-size: 1.1rem
    font-weight: 600
    color: var(--text-color-hover)
    margin-bottom: 8px

  &__bottom
    display: flex
    justify-content: space-between
    align-items: center
    font-size: 16px

  &__price
    display: flex
    font-size: 1rem
    align-items: center
    font-weight: 700
    color: var(--text-color)

  &__old_price
    margin-right: 8px
    font-size: 1rem
    text-decoration: line-through
    color: rgba(255,255,255,0.6)

  span.new-price
    color: var(--text-color-hover)

  &__weight
    font-size: 1rem
    color: rgba(255, 255, 255, 0.6)
</style>
