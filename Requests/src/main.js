import { createApp } from "vue";
import App from "./App.vue";

import Header from "./components/header/Header.vue";
import Loader from "./components/Utils/loader.vue";
import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-bootstrap.css";

const app = createApp(App);

app.component("app-header", Header);
app.component("app-loader", Loader);
app.use(ToastPlugin);
app.mount("#app");
