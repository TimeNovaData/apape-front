<template>
  <q-form
    ref="form"
    class="mx-auto my-auto flex justify-center form-login md:w-[95vw]">
    <q-card class="!p-32 max-w-[428px] flex flex-col ">
      <h3 class="text-title-2 text-primary-pure">E-mail enviado!</h3>
      <p class="mt-8 text-paragraph-1 text-neutral-70 mb-48 dark:text-white/70">
        Verifique seu e-mail e redefina sua senha.
      </p>

      <OButton
        :loading="load"
        size="lg"
        type="submit"
        primary
        class="w-full text-paragraph-1"
        @click="$emit('update:form-type', 'login')"
        >Fazer login
      </OButton>
    </q-card>
  </q-form>
</template>

<script setup>
import OButton from 'components/Button/OButton.vue'

const props = defineProps({
  load: Boolean,
})

const emit = defineEmits(['update:data', 'update:form-type'])
</script>

<style lang="sass" scoped></style>
