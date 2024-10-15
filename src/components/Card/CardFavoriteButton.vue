<template>
  <button :class="computedClass"> 
    <i class="fa fa-heart-o"></i>
  </button>
</template>
<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  active?: boolean
}
const props = defineProps<Props>()
const computedClass = computed(() => ({ 'favorite-button': true, active: props.active }))
</script>
<style lang="less" scoped>
  .favorite-button {
    border-radius: 50%;
    padding: 4px;
    width: 30px;
    height: 30px;
    background-color: grey;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    transition: all 0.1s ease-in-out;

    &:hover {
      transform: scale(1.3);
    }
    i {
      font-size: 20px;
    }
  }
  .active {
    background-color: red;
  }
</style>