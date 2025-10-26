<script>
import BaseLayout from "@/app/layouts/BaseLayout.vue";
import { AboutSection } from "@/widgets/AboutSection";
import PartnerSection from "@/widgets/PartnerSection/ui/PartnerSection.vue";
import { PromoSection } from "@/widgets/PromoSection";

export default {
  components: {
    BaseLayout,
    PromoSection,
    AboutSection,
    PartnerSection,
  },
};
</script>
<template>
  <BaseLayout>
    <PromoSection />
    <AboutSection />
    <PartnerSection />
  </BaseLayout>
</template>
