import { createApp } from "vue";
import { router } from "../routes/router";
import App from "./App.vue";
import "../styles/app.sass";
import axiosPlugin from "./axios";

const app = createApp(App);
app.use(axiosPlugin);
app.use(router);
app.mount("#app");
