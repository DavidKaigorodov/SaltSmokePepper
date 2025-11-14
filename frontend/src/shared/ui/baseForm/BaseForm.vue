<script>
export default {
  emits: ["submit"],
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.$emit("submit");
    },
  },
};
</script>

<template>
  <form class="base-form" @submit="handleSubmit">
    <header class="base-form__header">
      <slot name="header"></slot>
    </header>

    <section class="base-form__content">
      <slot name="content"></slot>
    </section>

    <footer class="base-form__backside">
      <slot name="backside"></slot>
    </footer>
  </form>
</template>

<style lang="sass">
.base-form
  display: flex
  flex-direction: column
  gap: 16px
  padding: 32px
  border-radius: 20px
  background: rgba(0, 0, 0, 0.5)
  backdrop-filter: blur(8px)

.base-form__header
  text-align: center

.base-form__content
  display: flex
  flex-direction: column
  gap: 14px

.base-form__backside
  margin-top: 8px
  opacity: 0.8
  a
    color: var(--text-color)
    text-decoration: none
    &:hover
      opacity: 1
</style>
