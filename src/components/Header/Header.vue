<template>
  <header>
    <nav class="header-container">
      <div class="logo">
        <img
          src="@/assets/logo.svg"
          alt="Logo header"
          data-testid="logo"
          height="30"
        />
      </div>
      <section>
        <Link to="wishlist" icon="heart">Wishlist</Link>
        <FloatMenu />
      </section>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { FloatMenu, Link } from '@/components'
</script>

<style lang="less" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: @primary-color;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  z-index: 1000;

  .header-container {
    padding: 0 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    section {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 30%;
      max-width: 250px;
    }
  }
}
</style>