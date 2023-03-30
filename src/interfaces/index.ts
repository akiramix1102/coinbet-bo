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

// export interface ITransaction {

// }
