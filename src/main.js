import { createApp } from 'vue'
import App from './App.vue'
import i18n from '../i18n.js'
import './assets/style.css'
import router from './router'
// createApp(App).use(router).use(i18n).mount('#app')

const app = createApp(App)
app.use(i18n);
app.use(router);
app.mount('#app');

