<template>
  <div class="grid place-items-center w-screen h-screen">
    <div class="flex flex-col items-center">
      <LottieError404 />
      <OButton
        icon="arrow_back_ios"
        class="mt-24"
        to="/"
        replace
        size="lg"
        primary
        >Voltar para a Home</OButton
      >
    </div>
  </div>
</template>

<script setup>
import LottieError404 from 'components/lottie/LottieError404.vue'
import OButton from 'components/Button/OButton.vue'
</script>

<style lang="scss" scoped></style>
