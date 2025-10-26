<script>
import { partners } from "@/entities/partners";
import PartnerCarousel from "@/widgets/PartnerCarousel/ui/PartnerCarousel.vue";

export default {
  components: { PartnerCarousel },
  data() {
    return {
      partners,
    };
  },
};
</script>
<template>
  <section class="partners-section">
    <h1 class="partners-title">Наши партнёры</h1>
    <PartnerCarousel :partners="partners" />
  </section>
</template>

<style lang="sass" scoped>
.partners-section
  text-align: center
  display: flex
  justify-content: space-evenly
</style>
