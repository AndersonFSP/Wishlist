import { render, screen } from '@testing-library/vue'
import Link from './Link.vue'

describe('Link', () => {

  beforeEach(() => vi.clearAllMocks())
  const props = { to: '', icon: 'heart' }
  const renderHeader = () => render(Link, { props, slots: { default: 'My slot Text' } })

  it('should render Link', () => {
    renderHeader()
    const icon = screen.getByTestId('link-icon')
    expect(icon).toHaveClass(`fa-${props.icon}-o`)
    screen.getByText('My slot Text')
  })
})
