<template>
  <div class="cards">
    <Card
      v-for="item in wishlist"
      :key="item.code"
      class="card"
      :title="item.name"
      :rating="item.rating"
      :fullPriceInCents="item.fullPriceInCents"
      :salePriceInCents="item.salePriceInCents"
      :image="item.image"
      wish
      @on-click-button="removeItem(item)"
    />
  </div>
</template>
<script setup lang="ts">
import { getWishlist, setWishlist } from '@/helpers/browser';
import type { IProduct } from '@/types';
import { onMounted, ref } from 'vue';
import { Card } from '@/components'

const wishlist = ref<IProduct[]>([])

function setWish() {
  wishlist.value = getWishlist()
}

function removeItem(wish: IProduct) {
  wishlist.value = wishlist.value.filter(item => item.code !== wish.code)
  setWishlist(wishlist.value)
}

onMounted(setWish)
</script>
<style lang="less" scoped>
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
</style>