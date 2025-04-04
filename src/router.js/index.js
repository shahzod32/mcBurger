import { createRouter, createWebHistory } from 'vue-router'

// Sahifalarni import qilish

import Ovqatlar from '@/companents/Ovqat.vue'
import Ichimliklar from '@/companents/ichimliklar.vue'
import Shirinliklar from '@/companents/shirinliklar.vue'

const routes = [
 
  { path: '/ovqatlar', component: Ovqatlar },
  { path: '/ichimliklar', component: Ichimliklar },
  { path: '/shirinliklar', component: Shirinliklar }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
