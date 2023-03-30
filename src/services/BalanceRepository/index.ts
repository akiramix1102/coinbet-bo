import request from '@/plugins/request'

export default class BalanceRepository {
  prefix = 'main/api/v1/balance'

  async getListBalance(tab: string, params: Record<string, any>): Promise<any> {
    try {
      const rs = await request.get(`${this.prefix}/${tab}`, { params })
      return Promise.resolve(rs.data.data)
    } catch (error) {
      console.log(error)
      return Promise.reject(error)
    }
  }
}
