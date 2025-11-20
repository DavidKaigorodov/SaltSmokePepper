<script>
import BaseButton from "@/shared/ui/button/BaseButton.vue";

export default {
  components: { BaseButton },
  props: {
    price: Number,
    count: { type: Number, required: true },
  },
  emits: ["update:count"],
  computed: {
    isActive() {
      return this.count > 0;
    },
    totalPrice() {
      return this.price * this.count;
    },
    displayValue() {
      return `${this.count} за ${this.totalPrice} ₽`;
    },
  },
  methods: {
    handleClick() {
      if (!this.isActive) this.$emit("update:count", 1);
    },
    increment() {
      this.$emit("update:count", this.count + 1);
    },
    decrement() {
      if (this.count > 0) this.$emit("update:count", this.count - 1);
    },
  },
};
</script>

<template>
  <BaseButton
    class="product-button"
    :class="{ 'product-button--active': isActive }"
    @click="handleClick"
  >
    <template v-if="!isActive">
      <slot>Заказать</slot>
    </template>

    <template v-else>
      <div class="counter">
        <div class="counter__side counter__left" @click.stop="decrement">−</div>
        <div class="counter__value">{{ displayValue }}</div>
        <div class="counter__side counter__right" @click.stop="increment">
          +
        </div>
      </div>
    </template>
  </BaseButton>
</template>

<style lang="sass" scoped>
.product-button
  width: 100%
  height: 48px
  box-sizing: border-box
  background: var(--text-color-hover)
  color: var(--text-color)
  font-weight: 600
  letter-spacing: 0.5px
  border-radius: 12px
  display: flex
  align-items: center
  justify-content: center
  padding: 0 1.2rem
  transition: all 0.3s ease
  cursor: pointer

  &:hover
    filter: brightness(1.1)

  &--active
    background: rgba(0, 0, 0, 0.3)
    backdrop-filter: blur(6px)
    border: 1px solid #fff
    color: #fff

.counter
  display: flex
  align-items: center
  justify-content: space-between
  height: 100%
  width: 100%
  text-align: center

  &__side
    flex: 1
    display: flex
    align-items: center
    justify-content: center
    cursor: pointer
    font-size: 22px
    font-weight: 700
    user-select: none
    transition: transform 0.2s ease

  &__left
    border-right: 1px solid rgba(255,255,255,0.6)

  &__right
    border-left: 1px solid rgba(255,255,255,0.6)

  &__value
    flex: 2
    font-size: 16px
    font-weight: 600
    display: flex
    align-items: center
    justify-content: center
</style>
