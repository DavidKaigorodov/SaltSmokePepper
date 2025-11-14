import { ref } from "vue";
import { getProfile, updateProfile } from "./api.js";

export const user = ref(null);
export const loading = ref(false);

export async function fetchUser() {
  loading.value = true;
  try {
    user.value = await getProfile();
  } finally {
    loading.value = false;
  }
}

export async function saveUser(data) {
  loading.value = true;
  try {
    await updateProfile(data);
    user.value = data;
  } finally {
    loading.value = false;
  }
}
