import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
// import AboutView from '../views/AboutView.vue'
import LoginForm from '../views/LoginView.vue'
import AllMatch from '../views/AllMatch.vue'
import TournamentDetails from '../views/TournamentDetails.vue'

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
  },
  {
    path: '/allMatch',
    name: 'AllMatch',
    component: AllMatch
  },
  {
    path: '/tournament_details',
    name: 'TournamentDetails',
    component: TournamentDetails
  },
  {
    path: '/live_stream',
    name: 'LiveStream',
    component: () => import('../views/LiveStreamView.vue')
  },
  {
    path: '/test',
    name: 'testTest',
    component: () => import('../components/HelloWorld.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
