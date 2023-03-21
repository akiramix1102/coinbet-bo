import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const name = ref('dat')

  return { name }
})
