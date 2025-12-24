import { createRouter, createWebHistory } from 'vue-router';
import BusinessProfile from '../views/BusinessProfile.vue';
import MainHome from '../views/MainHome.vue';
import IntroduceCompany from '../views/IntroduceCompany.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainHome
  },
  {
    path: '/BusinessProfile',
    name: 'BusinessProfile',
    component: BusinessProfile
  },
  {
    path: '/MainHome',
    name: 'MainHome',
    component: MainHome
  },
  {
    path: '/IntroduceCompany',
    name: 'IntroduceCompany',
    component: IntroduceCompany
  },
  // 다른 경로들...
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;