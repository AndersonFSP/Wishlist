<template>
  <section class="container">
    <div v-if="hasError"  class="error-content">
      <HelperView 
        icon="exclamation-circle" 
        :title="errorMessage" 
        description="Tente novamente mais tarde" 
        button-label="Tentar novamente"
        @on-click-button="handleGetProducts"
      />
    </div>
    <div v-else class="cards">
      <Card
        v-for="product in listProducts"
        :key="product.code"
        class="card"
        :title="product.name"
        :rating="product.rating"
        :full-price-in-cents="product.fullPriceInCents"
        :sale-price-in-cents="product.salePriceInCents"
        :image="product.image"
        :active="product.active"
        @on-click-button="toggleFavorite(product)"
      />
    </div>
  </section>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { Card, HelperView } from '@/components'
import { getWishlist, setWishlist } from '@/helpers/browser'
import ProductService from '@/services/ProductService'
import type { IProduct } from '@/types'

const products = ref<IProduct[]>([])
const wishlist = ref<IProduct[]>([])
const hasError = ref<boolean>(false)
const errorMessage = ref<string>('')

const listProducts = computed(() =>
  products.value.map(product => ({
    ...product,
    active: wishlist.value.some(wish => wish.code === product.code),
  })),
)

async function handleGetProducts() {
  hasError.value = false
  try {
    const { products: response } = await ProductService.getProducts()
    products.value = response
  } catch (err) {
    const baseError = err
    errorMessage.value = typeof baseError === 'string' ? baseError : 'Verifique sua conexão'
    hasError.value = true
  }
}

function handleGetWishList() {
  wishlist.value = getWishlist()
}

function toggleFavorite(product: IProduct) {
  const isFavorite = wishlist.value.some(item => item.code === product.code)
  if (isFavorite) {
    const updatedWishlist = wishlist.value.filter(item => item.code !== product.code)
    wishlist.value = updatedWishlist
    setWishlist(updatedWishlist)
  } else {
    wishlist.value.push(product)
    setWishlist(wishlist.value)
  }
}
onMounted(() => {
  handleGetProducts()
  handleGetWishList()
})
</script>
<style lang="less" scoped>
.container {
  .error-content {
    display: flex;
    justify-content: center;
    margin-top: @size-spacing-8;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: @size-spacing-8;
  }

  .card {
    flex: 1 0 300px;
    max-width: 250px;
    box-sizing: border-box;
  }

  @media screen and (min-width: 20em) {
    .card {
      max-width: calc(100% - 1em);
    }
  }

  @media screen and (min-width: 40em) {
    .card {
      max-width: calc(50% - 1em);
    }
  }

  @media screen and (min-width: 60em) {
    .card {
      max-width: calc(33% - 1em);
    }
  }
}
</style>
