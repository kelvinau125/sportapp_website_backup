import { createApp } from 'vue';
import App from './App.vue';
import i18n from '../i18n';
import './assets/style.css';
import router from './router';
import store from './store';

import { useTencentSDK } from './utils/tencentSDKProvder';
import VueCookies from 'vue-cookies';

const app = createApp(App);

if (VueCookies.isKey('phoneNumber')) {
  const timInstance = await useTencentSDK();
  app.provide('timInstance', timInstance);
}

app
  .use(router)
  .use(i18n)
  .use(store)
  .mount('#app');
