import type { RouteRecordRaw } from 'vue-router'

const authRouter: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('../views/AuthView.vue')
  }
]

export default authRouter
