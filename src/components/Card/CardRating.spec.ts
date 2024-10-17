import { render, screen } from '@testing-library/vue'
import CardRating from './CardRating.vue'

describe('CardRating', () => {
  beforeEach(() => vi.clearAllMocks())
  const renderCardRating = (props: { rating: number }) =>
    render(CardRating, { props })

  it.each([
    {
      rating: 5,
      classOrders: ['fa-star', 'fa-star', 'fa-star', 'fa-star', 'fa-star'],
    },
    {
      rating: 4,
      classOrders: ['fa-star', 'fa-star', 'fa-star', 'fa-star', 'fa-star-o'],
    },
    {
      rating: 3.5,
      classOrders: [
        'fa-star',
        'fa-star',
        'fa-star',
        'fa-star-half-o',
        'fa-star-o',
      ],
    },
    {
      rating: 1,
      classOrders: [
        'fa-star',
        'fa-star-o',
        'fa-star-o',
        'fa-star-o',
        'fa-star-o',
      ],
    },
  ])('should render CardRating', ({ classOrders, rating }) => {
    renderCardRating({ rating })
    const icons = screen.getAllByTestId('star-icon')
    expect(icons).toHaveLength(5)
    icons.forEach((icon, index) => expect(icon).toHaveClass(classOrders[index]))
  })
})
