<template>
  <!-- Nv0 li  -->
  <div v-if="data.separator" class="flex-[99999]"></div>

  <q-item
    v-else
    class="Nv0-li text-neutral-black/40"
    tag="li"
    clickable
    :active="active"
    @click="$emit('nv0-click')">
    <slot>
      <!-- Nv0 Slot onde entra  o conteudo da li  -->
    </slot>

    <!-- Submenus  ------------------------------>
    <q-list
      v-if="haveSubmenu"
      tag="ul"
      class="submenu"
      :level="haveSubmenu[0].nivel">
      <li class="Nv1-li">
        <!-- Nv1 Header  -->
        <header v-if="showHeader" class="Nv1-header">
          <p class="text-title-4 one-line">{{ props.data.title }}</p>
          <q-icon size="24px" :name="props.data.icon"></q-icon>
        </header>
      </li>
      <!-- Nv1 item  -->
      <q-item
        v-for="Nv1 in haveSubmenu"
        :key="Nv1.title"
        clickable
        tag="li"
        class="submenu-li"
        :exact="false">
        <!-- Nv1 Content  -->
        <q-item-section>
          <p class="one-line">{{ Nv1.title }}</p>
        </q-item-section>

        <!-- Button ADD && List -->
        <q-item-section
          v-if="Nv1.add || Nv1.list"
          avatar
          class="flex gap-4 flex-nowrap flex-row items-center">
          <o-button
            v-if="Nv1.list"
            class="action-button"
            :to="Nv1.list"
            size="sm"
            tertiary>
            <q-tooltip v-bind="tooltipProps">Lista</q-tooltip>

            <q-icon size="1.25rem" name="svguse:/icons.svg#icon_list"></q-icon>
          </o-button>

          <o-button
            v-if="Nv1.add"
            class="action-button"
            :to="Nv1.add"
            size="sm"
            tertiary>
            <q-tooltip v-bind="tooltipProps">Adicionar</q-tooltip>

            <q-icon size="1.25rem" name="svguse:/icons.svg#icon_add"></q-icon>
          </o-button>
        </q-item-section>

        <!-- Arrow  -->
        <q-item-section v-if="Nv1.submenu" avatar class="opacity-50">
          <q-icon size="1rem" name="navigate_next"></q-icon>
        </q-item-section>

        <!-- Submenu Nv2 -->
        <q-list
          v-if="Nv1.submenu"
          tag="ul"
          class="submenu"
          :level="Nv1.submenu[0].nivel">
          <li class="Nv2-li">
            <!-- Header Nv2 -->
            <header v-if="showHeader" class="Nv2-header">
              <p class="text-title-4 one-line">{{ Nv1.title }}</p>
            </header>
          </li>
          <q-item
            v-for="Nv2 in Nv1.submenu"
            :key="Nv2.title"
            clickable
            tag="li"
            class="submenu-li">
            <q-item-section>
              <p class="one-line">{{ Nv2.title }}</p>
            </q-item-section>
            <!-- Button ADD && List -->
            <q-item-section
              v-if="Nv2.add || Nv2.list"
              avatar
              class="flex gap-4 flex-nowrap flex-row items-center">
              <o-button
                v-if="Nv2.list"
                class="action-button"
                :to="Nv2.list"
                size="sm"
                tertiary>
                <q-tooltip v-bind="tooltipProps">Lista</q-tooltip>
                <q-icon
                  size="1.25rem"
                  name="svguse:/icons.svg#icon_list"></q-icon>
              </o-button>

              <o-button
                v-if="Nv2.add"
                class="action-button"
                :to="Nv2.add"
                size="sm"
                tertiary>
                <q-tooltip v-bind="tooltipProps">Adicionar</q-tooltip>

                <q-icon
                  size="1.25rem"
                  name="svguse:/icons.svg#icon_add"></q-icon>
              </o-button>
            </q-item-section>
          </q-item>
        </q-list>
      </q-item>
    </q-list>
  </q-item>
</template>

<script>
// export default { inheritAttrs: false }
</script>

<script setup>
import { computed, ref } from 'vue'
import { onBeforeRouteUpdate, useRouter } from 'vue-router'
import OButton from 'components/Button/OButton.vue'

const props = defineProps({
  data: { type: Object, default: () => ({}) },
  // sidebar: { type: Array, default: () => [] },
  showHeader: { type: Boolean, default: true },
})

const emit = defineEmits(['nv0-click'])

const active = ref(window.location.pathname.includes(props.data?.name))

const haveSubmenu = ref(props.data.submenu)

const tooltipProps = {
  anchor: 'top middle',
  self: 'bottom middle',
  offset: [10, 10],
}

const router = useRouter()

onBeforeRouteUpdate((v) => {
  active.value = v.name.includes(props.data?.name)
})
</script>

<style lang="sass">
@import '../../css/quasar/variables'
@import '../../css/quasar/core/typography'

.OSidebar li
  position: relative
  user-select: none
  @include text(paragraph-2)
  color: rgb(var(--neutral-70))


  .body--dark &
    color: rgba(var(--white),0.9) !important

  .submenu
    display: none
    flex-direction: column
    height: 100vh
    top: var(--sidebar-top)
    position: fixed
    width: var(--Nv1-sidebar-width)
    border-left: var(--Nv0-sidebar-border)
    transform: translate3d(0,0,0)

    &[level="1"]
      left: calc(var(--Nv1-sidebar-width) - 1px)
      z-index: var(--Nv1-sidebar-z-index)
      background: var(--Nv1-sidebar-bg)

    &[level="2"]
      left: calc((var(--Nv1-sidebar-width)) - 1px)
      z-index: var(--Nv2-sidebar-z-index)
      background: var(--Nv2-sidebar-bg)
      top: 0

  .Nv1-li,
  .Nv2-li
    margin-bottom: 2rem

  .Nv1-header
    display: flex
    align-items: center
    gap:.5rem
    border-bottom: var(--Nv0-sidebar-border)
    padding: 1rem
    height: var(--sidebar-header-height)
    justify-content: space-between
    position: relative

    //ornamento verde Nv1
    &::after
      content:''
      display: block
      position: absolute
      top: 0
      bottom: 0
      margin: auto 0
      left: 0
      background: rgb(var(--primary-pure))
      height: 1.5rem
      width:3px
      border-radius: 0 8px 8px 0
    .q-icon
      color: rgb(var(--primary-pure))

  .Nv2-header
    display: flex
    align-items: center
    gap:.5rem
    border-bottom: var(--Nv0-sidebar-border)
    padding: 1rem
    height: var(--sidebar-header-height)
    justify-content: space-between
    position: relative

  //Button Add and List
  .action-button
    width: 2rem !important
    height: 2rem !important
    padding: 0 !important
    // background: rgba(var(--neutral-100), 0.1)

//Dark
.body--dark .action-button
      background: rgba(var(--white), 0.05) !important


//ativa os submenu no hover e active
.sidebar-open .OSidebar
  li:not(.Nv0-li):hover,
  li.active
    >.q-focus-helper
      opacity: 0.15 !important
      background: currentColor
    > .submenu
      display: flex
      animation: show .25s var(--Nv0-sidebar-transition) both 0.05s

@keyframes show
  0%
    opacity: 0
    transform: translateX(-10px)
  100%
    opacity: 1
    transform: translateX(0px)


.Nv0-li.q-router-link--active
  color: rgb(var(--primary-pure)) !important
  background: rgba(var(--primary-pure),0.1)
</style>
