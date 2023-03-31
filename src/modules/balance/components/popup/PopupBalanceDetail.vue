<template>
  <base-popup name="popup-detail-balance" width="1200px" class="popup-detail-balance" :is-show-footer="false" @open="handleOpen">
    <template #title>BALANCE DETAIL</template>
    <div class="content pb-6">
      <div class="flex mb-6">
        <div class="avatar">
          <img v-if="rowData.avatar" :src="rowData.avatar" alt="" class="w-20 h-20 object-cover rounded-full" />
          <base-icon v-else icon="default-avatar" size="48" />
        </div>
        <div class="ml-6 w-full">
          <div class="mb-2 font-semibold text-lg">{{ rowData.fullName }}</div>
          <div class="flex items-center">
            <span>{{ rowData.email }}</span>
            <span> | {{ rowData.userName }}</span>
            <div class="cursor-pointer ml-2 flex">
              <base-icon icon="balance-icon-copy" size="20" />
            </div>
          </div>
        </div>
      </div>
      <balance-detail-card :data-card="rowData" />
    </div>
  </base-popup>
</template>

<script setup lang="ts">
  import type { IBalance } from '@/interfaces'
  import BalanceDetailCard from '../detail/BalanceDetailCard.vue'
  interface IProps {
    rowData: IBalance
  }
  const props = withDefaults(defineProps<IProps>(), {
    rowData: () => ({} as IBalance)
  })

  const handleOpen = () => {}
</script>

<style scoped lang="scss">
  :deep(.popup-detail-balance) {
    .el-dialog__body {
      .popup-content {
        background: #f6f8fc;
      }
    }
  }
</style>
