import http from '@/plugins/http'

export default class AuthRepository {
  url = 'api/v1/user'

  async login(body: Record<string, any>): Promise<Record<string, any>> {
    try {
      const result = await http.post(`${this.url}/login`, body)
      return Promise.resolve(result.data.data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}
