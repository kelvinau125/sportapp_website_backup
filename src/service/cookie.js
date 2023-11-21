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

export function setCookieRegister(nickname,mobile,password) {
  VueCookies.set('nickname', nickname, '1m');
  VueCookies.set('mobile', mobile, '1m');
  VueCookies.set('password', password, '1m');
}

export function removeCookieRegister() {
  VueCookies.remove('nickname');
  VueCookies.remove('mobile');
  VueCookies.remove('password');
}