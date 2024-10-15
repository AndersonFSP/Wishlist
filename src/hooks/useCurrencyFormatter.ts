import { computed } from 'vue';

export function useCurrencyFormatter(valueInCents: number | string) {
  const formattedPrice = computed(() => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(Number(valueInCents) / 100);
  });

  return {
    formattedPrice,
  };
}