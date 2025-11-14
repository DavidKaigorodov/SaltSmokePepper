import axios from "axios";

export async function getProfile() {
  const { data } = await axios.get("/api/profile");
  return data;
}

export async function updateProfile(payload) {
  const { data } = await axios.post("/api/profile", payload); // TODO сделать реальные ручки
  return data;
}
