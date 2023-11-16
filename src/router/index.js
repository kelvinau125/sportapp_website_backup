import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
// import AboutView from '../views/AboutView.vue'
import LoginForm from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/live',
    name: 'live',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LiveView.vue')
  },
  {
    path: '/favourite',
    name: 'favourite',
    component: () => import('../views/FavouriteView.vue')
  },
  {
    path: '/register',
    name: 'RegisterForm',
    component: RegisterView
    // component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'LoginForm',
    component: LoginForm
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
