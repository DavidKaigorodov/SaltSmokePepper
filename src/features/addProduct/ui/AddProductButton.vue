<script>
import BaseButton from "@/shared/ui/button/BaseButton.vue";

export default {
  components: { BaseButton },
  data() {
    return { count: 0 };
  },
  computed: {
    isActive() {
      return this.count > 0;
    },
  },
  methods: {
    handleClick() {
      if (!this.isActive) this.count = 1;
    },
    increment(event) {
      event.stopPropagation();
      this.count++;
    },
    decrement(event) {
      event.stopPropagation();
      if (this.count > 0) this.count--;
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
    <template v-if="!isActive">Заказать</template>

    <template v-else>
      <div class="counter">
        <button class="counter__btn" @click="decrement">−</button>
        <div class="counter__divider"></div>
        <div class="counter__value">{{ count }}</div>
        <div class="counter__divider"></div>
        <button class="counter__btn" @click="increment">+</button>
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
  justify-content: center
  height: 100%
  width: 100%
  gap: 10px

  &__btn
    display: flex
    align-items: center
    justify-content: center
    width: 32px
    height: 32px
    background: transparent
    border: none
    color: #fff
    font-size: 22px
    font-weight: 700
    cursor: pointer
    line-height: 1
    padding: 0
    transition: transform 0.2s ease

    &:hover
      transform: scale(1.2)

  &__divider
    width: 1px
    height: 24px
    background: #fff
    opacity: 0.6

  &__value
    font-size: 18px
    font-weight: 600
    text-align: center
    min-width: 100px
</style>
