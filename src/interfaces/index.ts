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
  value: string
}
