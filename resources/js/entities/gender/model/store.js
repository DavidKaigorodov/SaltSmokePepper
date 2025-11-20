import api from "@/shared/api/axios";

export const useGenderStore = defineStore("gender", {
  state: () => ({
    genders: [],
    loading: false,
  }),

  actions: {
    async fetchGenders() {
      this.loading = true;

      try {
        const { data } = await api.get("/api/genders");

        this.genders = data.map((g) => ({
          label: g.name,
          value: g.id,
        }));
      } catch (e) {
        console.error("Ошибка загрузки gender list:", e);
      } finally {
        this.loading = false;
      }
    },
  },
});
