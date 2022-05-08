import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// import { globalRegister } from "./global/index";
// app.use(globalRegister)

console.log(process.env.VUE_APP_BASE_URL);
console.log(process.env.VUE_APP_BASE_NAME);

const app = createApp(App);
app.use(ElementPlus).use(store).use(router).mount("#app");
