import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Import app css
import "./css/app.scss";

const app = createApp(App);
app.use(router);
app.mount("#app");
