import VueCookies from 'vue-cookies';

export function setCookie(token, mobile, avatar) {
    VueCookies.set('userToken', token, '7d');
    VueCookies.set('phoneNumber', mobile, '7d');
    VueCookies.set('avatar', avatar, '7d');
  }

export function removeCookie() {
    VueCookies.remove('userToken');
    VueCookies.remove('phoneNumber');
    VueCookies.remove('token');
    VueCookies.remove('avatar');
  }