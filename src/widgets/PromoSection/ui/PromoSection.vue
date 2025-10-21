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
      Все новости и
      <span class="highlight">акции</span>
    </PromoButton>
  </section>
</template>

<style lang="sass" scoped>
.promo-section
  padding-top: 60px

.promo-grid
  display: grid
  grid-template-columns: repeat(12, 1fr)
  grid-auto-rows: 60px
  gap: 20px
  width: 100%

.centered-button
  display: block
  margin: 50px auto 0 auto
</style>
