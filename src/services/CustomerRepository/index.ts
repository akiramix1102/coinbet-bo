import { useConvertUtcTime } from '@/composables/convertUtcTime'
import request from '@/plugins/request'
import { forEach } from 'lodash-es'

export default class CustomerRepository {
  prefix = 'main/api/v1/customers'

  private convertParams(params: Record<string, any>): Record<string, any> {
    const _params = { ...params }
    const objKey = Object.keys(_params)
    forEach(objKey, key => {
      if (_params[key] === '' && key !== 'type') {
        _params[key] = null
      }
    })
    return _params
  }

  private convertParamsHasNumberDecimal(params: Record<string, any>): Record<string, any> {
    const _params = { ...params }
    const objKey = Object.keys(_params)

    if (_params.fromAmount) {
      _params.fromAmount = _params.fromAmount.replaceAll(',', '') * 1
    }
    if (_params.toAmount) {
      _params.toAmount = _params.toAmount.replaceAll(',', '') * 1
    }

    forEach(objKey, key => {
      if (_params[key] === '' || key === 'total') {
        _params[key] = null
      }
    })
    return _params
  }

  async getListCustomer(params: Record<string, any>): Promise<any> {
    try {
      const _params = this.convertParams(params)
      const rs = await request.get(`${this.prefix}`, { params: _params })
      return Promise.resolve(rs.data.data)
    } catch (error) {
      console.log(error)
      return Promise.reject(error)
    }
  }

  async getListBalance(id: number, params: Record<string, any>): Promise<any> {
    try {
      const rs = await request.get(`${this.prefix}/${id}/balance`, { params })
      return Promise.resolve(rs.data.data)
    } catch (error) {
      console.log(error)
      return Promise.reject(error)
    }
  }

  async getListReferral(params: Record<string, any>): Promise<any> {
    try {
      params.toCreatedAt = useConvertUtcTime(params.toCreatedAt, 'to')
      params.fromCreatedAt = useConvertUtcTime(params.fromCreatedAt, 'from')
      const rs = await request.get(`api/v1/customers/invited-by-user`, { params: params })
      return Promise.resolve(rs.data.data)
    } catch (error) {
      console.log(error)
      return Promise.reject(error)
    }
  }
  async getListBonus(params: Record<string, any>): Promise<any> {
    try {
      const _params = this.convertParamsHasNumberDecimal(params)
      const rs = await request.get(`main/api/v1/bonus-programs/histories`, { params: _params })
      return Promise.resolve(rs.data.data)
    } catch (error) {
      console.log(error)
      return Promise.reject(error)
    }
  }

  async getStatistics(customerId: number): Promise<any> {
    try {
      const rs = await request.get(`${this.prefix}/${customerId}/statistic`)
      return Promise.resolve(rs.data.data)
    } catch (error) {
      console.log(error)
      return Promise.reject(error)
    }
  }
  async getDetailCustomer(params: Record<string, any>): Promise<any> {
    try {
      const rs = await request.get(`${this.prefix}`, { params })
      return Promise.resolve(rs.data.data)
    } catch (error) {
      console.log(error)
      return Promise.reject(error)
    }
  }
}
