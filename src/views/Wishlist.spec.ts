import { fireEvent, render, screen, waitFor } from '@testing-library/vue'
import Wishlist from './Wishlist.vue'
import { mockGetProducts } from '@/mocks' 
import { createRouter, createWebHistory } from 'vue-router'
import { defineComponent } from 'vue'

describe('Wishlist', () => {
  beforeEach(() => vi.clearAllMocks())
  afterEach(() => localStorage.clear())
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/home',
        component: defineComponent({ template: `<div></div>` }),
        name: 'Home',
      }
    ],
  })
  const mockPush = vi.fn()
  router.push = mockPush
  const renderWishlist = () => render(Wishlist, { global: { plugins: [router] } })

  it('should render Wishlist', async () => {
    localStorage.setItem('wishlist', JSON.stringify(mockGetProducts.products))
    renderWishlist()
    await waitFor(() => {
      mockGetProducts.products.forEach(product => {
        screen.getByText(product.name)
      })
    })
  })

  it('should show empty view', async () => {
    localStorage.setItem('wishlist', JSON.stringify([]))
    renderWishlist()
    screen.getByText('Sua whislist está vazia')
    screen.getByText('Que tal explorar nossos produtos?')
  })

  it('should redirect to home', async () => {
    localStorage.setItem('wishlist', JSON.stringify([]))
    renderWishlist()
    const button = screen.getByText('Explorar produtos')
    await fireEvent.click(button)
    expect(mockPush).toBeCalledWith({ name: 'Home' })
  })
})