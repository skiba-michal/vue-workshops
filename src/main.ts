import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import GlobalComponent from "./components/GlobalComponent.vue";
import "./styles/reset.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("NameOfComponent", GlobalComponent);
app.mount("#app");
