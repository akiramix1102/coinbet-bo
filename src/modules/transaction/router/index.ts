import type { RouteRecordRaw } from 'vue-router'
const TheLayout = () => import('@/components/layout/TheLayout.vue')

const transactionRouter: RouteRecordRaw[] = [
  {
    path: '/transaction',
    component: TheLayout,
    name: 'TransactionMain',
    redirect: { name: 'TransactionDeposit', params: {currency: 'MAGIC', type: 'Deposit'} },
    children: [
      {
        path: ':currency',
        name: 'Transaction',

        meta: {
          module: 'TRANSACTION',
          title: 'Transaction'
        },
        component: () => import('../view/TransactionView.vue'),
        children: [
          {
            path: 'Deposit',
            name: 'TransactionDeposit',
            component: () => import('../view/TransactionView.vue'),
          },
          {
            path: 'Withdraw',
            name: 'TransactionWithdraw',
            component: () => import('../view/TransactionView.vue'),
          },
          {
            path: 'Transfer',
            name: 'TransactionTransfer',
            component: () => import('../view/TransactionView.vue'),
          },
          {
            path: 'Bonus',
            name: 'TransactionBonus',
            component: () => import('../view/TransactionView.vue'),
          },
          {
            path: 'Buy',
            name: 'TransactionBuy',
            component: () => import('../view/TransactionView.vue'),
          },
        ]
      }
    ]
  }
]

export default transactionRouter
