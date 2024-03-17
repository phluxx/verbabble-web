import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
// Update the import for the Home component

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    // Update the component name to match the new file name
  },
  // Add other routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

