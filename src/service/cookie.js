import VueCookies from 'vue-cookies';

export function setCookie(token, mobile) {
    VueCookies.set('userToken', token, '7d');
    VueCookies.set('phoneNumber', mobile, '7d');
  }

export function removeCookie() {
    VueCookies.remove('userToken');
    VueCookies.remove('phoneNumber');
    VueCookies.remove('token');
  }