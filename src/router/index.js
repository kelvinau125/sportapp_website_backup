import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '@/views/Home/FootballHomeView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LoginForm from '@/views/LoginView.vue'
import AllMatch from '@/views/AllMatch.vue'
import TournamentDetails from '@/views/Tournament/TournamentDetails.vue'
import NotFound from '@/components/NotFound.vue'
import ResultPage from '@/components/SearchResult.vue'
import MobileHomePage from '@/views/MobileHome/MobileFootballHomeView.vue'
import MobileTournamentStatus from '@/views/MobileTournament/mobileTournamentStatus.vue'
import downloadapp from '@/components/DownloadApp.vue'

import Page from '@/views/HomeView.vue'

const routes = [

  {
    path: '/',
    name: 'home',
    component: Page
  },
  {
    path: '/live',
    name: 'live',
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
    path: '/mobile_my_profile',
    name: 'MobileMyProfile',
    component: () => import('@/views/MobileMyProfile/MobileMyPage.vue'),
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
  {
    path: '/mobileHome',
    name: "MobileHomeView",
    component: MobileHomePage,
  },
  {
    path: '/mobile_tournament_Status',
    name: 'MobileTournamentStatus',
    component: MobileTournamentStatus
  },
  {
    path: '/test',
    name: 'test',
    component: downloadapp
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
