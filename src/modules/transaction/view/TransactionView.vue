<template>
  <div>
    <div class="shadow-md rounded bg-white mb-6">
      <base-tab :list-tab="tabsHeader" :tab-active="tabActiveHeader" @click="handleClickTabHeader">
        <template #more-tab>
          <MoreToken @select="handleClickTabMore"></MoreToken>
        </template>
      </base-tab>
      <div class="p-6 flex">
        <div
          v-for="(value, index) in dataHeaderCard"
          :key="index"
          class="p-4 border border-solid border-[#dbdbdb] mr-6 rounded-lg min-w-[240px]"
        >
          <div class="flex justify-between">
            <span class="text-[#5b616e] text-base">{{ renderTitleCard(value.transactionType) }}</span>
            <div><base-icon :icon="renderIconCard(value.transactionType)" size="24" /></div>
          </div>
          <div class="my-2 text-[#0a0b0d] font-semibold">
            <p class="text-[24px] leading-6">{{ value.totalAmount }}</p>
          </div>
          <div>
            <span class="text-sm text-[#5b616e]">~${{ value.totalAmountUsd }}</span>
          </div>
        </div>
      </div>
      <base-filter
        ref="refFilter"
        :list-sort="listSort"
        :popper="false"
        width-dropdown="230"
        :popup-name="'popup-filter-transaction'"
        @sort="handleSort"
      >
      </base-filter>
      <table-transaction class="px-6"></table-transaction>
    </div>

    <popup-filter-transaction
      :is-show-footer="true"
      @reset="handleResetFilter"
      @apply="handleApplyFilter"
      @search="handleSearch"
    ></popup-filter-transaction>
  </div>
</template>

<script setup lang="ts">
  import type { ITab, ISort } from '@/interfaces'
  import PopupFilterTransaction from '../components/popup/PopupFilterTransaction.vue'
  import { apiTransaction } from '@/services'
  import { useBaseStore } from '@/stores/base'
  import TableTransaction from '../components/TableTransaction.vue'
  const baseStore = useBaseStore()

  const router = useRouter()
  const route = useRoute()

  interface IDataCard {
    numOfTransaction: number | any
    totalAmount: number | any
    transactionType: string | any
    totalAmountUsd: number | any
  }
  const searchParams = ref({
    transactionType: '',
    status: '',
    fromTransactionDate: '',
    toTransactionDate: '',
    fromTransactionAmount: '',
    toTransactionAmount: '',
    search: ''
  })

  const tabsHeader = ref<ITab[]>([
    {
      title: 'MAGIC',
      value: 'MAGIC'
    },
    {
      title: 'ETH',
      value: 'ETH'
    },
    {
      title: 'BNB',
      value: 'BNB'
    },
    {
      title: 'USDT',
      value: 'USDT'
    },
    {
      title: 'BUSD',
      value: 'BUSD'
    }
  ])

  const query = ref({
    page: 1,
    limit: 20,
    total: 0,
    orderBy: '1'
  })
  const listSort = ref<ISort[]>([
    {
      title: 'Transaction date',
      value: '1'
    },
    {
      title: 'Transaction amount',
      value: '2'
    },
    {
      title: 'Status',
      value: '3'
    }
  ])

  const dataHeaderCard = ref<IDataCard[]>([
    {
      numOfTransaction: 1,
      totalAmount: 19689480.0,
      transactionType: 'DEPOSIT',
      totalAmountUsd: '196,894.80'
    },
    {
      numOfTransaction: 2,
      totalAmount: 19689480.0,
      transactionType: 'WITHDRAW',
      totalAmountUsd: '196,894.80'
    },
    {
      numOfTransaction: 3,
      totalAmount: 19689480.0,
      transactionType: 'TRANSFER',
      totalAmountUsd: '196,894.80'
    },
    {
      numOfTransaction: 4,
      totalAmount: 19689480.0,
      transactionType: 'BONUS',
      totalAmountUsd: '196,894.80'
    },
    {
      numOfTransaction: 5,
      totalAmount: 19689480.0,
      transactionType: 'BET',
      totalAmountUsd: '196,894.80'
    },
    {
      numOfTransaction: 6,
      totalAmount: 19689480.0,
      transactionType: 'PRIZE',
      totalAmountUsd: '196,894.80'
    },
    {
      numOfTransaction: 7,
      totalAmount: 19689480.0,
      transactionType: 'BUY',
      totalAmountUsd: '196,894.80'
    }
  ])
  const data = ref([])

  const tabActiveHeader = ref('MAGIC')

  onMounted(async () => {
    tabActiveHeader.value = (route.params.currency as string).toUpperCase()
    await getListTransaction()
  })

  const handleClickTabMore = (tab: string) => {
    tabActiveHeader.value = tab
    router.push({ params: { currency: tab } })
    resetFilter()
    getListTransaction()
  }

  const getListTransaction = async () => {
    try {
      const params = {
        // ...query,
        status: searchParams.value.status,
        transactionType: searchParams.value.transactionType,
        orderBy: query.value.orderBy,
        limit: query.value.limit,
        page: query.value.page,
        currency: tabActiveHeader.value,
        fromDate: searchParams.value.fromTransactionDate,
        toDate: searchParams.value.toTransactionDate,
        fromAmount: searchParams.value.fromTransactionAmount,
        toAmount: searchParams.value.toTransactionAmount,
        total: null
      }
      const result = await apiTransaction.getListTransaction('search', params)
      console.log('🚀 ~ file: TransactionView.vue:176 ~ getListTransaction ~ result:', result)
      data.value = result.content
      query.value.total = result.totalElements
    } catch (e) {
      data.value = []
    }
  }
  const handleSort = (sort: ISort) => {
    query.value.orderBy = sort.value as string
    getListTransaction()
  }
  const handleSearch = (text: string) => {
    searchParams.value.search = text
    getListTransaction()
  }

  const resetFilter = () => {
    query.value = {
      ...query.value,
      page: 1
    }
    searchParams.value = {
      transactionType: '',
      status: '',
      fromTransactionDate: '',
      toTransactionDate: '',
      fromTransactionAmount: '',
      toTransactionAmount: '',
      search: ''
    }
  }

  const handleResetFilter = () => {
    resetFilter()
    baseStore.setOpenPopup(false, 'popup-filter-transaction')
    getListTransaction()
  }
  const handleApplyFilter = (filter: Record<string, any>) => {
    searchParams.value.transactionType = filter.value.transactionType
    searchParams.value.status = filter.value.status
    searchParams.value.fromTransactionDate = filter.value.fromTransactionDate
    searchParams.value.toTransactionDate = filter.value.toTransactionDate
    searchParams.value.fromTransactionAmount = filter.value.fromTransactionAmount
    searchParams.value.toTransactionAmount = filter.value.toTransactionAmount
    getListTransaction()
  }

  const renderTitleCard = (transactionType: string) => {
    if (transactionType === 'DEPOSIT') return 'Total Deposit'
    if (transactionType === 'BONUS') return 'Total Bonus'
    if (transactionType === 'TRANSFER') return 'Total Transfer'
    if (transactionType === 'WITHDRAW') return 'Total Withdraw'
    if (transactionType === 'BUY') return 'Total Buy'
    if (transactionType === 'BET') return 'Total Bet'
    if (transactionType === 'PRIZE') return 'Total Prize'
  }
  const renderIconCard = (transactionType: string) => {
    if (transactionType === 'DEPOSIT') return 'icon-download'
    if (transactionType === 'BONUS') return 'icon-gift'
    if (transactionType === 'TRANSFER') return 'icon-transfer'
    if (transactionType === 'WITHDRAW') return 'icon-upload'
    else return 'icon-default'
  }

  const handleClickTabHeader = (tab: ITab) => {
    tabActiveHeader.value = tab.value
    router.push({ params: { currency: tab.value } })
  }
</script>

<style scoped></style>
