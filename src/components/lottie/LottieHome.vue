<template>
  <div v-if="!Dark.isActive">
    <Transition name="fade">
      <div
        v-show="loaded"
        class="w-[15rem] h-auto flex flex-col items-center mx-auto">
        <div class="flex flex-col items-center">
          <Vue3Lottie
            :animation-data="animateEmpty"
            @on-animation-loaded="loaded = true" />
        </div>
        <p
          class="text-headline-2 text-center text-neutral-70 dark:text-white/70">
          Bem Vindo(a) a Base,<br />
          Ainda Não há nada aqui.
        </p>
      </div>
    </Transition>
  </div>
  <div v-else>
    <Transition name="fade">
      <div
        v-show="loaded"
        class="w-[15rem] h-auto flex flex-col items-center mx-auto">
        <div class="flex flex-col items-center">
          <Vue3Lottie
            :animation-data="animateEmptyDark"
            @on-animation-loaded="loaded = true" />
        </div>
        <p
          class="text-headline-2 text-center text-neutral-70 dark:text-white/70">
          Bem Vindo(a) a Base,<br />
          Ainda Não há nada aqui.
        </p>
      </div>
    </Transition>
  </div>
</template>

<script setup>
// https://vue3-lottie.vercel.app/guide.html#vue-3
import animateEmpty from 'public/lottie/animate-empty.json'
import animateEmptyDark from 'public/lottie/animate_empty_dark.json'
import { Dark } from 'quasar'

import { ref } from 'vue'
import { Vue3Lottie } from 'vue3-lottie'

const loaded = ref(false)
</script>

<style lang="sass" scoped></style>
