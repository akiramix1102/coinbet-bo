<template>
  <base-popup name="popup-detail-customer" width="1200px" class="popup-detail-customer" :is-show-footer="false">
    <template #title>Customer detail</template>
  </base-popup>
</template>

<script setup lang="ts">
  // import type { ITransaction } from '@/interfaces'

  // interface IProps {
  //   rowData: ITransaction
  // }
</script>

<style lang="scss">
  .popup-detail-customer {
    .popup-content {
      background-color: #f6f8fc;
    }
  }
</style>
