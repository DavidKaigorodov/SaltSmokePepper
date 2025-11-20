import api from "@/shared/api/axios";

export const getGenders = () => api.get("/api/genders");
