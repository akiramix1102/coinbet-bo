import type { ModuleInterface } from '@/interfaces/module'
import authModule from '@/modules/Auth'
import customerModule from './customer'
import transactionModule from './transaction'
import balanceModule from '@/modules/balance'
const listModule: Record<string, ModuleInterface> = {
  authModule,
  customerModule,
  balanceModule,
  transactionModule
}

export default listModule
