<script>
import { PromoCard, promos } from "@/entities/promo";
import PromoButton from "@/features/showPromos/ui/PromoButton.vue";

export default {
  components: { PromoCard, PromoButton },
  data() {
    return { promos };
  },
};
</script>

<template>
  <section class="promo-section">
    <div class="promo-grid">
      <PromoCard
        v-for="promo in promos"
        :key="promo.id"
        v-bind="promo"
        :class="`promo-card--${promo.size}`"
      />
    </div>
    <PromoButton class="centered-button">
      Все новости и&nbsp;
      <span class="highlight">акции</span>
    </PromoButton>
  </section>
</template>

<style lang="sass" scoped>
.promo-section
  width: 100%

.promo-grid
  display: grid
  grid-template-columns: repeat(4, 1fr)
  grid-template-rows: repeat(2, 1fr)
  grid-template-areas: 'A A B C' 'A A D E'

  gap: 14px
  width: 100%
  height: calc((100vw - 200px) / 7 * 3)

  .promo-card--large
    grid-area: A

.centered-button
  display: flex
  justify-content: center
  align-items: center
  width: 250px
</style>
