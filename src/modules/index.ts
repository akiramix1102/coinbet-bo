import type { ModuleInterface } from '@/interfaces/module'
import authModule from '@/modules/Auth'
import customerModule from './customer'

const listModule: Record<string, ModuleInterface> = {
  authModule,
  customerModule
}

export default listModule
