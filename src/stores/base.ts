import { defineStore } from 'pinia'

export const useBaseStore = defineStore('base', () => {
  const systemParams = ref({})
  const siteKey = ref('6Ley9OYiAAAAANMWTsCkqtNIxLEhz96PE1VmS0KJ')

  const setSystemParams = (data: Record<string, any>) => {
    systemParams.value = data
  }

  return { systemParams, siteKey, setSystemParams }
})
