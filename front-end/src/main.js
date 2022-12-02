import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { inject } from "@vercel/analytics";

import "@/assets/scss/main.scss";
const app = createApp(App);

app.use(router);

app.mount("#app");

inject();
