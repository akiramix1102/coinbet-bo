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

    <el-table-column key="2" label="transaction id" prop="transactionId">
      <template #default="scope">
        <span>{{ useFormatTxCode(scope.row.transactionCode, 10) }}</span>
      </template>
    </el-table-column>
    <el-table-column key="63" label="date" prop="createdDate" width="220">
      <template #default="scope">
        <span>{{ useFormatDateHourMs(scope.row.transactionMillisecond) }}</span>
      </template>
    </el-table-column>
    <el-table-column key="4" label="customer" prop="createdDate" width="200">
      <template #default="scope">
        <div>
          <p>{{ scope.row.fullName }}</p>
          <p class="text-sm font-normal text-[#5b616e]">{{ scope.row.email }}</p>
        </div>
      </template>
    </el-table-column>
    <el-table-column key="5" label="status" prop="emailVerified" align="center" :width="isSmallScreen ? 140 : 160">
      <template #default="scope">
        <span :class="checkType(scope.row.status)">{{ checkStatus(scope.row.status) }}</span>
      </template>
    </el-table-column>
    <el-table-column key="6" label="amount" prop="emailVerified" align="center" :width="isSmallScreen ? 140 : 160">
      <template #default="scope">
        <span :class="checkType(scope.row.emailVerified)">{{ checkStatus(scope.row.emailVerified) }}</span>
      </template>
    </el-table-column>
  </base-table>
</template>

<script setup lang="ts">
  import type { ICustomer, IQuery } from '@/interfaces'
  import useCopy from '@/composables/copy'
  import useFormatTxCode from '@/composables/formatTxCode'
  import useFormatDateHourMs from '@/composables/formatDateHourMs'
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
    (e: 'row-click', row: ICustomer): void
  }>()

  const isConflictClick = ref(false)

  const isSmallScreen = computed(() => {
    return window.innerWidth < 1400
  })

  const indexMethod = (index: number) => {
    return (props.query.page - 1) * props.query.limit + index + 1
  }

  const getLevelCurrent = (row: Record<string, any>) => {
    try {
      if (row.level && row.level === 'MM') {
        return 'MM'
      } else if (row.level !== 'Default') {
        return `Level ${row.level.match(/\d+/)[0]}`
      } else {
        return 'Default'
      }
    } catch (error) {
      return ''
    }
  }

  const checkType = (type: string) => {
    return type === '1' ? 'status-verified' : 'status-not-verified'
  }

  const checkStatus = (status: string) => {
    return status === '1' ? 'Verified' : 'Unverified'
  }

  const handleRowClick = (row: Record<string, any>) => {
    if (isConflictClick.value) {
      isConflictClick.value = false
      return
    }
    emits('row-click', row as ICustomer)
  }
</script>

<style lang="scss"></style>
