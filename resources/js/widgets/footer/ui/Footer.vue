<script>
import EnvelopeIco from "@/shared/ui/icons/envelopeIco/EnvelopeIco.vue";
import Logo from "@/shared/ui/icons/logo/Logo.vue";
import PhoneIco from "@/shared/ui/icons/phoneIco/PhoneIco.vue";
import TgIco from "@/shared/ui/icons/tgIco/TgIco.vue";
import VkIco from "@/shared/ui/icons/vkIco/VkIco.vue";
import { Link } from "@inertiajs/vue3";

export default {
  components: {
    Link,
    Logo,
    PhoneIco,
    EnvelopeIco,
    TgIco,
    VkIco,
  },
  data() {
    return {
      menu: [
        { label: "Главная", href: "/home" },
        { label: "Доставка", href: "/delivery" },
        { label: "Отзывы", href: "/reviews" },
        { label: "Каталог", href: "/catalog" },
        { label: "Новости и акции", href: "/news" },
        { label: "О нас", href: "/about" },
      ],
    };
  },
};
</script>

<template>
  <footer class="site-footer" role="contentinfo">
    <div class="site-footer__inner">
      <div class="footer-content">
        <div class="footer-logo">
          <Logo />
        </div>

        <div class="footer-contacts">
          <div class="contact-item">
            <PhoneIco />
            <Link href="tel:+79059087997" label="+7 (905) 908-79-97" />
          </div>

          <div class="contact-item">
            <EnvelopeIco />
            <Link
              href="mailto:saltsmokepepper@gmail.com"
              label="saltsmokepepper@gmail.com"
            />
          </div>

          <div class="socials">
            <div class="social-item">
              <TgIco />
              <a href="https://t.me/saltsmokepepper" target="_blank">
                saltsmokepepper
              </a>
            </div>
            <div class="social-item">
              <VkIco />
              <a href="https://vk.com/saltsmokepepper" target="_blank">
                saltsmokepepper
              </a>
            </div>
          </div>
        </div>

        <nav class="footer-menu">
          <div v-for="item in menu" :key="item.href" class="menu-item">
            <Link :href="item.href" :label="item.label" />
          </div>
        </nav>
      </div>

      <div class="footer-divider"></div>

      <div class="footer-bottom">
        <span>© 2025 Соль Дым Перец. Все права защищены.</span>
        <span class="privacy">
          Команда Соль Дым Перец уважает посетителей сайта и гарантирует
          <a class="policy" href="policy">конфиденциальность</a> предоставленной информации
        </span>
      </div>
    </div>
  </footer>
</template>

<style lang="sass" scoped>
.site-footer
  background: rgba(10, 8, 8, 0.85)
  border-top: 1px solid rgba(255, 255, 255, 0.15)
  height: 30vh
  display: flex
  flex-direction: column
  justify-content: space-between
  padding: 40px 0

  &__inner
    display: flex
    flex-direction: column
    justify-content: space-between
    height: 100%
    margin: 0 auto
    padding: 0 60px


.footer-content
  display: grid
  grid-template-columns: 200px 1fr 1fr
  align-items: flex-start
  gap: 60px


.footer-logo
  display: flex
  align-items: end
  justify-content: end


.footer-contacts
  display: flex
  flex-direction: column
  gap: 12px

  .contact-item
    display: flex
    align-items: center
    gap: 8px

  .socials
    display: flex
    gap: 20px

    .social-item
      display: flex
      align-items: center
      gap: 10px

  a
    color: var(--text-color)
    text-decoration: none
    font-size: 14px
    transition: color 0.2s ease

    &:hover
      color: var(--text-color-hover)

  svg
    width: 18px
    height: 18px


.footer-menu
  display: grid
  grid-template-columns: repeat(2, max-content)
  gap: 10px 40px
  align-content: flex-start

.footer-divider
  height: 1px
  background: rgba(255, 255, 255, 0.15)

.footer-bottom
  display: flex
  justify-content: space-between
  text-align: center
  color: rgba(255, 255, 255, 0.55)
  line-height: 1.4
  margin-top: 12px
  display: flex;
  flex-direction: column

  .privacy
    margin-top: 4px
    font-size: 12px
    .policy
      color: rgba(255, 255, 255, 0.55)
      font-size: 12px
</style>
