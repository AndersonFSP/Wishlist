<template>
  <nav>
    <span
      v-for="(breadcrumb, index) in breadcrumbs"
      :key="index"
      class="container"
    >
      <span v-if="index < breadcrumbs.length - 1" class="crumb">
        <RouterLink :to="{ name: breadcrumb }">
          {{ breadcrumb }}
        </RouterLink>
      </span>
      <span v-else class="current-crumb">{{ breadcrumb }}</span>
      <span v-if="index < breadcrumbs.length - 1"> / </span>
    </span>
    <hr />
  </nav>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const router = useRoute()

const breadcrumbs = computed(() => router.meta?.breadcrumbs as string[])
</script>
<style lang="less" scoped>
nav {
  color: @primary-color;

  .current-crumb {
    font-weight: 900;
  }
  hr {
    margin-top: @size-spacing-5;
    margin-bottom: @size-spacing-4;
  }
  a {
    text-decoration: none;
  }
}
</style>
