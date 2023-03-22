import request from '@/plugins/request'

export default class ParamsRepository {
  url = 'main/api/v1'

  async getSystemParams(): Promise<Record<string, any>> {
    try {
      const result = await request.get(`${this.url}/system-params?type=SYSTEM`)
      return Promise.resolve(result.data.data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}
