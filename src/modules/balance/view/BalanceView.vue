<template>
  <div class="layout-balance shadow-md rounded bg-white">
    <!--    <div class="flex items-center border-b border-solid border-border-primary">-->
    <!--      <div class="px-3 py-4 cursor-pointer hover:text-tab-active text-tab-active font-semibold">MAGIC</div>-->
    <!--    </div>-->
    <base-tab :list-tab="getTabBaseToken" :tab-active="tabActive" @click="handleClickTab">
      <template #more-tab>
        <MoreToken @select="handleClickTab"></MoreToken>
      </template>
    </base-tab>

    <div class="flex justify-between p-6">
      <div
        class="flex flex-col justify-between basis-[calc(25%-18px)] w-1/5 h-auto border border-solid border-[#dbdbdb] rounded-lg py-0 px-4"
      >
        <div class="flex justify-between mt-1.5">
          <p>Investor</p>
          <base-icon icon="balance-icon-investor" size="19"></base-icon>
        </div>
        <span class="w-full text-[24px] leading-[24px] mt-2 inline-block font-semibold">172</span>
        <p class="text-sm font-normal mt-2 mb-4">of total 161</p>
      </div>
      <div
        class="flex flex-col justify-between basis-[calc(25%-18px)] w-1/5 h-auto border border-solid border-[#dbdbdb] rounded-lg py-0 px-4"
      >
        <div class="flex justify-between mt-1.5">
          <p>Investor</p>
          <base-icon icon="balance-icon-swap" size="19"></base-icon>
        </div>
        <span class="w-full text-[24px] leading-[24px] mt-2 inline-block font-semibold">172</span>
        <p class="text-sm font-normal mt-2 mb-4">of total 161</p>
      </div>
      <div
        class="flex flex-col justify-between basis-[calc(25%-18px)] w-1/5 h-auto border border-solid border-[#dbdbdb] rounded-lg py-0 px-4"
      >
        <div class="flex justify-between mt-1.5">
          <p>Investor</p>
          <base-icon icon="balance-icon-lock" size="19"></base-icon>
        </div>
        <span class="w-full text-[24px] leading-[24px] mt-2 inline-block font-semibold">172</span>
        <p class="text-sm font-normal mt-2 mb-4">of total 161</p>
      </div>
      <div
        class="flex flex-col justify-between basis-[calc(25%-18px)] w-1/5 h-auto border border-solid border-[#dbdbdb] rounded-lg py-0 px-4"
      >
        <div class="flex justify-between mt-1.5">
          <p>Investor</p>
          <base-icon icon="balance-icon-wallet" size="19"></base-icon>
        </div>
        <span class="w-full text-[24px] leading-[24px] mt-2 inline-block font-semibold">172</span>
        <p class="text-sm font-normal mt-2 mb-4">of total 161</p>
      </div>
    </div>
    <base-filter width-popper="518" width-dropdown="180">
      <template #filter>
        <el-form label-position="top">
          <div class="flex justify-between">
            <el-form-item class="flex-1 mr-10" label="Availabel amount">
              <el-input></el-input>
            </el-form-item>
            <el-form-item class="flex-1 mr-10" label=" ">
              <el-input></el-input>
            </el-form-item>
          </div>
        </el-form>
      </template>
    </base-filter>
    <base-table></base-table>
  </div>
</template>

<script lang="ts" setup>
  import { storeToRefs } from 'pinia'
  import { useBaseStore } from '@/stores/base'
  import type { IAssetToken, ITab } from '@/interfaces'

  const { listAssetToken } = storeToRefs(useBaseStore())
  const tabs: Ref<ITab[]> = ref([
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
  const tabActive = ref('MAGIC')

  const handleClickTab = (tab: ITab) => {
    tabActive.value = tab.value
  }

  const handleSelectCurrency = () => {}

  const getTabBaseToken = computed<ITab[]>(() => {
    return tabs.value
  })
</script>

<style scoped></style>
