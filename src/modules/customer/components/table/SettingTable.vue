<template>
  <div class="w-full p-6">
    <div class="flex justify-between">
      <p class="text-base font-semibold">2-factor Authentication</p>
      <div v-if="detail.faType">
        <base-icon :icon="getIcon" size="40" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { ICustomer } from '@/interfaces'
  import { apiCustomer } from '@/services'
  interface IProps {
    rowData: ICustomer
  }
  const props = withDefaults(defineProps<IProps>(), {
    rowData: () => ({} as ICustomer)
  })

  const detail = ref<Record<string, any>>({})

  onMounted(() => {
    getDetailCustomer()
  })

  const getDetailCustomer = async () => {
    const rs = await apiCustomer.getDetailCustomer({ userId: props.rowData.userId })
    detail.value = rs.content[0]
    console.log(rs)
  }

  const getIcon = () => {
    return detail.value.faType === 'SMS' ? 'verify-phone' : detail.value.faType === 'EMAIL' ? 'verify-email' : 'verify-app'
  }
</script>

<style scoped></style>
