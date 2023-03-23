import type { RouteRecordRaw } from 'vue-router'
const TheLayout = () => import('@/components/layout/TheLayout.vue')

const customerRouter: RouteRecordRaw[] = [
  {
    path: '/customer',
    component: TheLayout,
    children: [
      {
        path: ':type',
        name: 'Customer',
        meta: {
          module: 'CUSTOMER',
          title: 'Customer'
        },
        component: () => import('../view/CustomerView.vue')
      }
    ]
  }
]

export default customerRouter
