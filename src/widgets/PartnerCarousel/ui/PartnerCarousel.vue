<script>
import Carousel from "@/shared/ui/carousel/Carousel.vue";
import ImageCard from "@/shared/ui/imageCard/ImageCard.vue";

export default {
  components: { Carousel, ImageCard },
  props: {
    partners: { type: Array, required: true },
  },
};
</script>

<template>
  <Carousel :items="partners" :visibleCount="3" :gap="20">
    <template #default="{ item }">
      <div class="carousel-item-wrapper">
        <ImageCard :src="item.image" :alt="item.name" />
      </div>
    </template>
  </Carousel>
</template>

<style lang="sass" scoped>
.carousel-item-wrapper
  width: 250px
  height: 250px
  position: relative
  flex-shrink: 0
</style>
