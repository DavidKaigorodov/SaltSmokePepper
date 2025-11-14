<script>
import BaseLayout from "@/app/layouts/BaseLayout.vue";
import { AboutSection } from "@/widgets/AboutSection";
import CatalogSection from "@/widgets/CatalogSection/ui/CatalogSection.vue";
import PartnerSection from "@/widgets/PartnerSection/ui/PartnerSection.vue";
import { PromoSection } from "@/widgets/PromoSection";

export default {
  components: {
    BaseLayout,
    PromoSection,
    AboutSection,
    PartnerSection,
    CatalogSection,
  },
};
</script>
<template>
  <BaseLayout>
    <PromoSection />
    <AboutSection />
    <CatalogSection />
    <PartnerSection />
  </BaseLayout>
</template>
