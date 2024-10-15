<template>
  <section class="helper-view">
    <i class="icon fa" :class="iconClass" aria-hidden="true"></i>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <Button 
      v-if="buttonLabel" 
      class="helper-view-button" 
      :label="buttonLabel" 
      @click="emits('on-click-button')" 
    />
  </section>
</template>
<script setup lang="ts">
import { Button } from '@/components'
import { computed } from 'vue';

interface Props {
  icon: string
  title: string
  description: string
  buttonLabel?: string
}
interface Emits {
  (event: 'on-click-button'): void
}

const props = defineProps<Props>()
const emits = defineEmits<Emits>()
const iconClass = computed(() => [`fa-${props.icon}`])
</script>
<style lang="less" scoped>
.helper-view  {
  text-align: center;
  max-width: 280px;

  h1 {
    font-weight: 700;
    margin: @size-spacing-5 0 @size-spacing-1;
  }
  .icon {
    font-size: 4rem;
    color: @primary-color;
  }

  .helper-view-button {
    margin-top: @size-spacing-6;
  }
}
</style>