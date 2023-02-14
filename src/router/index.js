import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/presentation',
    name: 'presentation',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "presentation" */ '../views/Presentation.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/proyects',
    name: 'proyects',
    component: () => import(/* webpackChunkName: "about" */ '../views/Proyects.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
