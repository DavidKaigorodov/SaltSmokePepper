<script>
import Link from "@/shared/ui/links/Link.vue";
import Logo from "@/shared/ui/icons/logo/Logo.vue";
import CartIco from "@/shared/ui/icons/cartIco/CartIco.vue";
import BaseButton from "@/shared/ui/button/BaseButton.vue";

export default {
  components: { Link, Logo, CartIco, BaseButton },
  data() {
    return {
      menu: [
        { label: "Главная", href: "/home" },
        { label: "Доставка", href: "/delivery" },
        { label: "Отзывы", href: "/reviews" },
        { label: "Каталог", href: "#catalog" },
        { label: "Новости и акции", href: "/news" },
        { label: "О нас", href: "/about" },
      ],
    };
  },
  computed: {
    cartCount() {
      return 0;
    },
  },
  methods: {
    handleMenuClick(item) {
      if (item.href.startsWith("#")) {
        const el = document.querySelector(item.href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        this.$router.push(item.href);
      }
    },
  },
};
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="left-menu">
        <div class="header_logo">
          <Link href="/home">
            <Logo />
          </Link>
        </div>

        <nav class="menu">
          <BaseButton
            v-for="item in menu"
            :key="item.href"
            class="menu-link"
            @click="handleMenuClick(item)"
          >
            {{ item.label }}
          </BaseButton>
        </nav>
      </div>

      <div class="right-actions">
        <div class="auth-links">
          <Link href="/login" label="Войти" class="auth-link" />
          <Link href="/register" label="Регистрация" class="auth-link" />
        </div>
        <div class="cart-wrapper">
          <Link href="/cart" class="cart-link">
            <template #ico>
              <CartIco />
            </template>
            <span class="cart-count">{{ cartCount }}</span>
          </Link>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="sass">
.header
  position: fixed
  top: 0
  left: 0
  height: 60px
  width: 100%
  z-index: 888

  .container
    display: flex
    height: 100%
    justify-content: space-between
    align-items: center
    background: rgba(0, 0, 0, 0.5)
    backdrop-filter: blur(8px)
    padding: 0 100px

    .left-menu
      display: flex
      align-items: center
      gap: clamp(10px, 3vw, 50px)

      .menu
        display: flex
        align-items: center
        flex-wrap: wrap
        gap: clamp(5px, 2vw, 40px)
        padding-left: 0

        .menu-link
          background: none
          border: none
          color: var(--text-color)
          font-size: 1rem
          font-weight: 500
          cursor: pointer
          transition: color 0.3s ease
          white-space: nowrap

          &:hover
            color: var(--text-color-hover)

    .right-actions
      display: flex
      align-items: center
      gap: clamp(10px, 2.5vw, 40px)

      .auth-links
        display: flex

        align-items: center
        gap: clamp(10px, 2vw, 30px)

        .auth-link
          font-size: 1rem
          color: var(--text-color)
          transition: color 0.3s ease

          &:hover
            color: var(--text-color-hover)

      .cart-wrapper
        .cart-link
          display: flex
          align-items: center
          background: var(--text-color-hover)
          border-radius: 34px
          padding: 4px 10px
          gap: clamp(5px, 1vw, 10px)

          &:hover,
          &:focus
            color: var(--text-color)

          .cart-icon
            font-size: clamp(16px, 1.2vw, 20px)

          .cart-count
            display: inline-block
            background: var(--text-color)
            color: var(--text-color-dark)
            border-radius: 12px
            min-width: 20px
            height: 20px
            line-height: 20px
            text-align: center
            font-size: 10px

#catalog
  scroll-margin-top: 150px
</style>
