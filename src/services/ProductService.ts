import http from '@/http/httpProvider'
import type { IProductResponse } from '@/types'

export default {
  getProducts(): Promise<IProductResponse> {
    return http.get<IProductResponse>('/products')
  },
}
