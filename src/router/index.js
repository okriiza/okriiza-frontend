import { createRouter, createWebHistory } from 'vue-router'
import LandingIndex from '../views/landing/index.vue'
import LandingLayout from '@/layouts/LandingLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingIndex,
      meta: {
        layout: LandingLayout
      }
    }
  ]
})

export default router
