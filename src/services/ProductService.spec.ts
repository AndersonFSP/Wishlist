import http from '@/http/httpProvider'
import ProductService from '@/services/ProductService'

describe('ProductService', () => {
  beforeEach(() => {
    vi.spyOn(http, 'get').mockResolvedValue({})
    vi.clearAllMocks()
  })

  it('should call request with correct params', () => {
    ProductService.getProducts()
    expect(http.get).toHaveBeenCalledWith('/products')
  })
})