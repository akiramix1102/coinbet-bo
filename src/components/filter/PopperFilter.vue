<template>
  <el-popover placement="bottom" :trigger="props.trigger" :width="props.width" :hide-after="0">
    <slot />
    <template #reference>
      <div class="flex items-center cursor-pointer hover:text-[#0151fc]">
        <base-icon icon="filter" size="18" />
        <p class="text-base ml-[10px]">Filter</p>
      </div>
    </template>
  </el-popover>
</template>

<script setup lang="ts">
  interface IProp {
    trigger?: 'click' | 'hover'
    width?: number
  }

  const props = withDefaults(defineProps<IProp>(), {
    trigger: 'click',
    width: 200
  })
</script>

<style scoped></style>
