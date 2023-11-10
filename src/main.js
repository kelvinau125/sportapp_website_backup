import { createApp } from 'vue'
import App from './App.vue'
import i18n from '../i18n.js'
import './style.css'

const app = createApp(App)
app.use(i18n);
app.mount('#app');
