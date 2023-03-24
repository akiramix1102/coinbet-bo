<template>
  <div class="shadow-md rounded bg-white">
    <base-tab :list-tab="listTab" :tab-active="tabActive" @click="handleClickTab" />
    <base-filter />
  </div>
</template>

<script setup lang="ts">
  import type { ITab } from '@/interfaces'

  const listTab = ref<ITab[]>([
    {
      title: 'All Customers',
      value: 'ALL'
    },
    {
      title: 'Verified',
      value: 'VERIFY'
    }
  ])

  const tabActive = ref('ALL')

  const handleClickTab = (tab: ITab) => {
    tabActive.value = tab.value
  }
</script>

<style scoped></style>
