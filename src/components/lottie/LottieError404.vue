<template>
  <Transition name="fade">
    <div
      v-show="loaded"
      class="w-[15rem] h-auto flex flex-col items-center mx-auto">
      <div class="flex flex-col items-center">
        <Vue3Lottie
          :animation-data="animate404"
          @on-animation-loaded="loaded = true" />
      </div>
      <p class="text-center !text-headline-1">ERROR 404</p>
      <p
        class="!text-headline-2 text-center text-neutral-70 dark:text-white/70">
        Nada Encontrado
      </p>
    </div>
  </Transition>
</template>

<script setup>
import animate404 from 'public/lottie/404.json'

import { ref } from 'vue'
import { Vue3Lottie } from 'vue3-lottie'

const loaded = ref(false)
</script>

<style lang="sass" scoped></style>
