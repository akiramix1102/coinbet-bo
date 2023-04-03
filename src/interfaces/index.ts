export interface IAssetToken {
  baseCurrency: string
  currency: string
  currencyName: string
  decimals: number
  iconUrl: string
  id: number
  network: string
  stableCurrency: string
  systemCurrency: boolean
  type: string
  rounding: number
}

export interface IUser {
  userId: number
  firstName: string
  lastName: string
  fullName: string
  displayName: string
  email: string
  login2faEnabled: number
  avatar: string
  userType: string
  phoneVerified: number
  emailVerified: number
  roles: string[]
  roundsUserCanBuy: number[]
  affiliationCode: string
}

export interface ITab {
  title: string
  value: string
}

export interface ISort {
  title: string
  value: string | number
}
export interface IQuery {
  page: number
  limit: number
  total: number
  [x: string]: any
}

export interface ICustomer {
  userId: number
  fullName: string
  email: string
  createdDate: string
  avatar: string
  referrerCode: string
  referrerName: string
  affiliationCode: string
  lastTimeLogin: string
  level: string
  birthday: string
  userStatus: string
  phoneVerified: string
  emailVerified: string
  walletAddress: string
  username: string
  twitterId: string
  twitter: string
  telegramId: string
  telegram: string
  discordId: string
  discord: string
  isVerified: string
  lastTransaction: string
}

export interface IBalance {
  availableBalance: number
  availableBalanceUSD: number
  availableTrading: number
  availableTradingUSD: number
  balance: number
  balanceUSD: number
  countryCode: string | number
  currency: string
  currencyName: string
  email: string
  emailVerified: number
  exchangeRate: number
  fullName: string
  id: number
  lastTimeLogin: string | number | any
  lastTransaction: string
  latestRate: number
  phone: string | number
  phoneVerified: number
  totalLockedAmount: number
  totalLockedAmountUSD: number
  userName: string
}

export interface IBalanceDetail {
  balance: number
  balanceDisplay: string
  createdAt: string
  createdBy: number
  creditAddress: string
  creditAmount: number
  creditAmountDisplay: string
  creditAmountToUsd: number
  creditCurrency: string
  creditFee: number
  creditNetwork: string
  creditUsdExchangeRate: number
  debitAddress: string
  debitAmount: number
  debitAmountDisplay: string
  debitAmountToUsd: number
  debitCurrency: string
  debitFee: number
  debitNetwork: string
  debitUsdExchangeRate: number
  description: string
  id: number
  locked: number
  lockedDisplay: string
  refTransactionCode: string
  status: string
  transactionCode: string
  transactionDate: string
  transactionDay: string
  transactionMillisecond: number
  transactionType: string
  updatedAt: string
  updatedBy: number
  userId: number
}

export interface ISummaryBalanceDetail {
  openBalance: string
  closeBalance: string
  totalCreditAmount: string
  totalDebitAmount: string
}

export interface IQueryBalanceDetail {
  currency?: string
  transactionType?: string
  userId?: number
  page?: number
  limit?: number
  search?: string
  orderBy: string | number
  total: number
  type?: string | null | undefined
}
