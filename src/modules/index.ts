import type { ModuleInterface } from '@/interfaces/module'
import authModule from '@/modules/Auth'
import customerModule from './customer'
import transactionModule from './transaction'

const listModule: Record<string, ModuleInterface> = {
  authModule,
  customerModule,
  transactionModule
}

export default listModule
