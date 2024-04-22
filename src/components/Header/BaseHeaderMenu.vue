<template>
  <q-menu class="overflow-x-hidden w-[250px]" padding>
    <p class="px-16 pt-10 text-paragraph-2 text-start opacity-70 pb-8">
      Seja Bem Vindo(a)
      <span class="capitalize">{{ nome ? nome : 'Usuário' }}</span>
    </p>

    <q-separator />
    <q-list class="select-none min-w-[200px]">
      <q-item tag="label" class="flex items-center flex-row">
        <q-item-section>
          <p class="text-paragraph-2">Modo escuro</p>
        </q-item-section>

        <q-item-section>
          <q-space />
          <q-toggle v-model="darkMode" size="sm" class="ml-auto"></q-toggle>
        </q-item-section>
      </q-item>

      <q-separator></q-separator>

      <q-item
        tag="label"
        class="flex items-center flex-row hover:text-alert-error"
        ripple>
        <q-item-section @click="logout">
          <p class="text-paragraph-2">Sair</p>
        </q-item-section>
        <q-item-section avatar class="">
          <q-icon name="logout"></q-icon>
        </q-item-section>
      </q-item>
    </q-list>
  </q-menu>
</template>

<script setup>
import { useAuthStore } from 'stores/auth.store'
import useDarkMode from 'composables/useDarkMode'

const { darkMode } = useDarkMode()
const { logout } = useAuthStore()
const props = defineProps({
  nome: { type: String, default: '' },
})
</script>

<style lang="sass" scoped></style>
