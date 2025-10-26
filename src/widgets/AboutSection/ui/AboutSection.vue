<script>
import { AboutCard, abouts } from "@/entities/about";
export default {
  components: {
    AboutCard,
  },
  data() {
    return { abouts };
  },
};
</script>

<template>
  <section class="about-section">
    <h1>
      <span class="highlight">Ничего лишнего</span>, никаких консервантов
      <br />
      Только <span class="highlight">МЯСО</span>
    </h1>
    <div class="images-wrapper">
      <AboutCard v-for="about in abouts" :key="about.id" v-bind="about" />
    </div>

    <span class="description">
      Мы готовим мясо, которое говорит
      <span class="highlight">само за себя</span><br />
      Коптим, сушим и доводим до
      <span class="highlight">идеального вкуса</span> - без спешки,
      <span class="highlight">без химии</span>, с душой<br />
      Мы не гонимся за объемом - делаем мясо,
      <span class="highlight">которое не стыдно поставить на стол</span>
    </span>
  </section>
</template>

<style lang="sass" scoped>
.about-section
  text-align: center;
  display: flex;
  justify-content: space-evenly;

  .images-wrapper
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    justify-content: start;
    justify-items: center;
    gap: 40px;
    margin: 40px 0;
    width: 100%;

  .description
    font-size: 20px;
    line-height: 1.6;
</style>
