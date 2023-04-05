<template>
  <base-table
    :data="props.data"
    :query="query"
    label="Customers"
    @limit-change="emits('limit-change', $event)"
    @page-change="emits('page-change', $event)"
    @row-click="handleRowClick"
  >
    <el-table-column key="1" label="#" type="index" :index="indexMethod" align="center" width="80" />

    <el-table-column key="2" label="transaction id" :width="isSmallScreen ? 260 : ''">
      <template #default="scope">
        <div class="flex items-center">
          <span class="mr-4 w-[220px] inline-block">{{ useFormatTxCode(scope.row.transactionCode, 10) }}</span>
          <span @click="useCopy(scope.row.transactionCode)">
            <base-icon icon="icon-copy" size="24" color="#A19F9D" />
          </span>
        </div>
      </template>
    </el-table-column>
    <el-table-column key="3" label="type" :width="isSmallScreen ? 130 : 160">
      <template #default="scope">
        <span>{{ useCapitalizeFirstLetter(scope.row.transactionType) }}</span>
      </template>
    </el-table-column>
    <el-table-column key="4" label="game" :width="isSmallScreen ? 100 : 150">
      <template #default="scope">
        <span>{{ scope.row.marketName }}</span>
      </template>
    </el-table-column>
    <el-table-column key="5" label="date" :width="isSmallScreen ? 130 : 160">
      <template #default="scope">
        <div>
          <p>{{ useFormateDateMDY(scope.row.transactionMillisecond) }}</p>
          <p class="text-sm text-[#5b616e]">{{ useFormatDateHMS(scope.row.transactionMillisecond) }}</p>
        </div>
      </template>
    </el-table-column>
    <el-table-column key="6" label="customer" :width="isSmallScreen ? 150 : 250">
      <template #default="scope">
        <div>
          <p>{{ scope.row.fullName }}</p>
          <p class="text-sm font-normal text-[#5b616e]">{{ scope.row.email }}</p>
        </div>
      </template>
    </el-table-column>
    <el-table-column key="7" label="status" align="center" :width="isSmallScreen ? 120 : 140">
      <template #default="scope">
        <span :class="checkType(scope.row.status)">{{ useCapitalizeFirstLetter(scope.row.status) }}</span>
      </template>
    </el-table-column>
    <el-table-column key="8" label="amount" align="right" :width="isSmallScreen ? '' : 250">
      <template #default="scope">
        <div>
          <p :class="checkValueAmountDisplay(scope.row.amountDisplay)">{{ scope.row.amountDisplay }}</p>
          <p class="text-sm text-[#5b616e]">~${{ scope.row.amountToUsd.toFixed(2) }}</p>
        </div>
      </template>
    </el-table-column>
  </base-table>
</template>

<script setup lang="ts">
  import type { IQuery, ITransaction } from '@/interfaces'
  import useCopy from '@/composables/copy'
  import useFormatTxCode from '@/composables/formatTxCode'
  import useFormatDateHMS from '@/composables/formatDateHMS'
  import useFormateDateMDY from '@/composables/formatDateMDY'
  import useCapitalizeFirstLetter from '@/composables/capitalizeLetter'
  interface IProps {
    data: Array<Record<string, any>>
    query: IQuery
    isLoading: boolean
  }

  const props = withDefaults(defineProps<IProps>(), {
    data: () => [],
    query: () => ({
      page: 1,
      limit: 20,
      total: 0
    }),
    isLoading: () => false
  })
  const emits = defineEmits<{
    (e: 'page-change', page: number): void
    (e: 'limit-change', limit: number): void
    (e: 'row-click', row: ITransaction): void
  }>()

  const isConflictClick = ref(false)

  const isSmallScreen = computed(() => {
    return window.innerWidth < 1400
  })

  const checkValueAmountDisplay = (value: string | null) => {
    if (value) {
      if (value.indexOf('+') !== -1) {
        return 'text-[#129961]'
      } else {
        return 'text-[#cf202f]'
      }
    } else return ''
  }

  const indexMethod = (index: number) => {
    return (props.query.page - 1) * props.query.limit + index + 1
  }

  const checkType = (type: string) => {
    return type === 'PENDING'
      ? 'status status-pending'
      : type === 'FAILED'
      ? 'status status-error'
      : type === 'PROCESSING'
      ? 'status status-warning'
      : type === 'REJECTED'
      ? 'status status-rejected'
      : 'status status-success'
  }

  const handleRowClick = (row: Record<string, any>) => {
    if (isConflictClick.value) {
      isConflictClick.value = false
      return
    }
    emits('row-click', row as ITransaction)
  }
</script>

<style lang="scss"></style>
