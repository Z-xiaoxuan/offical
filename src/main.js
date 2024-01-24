import { createApp } from "vue";
import "./styles/common.scss";
// import "./index.css";
import "animate.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";

const app = createApp(App);

app.use(ElementPlus);
app.mount("#app");
