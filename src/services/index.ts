import AuthRepository from './AuthRepository'
import ParamRepository from './ParamRepository'
import CustomerRepository from './CustomerRepository'
import TransactionRepository from './TransactionRepository'

export const apiAuth: AuthRepository = new AuthRepository()
export const apiParam: ParamRepository = new ParamRepository()
export const apiCustomer: CustomerRepository = new CustomerRepository()
export const apiTransaction: TransactionRepository = new TransactionRepository()
