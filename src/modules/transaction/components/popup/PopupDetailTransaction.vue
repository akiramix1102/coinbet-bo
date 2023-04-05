<template>
  <base-popup name="popup-detail-transaction" width="480px" class="popup-detail-transaction" :is-show-footer="false">
    <template #title>{{ detailTransaction.transactionType?.replaceAll('_', ' ') }} {{ detailTransaction.currency }}</template>
    <div>
      <div class="mb-2 pt-8 pb-4 bg-[#fff] text-center">
        <base-icon
          :class="checkTypeStatusIcon(detailTransaction.status)"
          :icon="checkTypeIcon(detailTransaction.transactionType, detailTransaction.status)"
          size="64"
          class="mb-6"
        ></base-icon>
        <p class="text-[20px] leading-6 font-semibold" :class="checkValueAmountDisplay(detailTransaction.amountDisplay)">
          {{ detailTransaction.amountDisplay }}
        </p>
        <p class="text-sm font-normal text-[#5b616e]">~${{ useFormatCurrency(detailTransaction.amountToUsd, 'USD') }}</p>
      </div>
    </div>
    <div class="bg-[#fff] p-6 mb-2">
      <p class="text-base font-semibold">Transaction Details</p>
      <div class="flex justify-between border-b py-[14px] border-solid border-[#dbdbdb]">
        <p class="text-sm font-normal text-[#5b616e]">Transaction ID</p>
        <div class="flex text-base text-[#0a0b0d]">
          <span>{{ useFormatTxCode(detailTransaction.transactionCode, 10) }}</span>
          <span class="ml-2" @click="useCopy(detailTransaction.transactionCode)">
            <base-icon icon="icon-copy" size="24" color="#A19F9D" />
          </span>
        </div>
      </div>
      <div class="flex justify-between border-b py-[14px] border-solid border-[#dbdbdb]">
        <p class="text-sm font-normal text-[#5b616e]">Date</p>
        <div class="flex text-base text-[#0a0b0d]">
          <span>{{ useFormatDateHourMs(detailTransaction.transactionMillisecond) }}</span>
        </div>
      </div>
      <div class="flex justify-between border-b py-[14px] border-solid border-[#dbdbdb]">
        <p class="text-sm font-normal text-[#5b616e]">To</p>
        <div class="flex text-base text-[#0a0b0d]">
          <span>{{ useFormatTxCode(detailTransaction.toAddress, 10) }}</span>
          <span class="ml-2" @click="useCopy(detailTransaction.toAddress)">
            <base-icon icon="icon-copy" size="24" color="#A19F9D" />
          </span>
        </div>
      </div>
      <div class="flex justify-between py-[14px]">
        <p class="text-sm font-normal text-[#5b616e]">Status</p>
        <div class="flex text-base text-[#0a0b0d]">
          <span :class="checkType(detailTransaction.status)">{{ useCapitalizeFirstLetter(detailTransaction.status) }}</span>
        </div>
      </div>
    </div>
    <div class="bg-[#fff] p-6">
      <p class="text-base font-semibold">Customer Info</p>
      <div class="flex justify-between border-b py-[14px] border-solid border-[#dbdbdb]">
        <p class="text-sm font-normal text-[#5b616e]">Full name</p>
        <div class="flex text-base text-[#0a0b0d]">
          <span>{{ detailTransaction.fullName }}</span>
        </div>
      </div>
      <div class="flex justify-between border-b py-[14px] border-solid border-[#dbdbdb]">
        <p class="text-sm font-normal text-[#5b616e]">Phone number</p>
        <div class="flex text-base text-[#0a0b0d]">
          <span>({{ detailTransaction.phoneCode }}) {{ detailTransaction.phone }}</span>
        </div>
      </div>
      <div class="flex justify-between py-[14px]">
        <p class="text-sm font-normal text-[#5b616e]">Email</p>
        <div class="flex text-base text-[#0a0b0d]">
          <span>{{ detailTransaction.email }}</span>
        </div>
      </div>
    </div>
  </base-popup>
</template>

<script setup lang="ts">
  import type { ITransaction } from '@/interfaces'
  import useFormatCurrency from '@/composables/formatCurrency'
  import useCopy from '@/composables/copy'
  import useFormatTxCode from '@/composables/formatTxCode'
  import useFormatDateHourMs from '@/composables/formatDateHourMs'
  import useCapitalizeFirstLetter from '@/composables/capitalizeLetter'

  interface IProps {
    detailTransaction: ITransaction
  }
  const props = withDefaults(defineProps<IProps>(), {
    detailTransaction: () => ({} as ITransaction)
  })

  const checkTypeStatusIcon = (type: any) => {
    return type === 'PENDING'
      ? 'icon-pending'
      : type === 'FAILED'
      ? 'icon-failed'
      : type === 'PROCESSING'
      ? 'icon-pending'
      : type === 'REJECTED'
      ? 'icon-failed'
      : 'icon-success text-[#129961]'
  }
  const checkValueAmountDisplay = (value: string | null) => {
    if (value) {
      if (value.indexOf('+') !== -1) {
        return 'text-[#129961]'
      } else {
        return 'text-[#cf202f]'
      }
    } else return ''
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

  const checkTypeIcon = (type: string | undefined, status: string | undefined) => {
    if (type && status) {
      if (status === 'PENDING' || status === 'PROCESSING') {
        if (type.indexOf('BONUS') !== -1) {
          return `icon-bonus-pending`
        } else return `icon-${type.toLowerCase()}-pending`
      } else if (type.indexOf('BONUS') !== -1) {
        return `icon-bonus-success`
      } else if (type.indexOf('BANKROLL') !== -1 && type.indexOf('WITHDRAW') !== -1) {
        return 'icon-withdraw-success'
      } else if (type === 'DEPOSIT_BANKROLL') {
        return 'icon-deposit-success'
      } else return `icon-${type.toLowerCase()}-success`
    } else return ''
  }
</script>

<style lang="scss">
  .popup-detail-transaction {
    --el-dialog-margin-top: 15vh !important;
    .popup-content {
      background: #f6f8fc;
      padding: 0 !important;
    }
  }
</style>
