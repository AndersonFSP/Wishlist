<template>
  <div class="rating">
    <div>
      <i
        v-for="item in 5"
        :key="item"
        class="fa"
        :class="getClass(item)"
        data-testid="star-icon"
      ></i>
    </div>
    <span class="rating-value">{{ rating }}</span>
  </div>
</template>
<script setup lang="ts">
interface Props {
  rating: number
}
const props = defineProps<Props>()

function getClass(item: number) {
  const difference = props.rating - item + 1
  if (difference >= 1) return 'fa-star'
  else if (difference < 1 && difference > 0) return 'fa-star-half-o'
  else return 'fa-star-o'
}
</script>
<style lang="less" scoped>
.rating {
  display: flex;
  gap: @size-spacing-1;
  align-items: center;
  color: orange;

  .rating-value {
    font-size: 0.8rem;
  }
}
</style>
