<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script setup>

import 'css/@index.sass'
import 'css/tailwind.css'
import { provide } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from 'stores/usuarios/user.store'
import useDarkMode from 'composables/useDarkMode'

const { user } = storeToRefs(useUserStore())
const { darkMode } = useDarkMode()

provide('darkMode', darkMode)
provide('user', user)

</script>
