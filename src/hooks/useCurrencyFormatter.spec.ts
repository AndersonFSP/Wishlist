import { useCurrencyFormatter } from '@/hooks/useCurrencyFormatter'

describe('useCurrencyFormatter', () => {
  it('should format number in cents correctly to BRL', () => {
    const { formattedPrice } = useCurrencyFormatter(39999)
    expect(formattedPrice.value).toBe('R$ 399,99')
  })

  it('should format string in cents correctly to BRL', () => {
    const { formattedPrice } = useCurrencyFormatter('30399')
    expect(formattedPrice.value).toBe('R$ 303,99')
  })
})