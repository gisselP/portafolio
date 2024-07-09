import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../components/Menu.vue'

const routes = [
  { path: '/', component: MainView }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' };
  }
});


export default router;
