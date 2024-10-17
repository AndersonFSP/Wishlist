import { render, screen, fireEvent } from '@testing-library/vue'
import Card from './Card.vue'

describe('Card', () => {
  interface OverrideProps {
    title: string
    rating: number
    fullPriceInCents: string
    salePriceInCents: string
    image: string
    favorited?: boolean
    wish?: boolean
  }
  beforeEach(() => vi.clearAllMocks())
  const props: OverrideProps = { title: 'My Tittle', rating: 5, fullPriceInCents: '39999', salePriceInCents: '30399', image: 'my image', favorited: false }
  const renderCard = (overrideProps?: Partial<OverrideProps>) => render(Card, { props: { ...props, ...overrideProps } })

  it('should render Card', () => {
    renderCard()
    screen.getByText(props.title)
    screen.getByText('R$ 303,99')
    screen.getByText('R$ 399,99')
    const img = screen.getByTestId('image')
    expect(img).toHaveAttribute('src', props.image)
    screen.getByTestId('favorite-button')
  })

  it('should emit click event when clicking the button', async () => {
    const { emitted } = renderCard()
    const button = screen.getByTestId('favorite-button')
    await fireEvent.click(button)
    expect(emitted()['on-click-button']).toBeDefined()
  })

  it('should render remove button', async () => {
    renderCard({ wish: true })
    expect(screen.queryByTestId('favorite-button')).not.toBeInTheDocument()
   screen.getByTestId('remove-button')
  })
})
