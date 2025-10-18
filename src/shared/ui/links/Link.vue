<script>
export default {
  props: {
    href: {
      type: String,
    },
    label: {
      type: String,
    },
    ico: {},
  },
};
</script>
<template>
  <router-link :to="href" class="link">
    {{ label }}
      <slot name="ico" />
    <slot />
  </router-link>
</template>

<style lang="sass" scoped>
.link
    all: unset
    color: var(--text-color)
    text-decoration: none
    cursor: pointer
    display: inline-block

    &:hover,
    &:focus
        color: var(--text-color-hover)
        text-decoration: none
</style>
