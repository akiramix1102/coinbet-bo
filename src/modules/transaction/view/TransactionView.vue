<template>
  <div>
    <div class="shadow-md rounded bg-white mb-6">
      <base-tab :list-tab="tabsHeader" :tab-active="tabActiveHeader" @click="handleClickTabHeader" />
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
    </div>
    <div class="shadow-md rounded bg-white">
      <base-tab :list-tab="listTab" :tab-active="tabActive" @click="handleClickTab" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { ITab, ISort } from '@/interfaces'

  import { useBaseStore } from '@/stores/base'
  const baseStore = useBaseStore()

  const router = useRouter()
  const route = useRoute()

  interface IDataCard {
    numOfTransaction: number | any
    totalAmount: number | any
    transactionType: string | any
    totalAmountUsd: number | any
  }

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

  const listTab = ref<ITab[]>([
    {
      title: 'Deposit',
      value: 'DEPOSIT'
    },
    {
      title: 'Withdraw',
      value: 'WITHDRAW'
    },
    {
      title: 'Transfer',
      value: 'TRANSFER'
    },
    {
      title: 'Bonus',
      value: 'BONUS'
    },
    {
      title: 'Buy',
      value: 'BUY'
    }
  ])
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
  const listStatus = ref<Record<string, any>>([
    {
      title: 'Pending',
      value: 'PENDING'
    },
    {
      title: 'Processing',
      value: 'PROCESSING'
    },
    {
      title: 'Success',
      value: 'SUCCESS'
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
    }
  ])

  const tabActiveHeader = ref('MAGIC')
  const tabActive = ref('')

  onMounted(async () => {
    tabActiveHeader.value = (route.params.currency as string).toUpperCase()
    tabActive.value = route.path.split('/')[3].toUpperCase()
  })

  const renderTitleCard = (transactionType: string) => {
    if (transactionType === 'DEPOSIT') return 'Total Deposit'
    if (transactionType === 'BONUS') return 'Total Bonus'
    if (transactionType === 'TRANSFER') return 'Total Transfer'
    if (transactionType === 'WITHDRAW') return 'Total Withdraw'
    if (transactionType === 'BUY') return 'Total Buy'
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
  const handleClickTab = (tab: ITab) => {
    tabActive.value = tab.value
    router.push({
      name: `Transaction${tab.value[0] + tab.value.slice(1).toLowerCase()}`
    })
  }
</script>

<style scoped></style>
