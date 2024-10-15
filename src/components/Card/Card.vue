<template>
  <div class="card">
    <div class="card-image-container">
      <img :src="image" alt="Nome do Produto">
    </div>
    <div class="button-container" @click="emits('on-click-button')">
      <CardFavoriteButton v-if="!wish" :active="active"  />
      <button v-else class="remove-button">
        <i class="fa-solid fa-x"></i>
      </button>
    </div>
    <p class="title">{{ title }}</p>
    <CardRating :rating="rating" />
    <div>
      <p class="full-price">{{ fullPriceFormatted }}</p>
      <p class="price">{{ salePriceFormatted }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { CardFavoriteButton, CardRating } from '@/components'
import { useCurrencyFormatter } from '@/hooks/useCurrencyFormatter';

interface Props {
  title: string
  rating: number
  fullPriceInCents: string
  salePriceInCents: string
  image: string
  active?: boolean
  wish?: boolean
}
interface Emits {
  (event: 'on-click-button'): void
}
const props = defineProps<Props>()
const emits = defineEmits<Emits>()

const { formattedPrice: fullPriceFormatted } = useCurrencyFormatter(props.fullPriceInCents)
const { formattedPrice: salePriceFormatted } = useCurrencyFormatter(props.salePriceInCents)
</script>
<style lang="less" scoped>

.card {
  position: relative;
  border-radius: @size-radius-2;
  border: 1px solid lightgray;
  max-width: 250px;
  min-height: 380px;
  padding: @size-spacing-4;
  text-align: left;
  box-shadow: 6px 2px 5px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  gap: @size-spacing-2;

  .card-image-container {
    width: 100%;
    height: auto;
    min-height: 200px;
    overflow: hidden;
  
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .title {
    font-size: 0.9rem;
    font-weight: 500;
    height: 100px;
  }

  .rating {
    display: flex;
    gap: @size-spacing-1;
    align-items: center;
  
    .rating-value {
      font-size: 0.8rem;
    }
  }

  .button-container {
    position: absolute;
    top: 0;
    right: 0;
    margin: @size-spacing-2;
  }

  .remove-button {
    border: none;
    cursor: pointer;
    font-size: 1rem;
    background-color: transparent;
    background-color: #fff;
    border-radius: 50%;
  }

  .price {
    color: @primary-color;
    font-weight: bold;
    font-size: 1.1rem;
  }

  .full-price {
    text-decoration: line-through;
    color: grey;
    font-size: 0.7rem;
  }
}
</style>
