<template>
  <div class="flex items-center border-b border-solid border-border-primary">
    <div
      v-for="(tab, index) in props.listTab"
      :key="index"
      class="px-3 py-4 cursor-pointer hover:text-tab-active"
      :class="{ 'text-tab-active font-semibold': tab.value === props.tabActive }"
    >
      {{ tab.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { ITab } from '@/interfaces'

  interface IProps {
    listTab: ITab[]
    tabActive: string
  }

  const props = withDefaults(defineProps<IProps>(), {
    listTab: () => [],
    tabActive: ''
  })
</script>

<style scoped></style>
