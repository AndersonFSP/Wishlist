<template>
  <div class="menu-container" @mouseover="show" @mouseleave="hide">
    <div class="menu-item">
      <i class="fa fa-user-o fa-2x" data-testid="user-icon"></i>
      <div v-show="isDropdownVisible" class="dropdown-menu" data-testid="dropdown">
        <div class="dropdown-arrow"></div>
        <ul>
          <li><a href="#">Entrar</a></li>
          <li><a href="#">Minha Conta</a></li>
          <li><a href="#">Endereços</a></li>
          <li><a href="#">Minha Netshoes</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isDropdownVisible = ref(false)

function show() {
  isDropdownVisible.value = true
}

function hide() {
  isDropdownVisible.value = false
}
</script>

<style lang="less" scoped>
.menu-container {
  position: relative;
  display: inline-block;
  color: #fff;
}

.dropdown-menu {
  position: absolute;
  top: 120%;
  right: -@size-spacing-1;
  background-color: @background-color;
  box-shadow: 0 @size-spacing-1 @size-spacing-2 rgba(0, 0, 0, 0.1);
  min-width: 140px;
  z-index: 1000;
  border-radius: @size-radius-2;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: @size-spacing-1 @size-spacing-2;
  }
}

.dropdown-menu a {
  text-decoration: none;
  color: #161718;
  font-weight: 400;

  &:hover {
    color: @primary-color;
  }
}

.dropdown-arrow {
  position: absolute;
  top: -@size-spacing-2;
  right: @size-spacing-1;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid @background-color;
}
</style>
