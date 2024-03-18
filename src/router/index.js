import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
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
  // Add other routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

