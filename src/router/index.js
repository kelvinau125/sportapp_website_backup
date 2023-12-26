import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home/FootballHomeView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LoginForm from '@/views/LoginView.vue'
import AllMatch from '@/views/AllMatch.vue'
import TournamentDetails from '@/views/Tournament/TournamentDetails.vue'
import SearchStream from '@/views/SearchStream/searchStream.vue'
import NotFound from '@/components/NotFound.vue'
import ResultPage from '@/components/SearchResult.vue'

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
    component: () => import(/* webpackChunkName: "about" */ '@/views/Home/LiveView.vue')
  },
  {
    path: '/favourite',
    name: 'favourite',
    component: () => import('@/views/Home/FavouriteView.vue')
  },
  {
    path: '/register',
    name: 'RegisterForm',
    component: RegisterView
    // component: () => import('@/views/AboutView.vue')
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
    path: '/searchStream',
    name: 'SearchStream',
    component: SearchStream,
  },
  {
    path: '/live_stream',
    name: 'LiveStream',
    component: () => import('@/views/LiveStream/LiveStreamView.vue'),
  },
  {
    //Non-exists page
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/results',
    name: "ResultPage",
    component: ResultPage,
    props: true,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
