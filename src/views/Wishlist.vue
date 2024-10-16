<template>
  <section>
    <div v-if="hasItems" class="cards">
      <TransitionGroup name="list">
        <Card
          v-for="item in wishlist"
          :key="item.code"
          class="card"
          :title="item.name"
          :rating="item.rating"
          :full-price-in-cents="item.fullPriceInCents"
          :sale-price-in-cents="item.salePriceInCents"
          :image="item.image"
          wish
          @on-click-button="removeItem(item)"
        />
      </TransitionGroup>
    </div>
    <div v-else class="empty-content">
      <HelperView 
        icon="cart-plus" 
        title="Sua whislist está vazia" 
        description="Que tal explorar nossos produtos?" 
        button-label="Explorar produtos"
        @on-click-button="goToProductsList"
      />
    </div>
  </section>
</template>
<script setup lang="ts">
import { getWishlist, setWishlist } from '@/helpers/browser';
import type { IProduct } from '@/types';
import { computed, onMounted, ref } from 'vue';
import { Card, HelperView } from '@/components'
import { useRouter } from 'vue-router'

const router = useRouter()
const wishlist = ref<IProduct[]>([])

const hasItems = computed(() => wishlist.value.length)

function setWish() {
  wishlist.value = getWishlist()
}

function removeItem(wish: IProduct) {
  wishlist.value = wishlist.value.filter(item => item.code !== wish.code)
  setWishlist(wishlist.value)
}

function goToProductsList() {
  router.push({ name: 'Home' })
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

  .empty-content {
    display: flex;
    justify-content: center;
    margin-top: @size-spacing-8;
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

  .list-enter-active, .list-leave-active {
    transition: all 0.2s ease;
  }
  .list-enter-from, .list-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }
  .list-enter-to, .list-leave-from {
    opacity: 1;
    transform: translateY(0);
  }
</style>