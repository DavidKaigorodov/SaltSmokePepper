<script>
import AddProductButton from "@/features/addProduct/ui/AddProductButton.vue";

export default {
  components: { AddProductButton },
  emits: ["close", "update:count"],
  props: {
    title: String,
    price: Number,
    weight: String,
    image: String,
    description: String,
    kcal: Number,
    proteins: Number,
    fats: Number,
    carbs: Number,
    show: Boolean,
    count: {
      type: Number,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
      document.body.style.overflow = "";
    },
    updateCount(val) {
      this.$emit("update:count", val);
    },
  },
  watch: {
    show(val) {
      if (val) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    },
  },
};
</script>

<template>
  <teleport to="body">
    <transition name="fade">
      <div v-if="show" class="modal-overlay" @click.self="closeModal">
        <transition name="scale">
          <div class="modal-content">
            <div class="modal-left">
              <img :src="image" alt="product image"  loading="lazy"/>
            </div>
            <div class="modal-right">
              <button class="close-btn" @click="closeModal">×</button>
              <h2 class="modal-title">{{ title }}</h2>
              <span class="modal-weight">{{ weight }}</span>

              <div class="modal-body">
                <table
                  class="modal-kbju"
                  v-if="kcal || proteins || fats || carbs"
                >
                  <thead>
                    <tr>
                      <th>Ккал</th>
                      <th>Белки</th>
                      <th>Жиры</th>
                      <th>Углеводы</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{{ kcal }} ккал</td>
                      <td>{{ proteins }} г</td>
                      <td>{{ fats }} г</td>
                      <td>{{ carbs }} г</td>
                    </tr>
                  </tbody>
                </table>
                <p class="modal-description" v-if="description">
                  {{ description }}
                </p>
              </div>

              <div class="modal-footer">
                <AddProductButton
                  :price="price"
                  :count="count"
                  @update:count="updateCount"
                >
                  Добавить за {{ price }} ₽
                </AddProductButton>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </teleport>
</template>

<style scoped lang="sass">
@use '../../../app/styles/abstracts' as *
.modal-overlay
  position: fixed
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  background: rgba(0,0,0,0.6)
  display: flex
  justify-content: center
  align-items: center
  z-index: 9999

.modal-content
  width: 1000px
  height: 500px
  display: flex
  border-radius: 20px
  overflow: hidden
  background: #171717
  position: relative
  box-shadow: 0 0 20px rgba(0,0,0,0.5)

.modal-left
  width: 50%
  display: flex
  justify-content: center
  align-items: center
  img
    width: 88%
    height: 88%
    object-fit: cover
    border-radius: 20px

.modal-right
  width: 50%
  padding: 30px
  display: flex
  flex-direction: column
  justify-content: space-between
  color: #fff
  position: relative

  .modal-title
    font-size: 32px
    color: var(--text-color-hover)
    margin: 0 0 15px 0

  .modal-weight
    font-size: 16px
    color: var(--text-color)
    margin: 0 0 10px 0

  .modal-body
    overflow-y: auto
    @include scroll-card
    max-height: calc(100% - 100px)
    margin-bottom: 15px

    .modal-description
      font-size: 14px
      color: rgba(255,255,255,0.8)
      margin-bottom: 15px

    .modal-kbju
      width: 100%
      border-collapse: separate
      border-spacing: 0
      border-radius: 12px
      overflow: hidden
      border: 1px solid var(--text-color)
      font-size: 14px
      text-align: center
      color: #fff
      margin-bottom: 15px

      th, td
        padding: 8px
        border-bottom: 1px solid var(--text-color)

      th
        font-weight: 600

      th:not(:last-child),
      td:not(:last-child)
        border-right: 1px solid var(--text-color)

      tr:last-child td
        border-bottom: none

.modal-footer
  margin-top: auto
  width: 100%

.close-btn
  position: absolute
  top: 15px
  right: 20px
  font-size: 28px
  background: transparent
  border: none
  color: #fff
  cursor: pointer
  &:hover
    transform: scale(1.2)
  transition: transform 0.2s ease

.fade-enter-active, .fade-leave-active
  transition: opacity 0.2s ease
.fade-enter-from, .fade-leave-to
  opacity: 0

.scale-enter-active, .scale-leave-active
  transition: transform 0.2s ease
.scale-enter-from, .scale-leave-to
  transform: scale(0.9)
</style>
