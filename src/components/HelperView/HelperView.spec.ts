import { fireEvent, render, screen } from '@testing-library/vue'
import HelperView from './HelperView.vue'

describe('HelperView', () => {
  beforeEach(() => vi.clearAllMocks())
  const props = { icon: 'icon-test', title: 'Title test', description: 'My description', buttonLabel: 'label' }
  const renderHelperView = () => render(HelperView, { props })

  it('should render HelperView', () => {
    renderHelperView()
    screen.getByText(props.description)
    screen.getByText(props.title)
    expect(screen.getByTestId('helper-view-icon')).toHaveClass(`fa-${props.icon}`)
  })

  it('should render emit on click button', async () => {
    const { emitted } = renderHelperView()
    const button = screen.getByText(props.buttonLabel)
    await fireEvent.click(button)
    expect(emitted()['on-click-button']).toBeDefined()
  })
})
