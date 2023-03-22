import { apiAuth } from './../../../services/index'
import { defineStore } from 'pinia'
import Cookies from 'js-cookie'
import request from '@/plugins/request'

export const useAuthStore = defineStore('auth', () => {
  const user = ref({})

  const isLogin = computed(() => {
    return Cookies.get('access_token') || false
  })

  const login = async (data: Record<string, any>) => {
    try {
      const result = await apiAuth.login(data)
      user.value = result
      request.defaults.headers.common['Authorization'] = `Bearer ${result.accessToken}`
      Cookies.set('access_token', result.accessToken, { expires: 1 })
      Cookies.set('user_id', result.id, { expires: 1 })
      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    }
  }

  const logout = async (status = true) => {
    try {
      if (status) {
        await apiAuth.logout()
      }
      user.value = {}
      Cookies.remove('access_token')
      Cookies.remove('user_id')
      request.defaults.headers.common['Authorization'] = ''

      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    }
  }

  const setUserInfo = (info: Record<string, any>) => {
    user.value = info
  }

  return { isLogin, login, logout, setUserInfo }
})
