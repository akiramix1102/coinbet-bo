import type { ModuleInterface } from '@/interfaces/module'
import authModule from '@/modules/Auth'
import customerModule from './customer'
import balanceModule from '@/modules/balance'
import requestModule from '@/modules/request'
const listModule: Record<string, ModuleInterface> = {
  authModule,
  customerModule,
  balanceModule,
  requestModule
}

export default listModule
