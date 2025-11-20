<script>
import FireIco from "@/shared/ui/icons/fireIco/FireIco.vue";
import StarIco from "@/shared/ui/icons/starIco/StarIco.vue";

export default {
  components: {
    FireIco,
    StarIco,
  },
  props: {
    type: {
      type: String,
      required: true,
      validator: (val) => ["hot", "new"].includes(val),
    },
  },
  computed: {
    badgeClass() {
      return this.type === "hot" ? "product-badge--hot" : "product-badge--new";
    },
  },
};
</script>

<template>
  <div :class="['product-badge', badgeClass]">
    <span v-if="type === 'hot'" class="icon-wrapper">
      <FireIco />
    </span>
    <span v-else-if="type === 'new'" class="icon-wrapper">
      <StarIco />
    </span>
  </div>
</template>

<style scoped lang="sass">
.product-badge
  position: absolute
  top: -7px
  right: -7px
  width: 40px
  height: 40px
  border-radius: 50%
  display: flex
  justify-content: center
  align-items: center
  font-weight: bold
  padding: 0
  margin: 0
  z-index: 10

.icon-wrapper
  display: flex
  justify-content: center
  align-items: center
  width: 100%
  height: 100%

.product-badge--hot
  background-color: var(--text-color-hover)
  justify-content: center
  align-items: center

.product-badge--new
  background-color: #FFB400

</style>
