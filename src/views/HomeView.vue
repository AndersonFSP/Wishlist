<template>
  <section class="container">
    <div class="cards">
      <Card
        v-for="product in products"
        :key="product.code"
        class="card"
        :title="product.name"
        :rating="product.rating"
        :fullPriceInCents="product.fullPriceInCents"
        :salePriceInCents="product.salePriceInCents"
        :image="product.image"
        :active="product.active"
        @on-click-button="toggleFavorite(product)"
      />
    </div>
  </section>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Card } from '@/components'
import { getWishlist, setWishlist } from '@/helpers/browser'
import Mock from '@/services/mock-products.json'
import type { IProduct } from '@/types'

const products = ref([] as IProduct[])

function loadProducts() {
  const wishlist = getWishlist()
  products.value = Mock.products.map(product => ({
    ...product,
    active: wishlist.some(wish => wish.code === product.code),
  }))
}

function toggleFavorite(product: IProduct) {
  const wishlist = getWishlist()
  const isFavorite = wishlist.some(item => item.code === product.code)
  if (isFavorite) {
    const updatedWishlist = wishlist.filter(item => item.code !== product.code)
    setWishlist(updatedWishlist)
  } else {
    wishlist.push(product)
    setWishlist(wishlist)
  }
  loadProducts()
}
onMounted(loadProducts)
</script>
<style lang="less" scoped>
.container {
  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: @size-spacing-6;
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
