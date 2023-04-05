import AuthRepository from './AuthRepository'
import ParamRepository from './ParamRepository'
import CustomerRepository from './CustomerRepository'
import BalanceRepository from '@/services/BalanceRepository'
import RequestRepository from '@/services/RequestRepository'

export const apiAuth: AuthRepository = new AuthRepository()
export const apiParam: ParamRepository = new ParamRepository()
export const apiCustomer: CustomerRepository = new CustomerRepository()
export const apiBalance: BalanceRepository = new BalanceRepository()
export const apiRequest: RequestRepository = new RequestRepository()
