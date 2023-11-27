import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import './assets/style.css'
import router from './router'
import store from './store'

createApp(App)
  .use(router)
  .use(i18n)
  .use(store)
  .mount('#app')
