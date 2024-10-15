import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {
        title: 'Home',
        breadcrumbs: ['Home']
      }
    },
    {
      path: '/wishlist',
      name: 'Wishlist',
      component: () => import('@/views/Wishlist.vue'),
      meta: {
        title: 'Wishlist',
        breadcrumbs: ['Home', 'Wishlist'],
      }
    }
  ]
})

export default router
