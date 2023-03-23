import type { IAssetToken } from '@/interfaces'
import { forEach } from 'lodash-es'
import { defineStore } from 'pinia'

export const useBaseStore = defineStore('base', () => {
  const systemParams = ref({})
  const listAssetToken = ref<IAssetToken[]>([])
  const listRounding = ref<Record<string, number>>({})
  const siteKey = ref('6Ley9OYiAAAAANMWTsCkqtNIxLEhz96PE1VmS0KJ')

  const setSystemParams = (data: Record<string, any>) => {
    systemParams.value = data
  }

  const setListAssetToken = (list: IAssetToken[]) => {
    listAssetToken.value = list
  }
  const setListRounding = (list: IAssetToken[]) => {
    forEach(list, token => {
      listRounding.value[token.currency] = token.rounding
    })
    listRounding.value['USD'] = 2
    listRounding.value['PERCENT'] = 2
  }

  return { systemParams, listAssetToken, siteKey, listRounding, setSystemParams, setListAssetToken, setListRounding }
})
