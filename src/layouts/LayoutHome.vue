<template>
  <q-layout view="hHh Lpr fFf" class="home-layout">
    <MenuMultiLevel :menu="menuList" />
    <BaseHeader :breadcrumbs="$route.meta.breadcrumbs" @open:menu="openMenu" />
    <q-page-container class="home-page-container bg-neutral-10">
      <router-view />
    </q-page-container>
  </q-layout>
</template>


<script setup>

import * as menu from 'components/MenuMultiLevel/MenuState'
import { openMenu } from 'components/MenuMultiLevel/MenuState'
import { provide } from 'vue'
import BaseHeader from 'components/Header/BaseHeader.vue'
import menuList from 'utils/menuList.js'
import MenuMultiLevel from 'components/MenuMultiLevel/MenuMultiLevel.vue'

provide('menu', {
  menuState: menu.state,
  openMenu: menu.openMenu,
  closeMenu: menu.closeMenu,

})

</script>

<style lang="sass">
.home-page-container
  --header-bg: white
  --top-size: var(--header-base-height)
  margin-left: var(--Nv0-sidebar-width)
  height:100vh

  .body--dark &
    background: rgb(var(--d-neutral-10))
    
</style>

<style lang="sass" scoped>

</style>
