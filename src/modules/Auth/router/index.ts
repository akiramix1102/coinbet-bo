import type { RouteRecordRaw } from 'vue-router'

const authRouter: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('../views/AuthView.vue'),
    meta: {
      isNotLogin: true
    }
  }
]

export default authRouter
