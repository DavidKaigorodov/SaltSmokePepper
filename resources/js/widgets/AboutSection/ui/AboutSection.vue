<script>
import { AboutCard, abouts } from "@/entities/about";

export default {
  components: { AboutCard },
  data() {
    return { abouts };
  },
};
</script>

<template>
  <section class="about-section">
    <h2 class="about-title">
      <span class="highlight">Ничего лишнего</span>, никаких консервантов
      <br />
      Только <span class="highlight">МЯСО</span>
    </h2>

    <div class="images-wrapper">
      <AboutCard v-for="about in abouts" :key="about.id" v-bind="about" />
    </div>

    <span class="description">
      Мы готовим мясо, которое говорит
      <span class="highlight">само за себя</span><br />
      Коптим, сушим и доводим до
      <span class="highlight">идеального вкуса</span> — без спешки,
      <span class="highlight">без химии</span>, с душой<br />
      Мы не гонимся за объемом — делаем мясо,
      <span class="highlight">которое не стыдно поставить на стол</span>
    </span>
  </section>
</template>

<style lang="sass" scoped>
.about-section
  display: flex
  flex-direction: column
  align-items: center
  justify-content: space-evenly
  text-align: center
  gap: 4vw

.about-title
  font-size: 2rem
  line-height: 1.3
  font-weight: 700
  margin: 0

.images-wrapper
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))
  width: 100%

.description
  font-size: 1.2rem
  line-height: 1.7

  margin: 0 auto
</style>
