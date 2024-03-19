import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import SupportPage from '../views/SupportPage.vue';
import JoinPage from '../views/JoinPage.vue';
// Update the import for the Home component

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    // Update the component name to match the new file name
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
  {
    path: '/support',
    name: 'Support',
    component: SupportPage,
  },
  {
    path: '/join',
    name: 'Join',
    component: JoinPage,
  },
  // Add other routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

