import { defineStore } from 'pinia'
import Cookies from 'js-cookie'

export const useAuthStore = defineStore('auth', () => {
  const isLogin = computed(() => {
    return Cookies.get('access_token') || false
  })

  return { isLogin }
})
