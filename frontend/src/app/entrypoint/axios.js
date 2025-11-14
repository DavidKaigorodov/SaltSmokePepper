import axios from "axios";

export default {
  install: (app) => {
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = "http://localhost:8000"; 
    app.config.globalProperties.$axios = axios;
  },
};

export { axios };
