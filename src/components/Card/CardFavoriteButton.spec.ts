import { render, screen } from '@testing-library/vue'
import CardFavoriteButton from './CardFavoriteButton.vue'

describe('CardFavoriteButton', () => {
  interface OverrideProps {
    favorited?: boolean
  }
  beforeEach(() => vi.clearAllMocks())
  const renderCardFavoriteButton = (props: OverrideProps = {}) =>
    render(CardFavoriteButton, { props })

  it('should render CardFavoriteButton', () => {
    renderCardFavoriteButton()
    const button = screen.getByTestId('favorite-button')
    expect(button).toHaveClass('favorite-button')
    expect(button).not.toHaveClass('favorited')
  })

  it('should have the right class when favored', () => {
    renderCardFavoriteButton({ favorited: true })
    const button = screen.getByTestId('favorite-button')
    expect(button).toHaveClass('favorited')
  })
})
