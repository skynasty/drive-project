import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import booking from '@/views/booking.vue'
import register from '@/components/RegisterForm.vue'
import login from '@/components/LoginForm.vue'
import branches from '@/views/branches.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/about',
      component: booking
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/branches',
      component: branches
    }
  ]
})

export default router
