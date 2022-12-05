import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { inject } from "@vercel/analytics";
import ScreenSizeDetector from "screen-size-detector";
import VWave from "v-wave";
import vue3PhotoPreview from "vue3-photo-preview";
import "vue3-photo-preview/dist/index.css";

// const
const screenSize = new ScreenSizeDetector();
const app = createApp(App);

// style
import '@coreui/coreui/dist/css/coreui.min.css'
import "@/assets/scss/main.scss";

// applying imported
app.use(router).use(VWave).use(vue3PhotoPreview);

// global variables
app.config.globalProperties.$screenSize = screenSize;

// mount the app
app.mount("#app");

// vercel analytcs
inject();
