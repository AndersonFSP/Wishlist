import { render, screen, fireEvent } from '@testing-library/vue'
import Button from './Button.vue'


describe('Button', () => {
  const label = 'label'
  const renderButton = () => render(Button, { props: { label } })
  beforeEach(() => vi.clearAllMocks())
  it('should render Button', () => {
    renderButton()
    screen.getByText(label)
  })

  it('should emit click', async () => {
    const { emitted } = renderButton()
    const button = screen.getByText(label)
    await fireEvent.click(button)
    expect(emitted()['on-click']).toBeDefined()
  })
})
