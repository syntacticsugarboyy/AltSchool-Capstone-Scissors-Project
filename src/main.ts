import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
// import { Firebase } from './utils/firebase';
import { createPinia } from 'pinia';
import 'vue3-toastify/dist/index.css'

const pinia = createPinia()
const app = createApp(App)
app.use(router);
app.use(pinia);
// app.use(Firebase);
app.mount('#app');
