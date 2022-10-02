import {createApp} from "vue";
import App from "./App.vue";
import router from "@/client/routers/router";

createApp(App).use(router).mount('#app');
