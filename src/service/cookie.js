import VueCookies from 'vue-cookies';

export function setCookie(token, mobile, avatar, username, role) {
    VueCookies.set('userToken', token, '7d');
    VueCookies.set('phoneNumber', mobile, '7d');
    VueCookies.set('avatar', avatar, '7d');
    VueCookies.set('username', username, '7d');
    VueCookies.set('role', role, '7d');
  }

export function setNicknameCookie(username) {
  VueCookies.set('username', username, '7d');
}

export function setImageCookie(avatar) {
  VueCookies.set('avatar', avatar, '7d');
}

export function setRoleCookie(role){
  VueCookies.set('role', role, '7d');
}


export function setMobileCookie(mobile){
  VueCookies.set('phoneNumber', mobile, '7d');
}

export function removeCookie() {
    VueCookies.remove('userToken');
    VueCookies.remove('token');
    VueCookies.remove('avatar');
    VueCookies.remove('username');
    VueCookies.remove('role');
  }