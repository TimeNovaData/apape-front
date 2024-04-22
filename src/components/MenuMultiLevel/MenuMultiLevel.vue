<template>
  <aside
    ref="sidebar"
    class="OSidebar"
    level="0"
    @mouseenter="GLOBAL.debounce(50, handleMouseEnter, 'sideTime')()"
    @mouseleave="GLOBAL.debounce(10, handleMouseLeave, 'sideTime')()">
    <header v-if="showHeader" class="OSidebar-header">
      <OButton
        v-if="Screen.lt.md"
        primary
        class="w-32 h-32 p-0 !bg-primary-light"
        :class="{ 'opacity-0 invisible': true }">
        <q-icon class="w-20 h-20" name="svguse:/icons.svg#icon_back"></q-icon>
      </OButton>

      <RouterLink :to="{ name: 'home' }">
        <MenuLogo />
      </RouterLink>

      <OButton
        v-if="Screen.lt.md"
        primary
        class="w-32 h-32 p-0 !bg-primary-light"
        :class="{ 'opacity-0 invisible': !Screen.lt.md }"
        @click="closeMenu">
        <q-icon class="w-32 h-32" name="svguse:/icons.svg#icon_close"></q-icon>
      </OButton>
    </header>

    <q-list class="Nv0-ul flex flex-col h-full" tag="ul">
      <!-- :to="Nv0.userId ? `${Nv0.href}/${Nv0.userId}` : Nv0.href" -->
      <!--  :sidebar="sidebar" -->
      <MenuLi
        v-for="(Nv0, index) in menuAfterPermission"
        :key="Nv0.title + index"
        :data="Nv0"
        :to="pathTo(Nv0)"
        :show-header="showHeader"
        :exact="true"
        @nv0-click="() => handleClick(true)"
        @click="(e) => Nv0HandleClick(e, Nv0)">
        <q-item-section v-if="Nv0.icon" avatar class="min-w-32 pl-10">
          <q-icon size="26px" :name="Nv0.icon"></q-icon>
        </q-item-section>

        <q-item-section class="Nv0-text">
          <p class="one-line">{{ Nv0.title }}</p>
        </q-item-section>

        <q-item-section v-if="Nv0.submenu" avatar class="opacity-50">
          <q-icon size="1rem" name="navigate_next"></q-icon>
        </q-item-section>
      </MenuLi>
    </q-list>
  </aside>
  <Teleport to="body">
    <!-- v-if="state.open" -->
    <span
      v-if="false"
      class="OSidebar-deep"
      @click="() => handleClick(false)"></span>
  </Teleport>
</template>

<script setup>
import MenuLi from './MenuLi.vue'
import MenuLogo from './MenuLogo.vue'

import { computed, inject, onMounted, onUnmounted, ref, watch } from 'vue'
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { Screen } from 'quasar'

import GLOBAL from 'utils/GLOBAL'
import logoAnimation from 'utils/animation/logo'
import OButton from 'components/Button/OButton.vue'


const props = defineProps({
  menu: { type: Array, default: () => [] },
})

const user = inject('user')
const { menuState: state, closeMenu } = inject('menu')

const menuAfterPermission = computed(() => {
  return props.menu.filter((i) => {
    if (!user.value?.is_staff && i.permissions === 'staff') return false
    else return i
  })
})

const pathTo = (i) => {
  const params = i.params || {}
  return {
    name: i.name,
    ...params,
  }
}

const showHeader = ref(true)

const sidebar = ref(null)

let $ = {}
let animate

onMounted(() => {
  $ = {
    Nv0: sidebar.value,
    body: document.body,
  }
  animate = logoAnimation('.OSidebar')
  animate.logoAnimationToNDT.play().progress(1)
  setTimeout(() => {
    state.value.passive = false
  }, 300)

  window.animaa = animate
})

watch(showHeader, () => {
  if (!showHeader.value) {
    $.body.classList.add('showHeader')
    animate = logoAnimation('.header-top')
    animate.logoAnimationToNDT.play().progress(1)
  } else {
    $.body.classList.remove('showHeader')
  }
})

watch(
  () => state.value.open,
  (open) => {
    if (open) {
      $.body.classList.add('sidebar-open')
    } else {
      $.body.classList.remove('sidebar-open')
      state.value.hover = false
      toggleActiveOnLis()
    }
  }
)

watch(
  () => state.value.hover,
  (hover) => {
    if (hover) {
      !Screen.lt.md && $.body.classList.add('sidebar-active')
      animate.logoAnimationToNovadata.play().timeScale(1.1)
    } else {
      $.body.classList.remove('sidebar-active')
      animate.logoAnimationToNovadata.reverse()
    }
  }
)


onBeforeRouteLeave(() => {
  state.value = {
    hover: false,
    open: false,
    passive: true,
  }

})

onBeforeRouteUpdate(() => {
  state.value = {
    hover: false,
    open: false,
  }

})

onUnmounted(() => {
  state.value = {
    hover: false,
    open: false,
    passive: true,
  }
  // console.log('desmontou')
  animate.logoAnimationToNDT.seek()
  animate.logoAnimationToNovadata.seek(0)
})

function handleMouseEnter() {
  if (state.value.passive) return
  state.value.hover = true
}

function handleMouseLeave() {
  if (state.value.open || state.value.passive) return
  state.value.hover = false
}

function handleClick(val) {
  if (state.value.passive) return

  state.value.open = val
}

function Nv0HandleClick({ currentTarget }, Nv0) {
  if (Nv0.href) {
    GLOBAL.debounce(0, handleClick, 'sideTime')(false)
  }
  toggleActiveOnLis(currentTarget)
}

function toggleActiveOnLis(current) {
  document
    .querySelectorAll('.Nv0-ul > li')
    .forEach((i) => i.classList.remove('active'))
  if (current) current.classList.add('active')
}
</script>

<style lang="sass">
@import "src/css/responsivo.sass"

:root
  --Nv0-sidebar-width: 5rem
  --Nv0-sidebar-width-open: 21.25rem
  --Nv0-sidebar-transition: ease-out
  // cubic-bezier(.4,0,.2,1)
  --Nv0-sidebar-border:1px solid rgba(var(--neutral-100),0.1)
  --Nv0-sidebar-z-index: 5010
  --Nv0-sidebar-overflow: hidden
  --Nv1-sidebar-width: 21.25rem
  --Nv1-sidebar-z-index: 9019
  --Nv2-sidebar-z-index: 9018
  --z-index-deep: 9000
  --sidebar-top:0
  --sidebar-header-height: 5.4375rem
  @include d(md)
    --Nv0-sidebar-width: 0rem

  @include d(sm)
    --Nv0-sidebar-width-open: 100%


.body--light
  --logo-color: #000
  --sidebar-bg: rgb(var(--white))
  --Nv1-sidebar-bg: rgb(var(--white))
  --Nv2-sidebar-bg: rgb(var(--white))

.body--dark
  --logo-color: white
  --sidebar-bg: rgb(var(--d-neutral-10))
  --Nv1-sidebar-bg: rgb(var(--d-neutral-20))
  --Nv2-sidebar-bg: rgb(var(--d-neutral-30))
  --Nv0-sidebar-border:1px solid rgba(var(--white),0.05)

.OSidebar
  position: fixed
  height: 100vh
  left: 0
  top: var(--sidebar-top)
  width: var(--Nv0-sidebar-width)
  z-index: var(--Nv0-sidebar-z-index)
  background: var(--sidebar-bg)
  transition:.2s  var(--Nv0-sidebar-transition)
  border-right: var(--Nv0-sidebar-border)
  transition-property: width
  overflow: var(--Nv0-sidebar-overflow)
  display: flex
  flex-direction: column
  .showHeader &
    --sidebar-top:51px

  .sidebar-active &
    width: var(--Nv0-sidebar-width-open)
    --Nv0-sidebar-overflow: initial

  .sidebar-open &
    width: var(--Nv0-sidebar-width-open)

  @include d(md)
    .q-item
      .q-icon
        font-size: 1.5rem !important

      p.one-line
        font-size: .875rem

// Header
.OSidebar-header
  padding: 1.5rem .5rem 1.5rem
  border-bottom: var(--Nv0-sidebar-border)
  height: var(--sidebar-header-height)

  @include d(md)
    display: flex
    align-items: center
    justify-content: space-between
    padding: .75rem .5rem

//itens
.Nv0-ul
  margin-top: 2rem
  flex-wrap: nowrap
  overflow-y: auto
  overflow-x: hidden
  @include d(md)
    margin-top: 1rem
    padding-bottom: 1rem

.Nv0-li
  white-space: nowrap
.Nv0-text
  opacity: 0
  transition: opacity .2s ease

.sidebar-active,
.sidebar-open
  .OSidebar
    .Nv0-text
      opacity: 1

// Fundo
.OSidebar-deep
  width: 100vw
  height: 100vh
  background: rgba(0,0,0,0.1)
  z-index: var(--z-index-deep)
  position: fixed
  cursor: pointer
  top: var(--sidebar-top)
  left: 0
  backdrop-filter: blur(10px)
</style>
