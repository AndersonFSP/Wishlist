import { render, screen } from '@testing-library/vue'
import Header from './Header.vue'

describe('Header', () => {

  beforeEach(() => vi.clearAllMocks())
  const renderHeader = () => render(Header)

  it('should render FloatMenu', () => {
    renderHeader()
    const img = screen.getByTestId('logo')
    expect(img).toHaveAttribute('src', '/src/assets/logo.svg')
    expect(img).toHaveAttribute('alt', 'Logo header')
    screen.getByText('Wishlist')
    screen.getByTestId('user-icon')
  })
})
