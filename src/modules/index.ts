import type { ModuleInterface } from '@/interfaces/module'
import authModule from '@/modules/Auth'

const listModule: Record<string, ModuleInterface> = {
  authModule
}

export default listModule
