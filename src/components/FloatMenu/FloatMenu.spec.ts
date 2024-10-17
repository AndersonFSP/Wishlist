import { fireEvent, render, screen } from '@testing-library/vue'
import FloatMenu from './FloatMenu.vue'

describe('FloatMenu', () => {
  interface OverrideProps {
    favorited?: boolean
  }
  beforeEach(() => vi.clearAllMocks())
  const renderFloatMenu = (props: OverrideProps = {}) =>
    render(FloatMenu, { props })

  it('should render FloatMenu', () => {
    renderFloatMenu()
    screen.getByTestId('user-icon')
    expect(screen.getByTestId('dropdown')).not.toBeVisible()
    expect(screen.getByText('Entrar')).not.toBeVisible()
    expect(screen.getByText('Minha Conta')).not.toBeVisible()
    expect(screen.getByText('Minha Conta')).not.toBeVisible()
    expect(screen.getByText('Minha Conta')).not.toBeVisible()
  })

  it('should render FloatMenu', async () => {
    renderFloatMenu()
    const userIcon = screen.getByTestId('user-icon')
    await fireEvent.mouseOver(userIcon)
    expect(screen.getByTestId('dropdown')).toBeVisible()
    expect(screen.getByText('Entrar')).toBeVisible()
    expect(screen.getByText('Minha Conta')).toBeVisible()
    expect(screen.getByText('Minha Conta')).toBeVisible()
    expect(screen.getByText('Minha Conta')).toBeVisible()
  })
})
