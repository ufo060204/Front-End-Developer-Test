import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/HomePage.vue')
      }
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL)
})

export default router
