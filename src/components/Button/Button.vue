<template>
  <button :aria-label="label">
    {{ label }}
  </button>
</template>

<script lang="ts" setup>

interface Props {
  label: string
}
defineProps<Props>()
</script>

<style scoped lang="less">
button {
  transition: all 200ms ease;
  display: block;
  width: 100%;
  border-radius: 5px;
  padding: @size-spacing-2 @size-spacing-2;
  font-size: 1.2em;
  border: 1px solid @primary-button;
  color: @primary-button;
  background-color: @background-color;
  cursor: pointer;
  text-align: center;
  padding: @size-spacing-3 0;
}
</style>
