<template>
  <RouterLink exact :to="to" class="link">
    <i v-if="icon" class="fa fa-2x" :class="iconClass" data-testid="link-icon"></i>
    <span class="link-text">
      <slot></slot>
    </span>
  </RouterLink>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

interface Props {
  to: string
  icon?: string 
}
const props = defineProps<Props>()
const iconClass = computed(() => [`fa-${props.icon}-o`])
</script>

<style scoped lang="less">
.link {
  text-decoration: none;
  font-weight: bold;
  color: @link-color;
  transition: all ease 0.3s;
  cursor: pointer;
  display: flex;
  gap: @size-spacing-1;
  align-items: center;

  &:hover {
    color: @base-hover;
  }
}
.router-link-active {
  .link-text {
    text-decoration: underline;
  }
}
</style>
