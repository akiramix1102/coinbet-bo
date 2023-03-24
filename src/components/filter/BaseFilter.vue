<template>
  <div class="base-filter flex items-center py-6 pl-6">
    <el-input v-model="search" placeholder="Search" class="mr-[30px]">
      <template #prepend>
        <base-icon icon="search" size="24" />
      </template>
    </el-input>

    <popper-filter v-if="props.popper"> content </popper-filter>
    <div v-else class="flex items-center cursor-pointer hover:text-[#0151fc]">
      <base-icon icon="filter" size="18" />
      <p class="text-base ml-[10px]">Filter</p>
    </div>

    <dropdown-sort />
  </div>
</template>

<script setup lang="ts">
  interface IProp {
    popper?: boolean
    buttonRight?: boolean
  }

  const props = withDefaults(defineProps<IProp>(), {
    popper: true,
    buttonRight: false
  })

  const search = ref('')
</script>

<style scoped lang="scss">
  .base-filter {
    :deep(.el-input) {
      width: 400px;
      height: 48px;
      border: 1px solid var(--color-input-border);
      border-radius: 4px;
      &:hover,
      &:focus {
        border-color: var(--color-input-hover-border);
      }
      .el-input-group__prepend {
        padding: 0 10px 0 12px;
        box-shadow: none;
        background-color: transparent;
      }
      .el-input__wrapper {
        border: none;
        box-shadow: none;
        padding-left: 0;

        .el-input__inner {
          font-size: 16px;
          height: 100%;
          color: var(--color-text);
        }
      }
    }
  }
</style>
