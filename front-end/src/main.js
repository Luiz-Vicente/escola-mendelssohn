import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { inject } from "@vercel/analytics";
import ScreenSizeDetector from "screen-size-detector";
import VWave from "v-wave";

// const
const screenSize = new ScreenSizeDetector();
const app = createApp(App);

// style
import "@/assets/scss/main.scss";

// applying imported
app.use(router).use(VWave);

// global variables
app.config.globalProperties.$screenSize = screenSize;

// mount the app
app.mount("#app");

// vercel analytcs
inject();
