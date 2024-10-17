import { fireEvent, render, screen, waitFor } from '@testing-library/vue'
import Home from './Home.vue'
import ProductService from '@/services/ProductService'
import { mockGetProducts } from '@/mocks' 

describe('Home', () => {
  beforeEach(() => vi.clearAllMocks())
  const renderHome = () => render(Home)

  it('should render Home', async () => {
    vi.spyOn(ProductService, 'getProducts').mockResolvedValueOnce(mockGetProducts)
    renderHome()
    expect(ProductService.getProducts).toHaveBeenCalled()
    await waitFor(() => {
      mockGetProducts.products.forEach(product => {
        screen.getByText(product.name)
      })
    })
  })

  it('should show error view', async () => {
    const errorMessage = 'unexpected error'
    vi.spyOn(ProductService, 'getProducts').mockRejectedValueOnce(errorMessage)
    renderHome()
    expect(ProductService.getProducts).toBeCalled()
    await screen.findByText(errorMessage)
    screen.getByText('Tente novamente mais tarde')
  })

  it('should show default error message', async () => {
    vi.spyOn(ProductService, 'getProducts').mockRejectedValueOnce({})
    renderHome()
    expect(ProductService.getProducts).toBeCalled()
    await screen.findByText('Verifique sua conexão')
    screen.getByText('Tente novamente mais tarde')
  })

  it('should call get function when clicking the retry button', async () => {
    vi.spyOn(ProductService, 'getProducts').mockRejectedValueOnce({})
    renderHome()
    expect(ProductService.getProducts).toHaveBeenCalledTimes(1)
    await screen.findByText('Verifique sua conexão')
    screen.getByText('Tente novamente mais tarde')
    const button = screen.getByText('Tentar novamente')
    await fireEvent.click(button)
    expect(ProductService.getProducts).toHaveBeenCalledTimes(2)
  })
})