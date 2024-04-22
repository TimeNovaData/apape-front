<template>
  <q-form
    ref="form"
    class="mx-auto my-auto form-login relative  sm:w-full sm:h-full dark:!bg-d-neutral-10 dark:md:border dark:md:border-primary-pure dark:md:rounded-lg dark:sm:border-none sm:overflow-hidden">
    <HeaderLoginMobile />

    <q-card
      class="!p-32 w-[27.75rem] flex flex-col rounded-lg md:rounded-t-none sm:w-full sm:h-full sm:!pt-80 md:border-none dark:bg-d-neutral-10 dark:border-primary-pure/20 dark:border shadow-md">
      <h3 class="text-title-2 !text-32 md:!text-24 text-primary-pure">
        Fazer login
      </h3>

      <p
        class="mt-8 text-paragraph-1 text-neutral-70 mb-48 md:mb-32 md:!text-14 dark:text-white/60">
        Seja bem-vindo(a)!<br />
        Insira seu e-mail e senha para entrar em sua conta.
      </p>

      <OInput
        ref="login"
        v-model="data.login"
        :rules="[(val) => !!val || 'Campo Obrigatorio']"
        :size="Screen.lt.md ? 'md' : 'lg'"
        label="Login"></OInput>
      <!-- 
      <OInput
        v-model="data.senha"
        :rules="[(val) => !!val || 'Campo Obrigatorio']"
        :size="Screen.lt.md ? 'md' : 'lg'"
        label="Senha"
        :type="type"
        class="mt-24 md:mt-16"
      >
        <template #append>
          <OButton
            class="!w-32 !h-32 !p-0 !min-h-0 md:!w-[1.375rem] md:!h-[1.375rem]"
            size="sm"
            tertiary
            icon="visibility"
            @click="type === 'password' ? (type = 'text') : (type = 'password')"
          >
          </OButton>
        </template>
      </OInput> -->

      <OInputPassword
        :model-value="data.senha"
        @update:model-value="(v) => (data.senha = v)" />
      <a
        href="#"
        class="text-paragraph-3 mt-4 md:mt-8 hover:underline text-neutral-60 dark:text-white/60"
        @click="$emit('update:form-type', 'forgot_password')">
        Esqueceu sua senha?
      </a>
      <OCheck
        v-model="permanecerConectado"
        :size="Screen.lt.md ? 'sm' : 'md'"
        label="Permanecer conectado"
        class="mt-24 !text-neutral-60 dark:text-white/60 md:mt-16"
        style="--neutral-100: var(--neutral-60)"></OCheck>
      <OButton
        :loading="load"
        :size="Screen.lt.md ? 'md' : 'lg'"
        type="submit"
        primary
        class="w-full mt-40 md:mt-32"
        >Entrar na conta</OButton
      >
    </q-card>
  </q-form>
</template>

<script setup>
import { Screen } from 'quasar'

import { onMounted, ref, watch } from 'vue'
import HeaderLoginMobile from './HeaderLoginMobile.vue'
import OButton from 'components/Button/OButton.vue'
import OCheck from 'components/Checkbox/OCheck.vue'
import OInput from 'components/Input/OInput.vue'
import OInputPassword from 'components/Input/OInputPassword.vue'
const dev = process.env.development

const props = defineProps({
  load: Boolean,
})
const emit = defineEmits(['update:data', 'update:form-type'])

const permanecerConectado = ref(true)
const type = ref('password')

const data = ref({
  login: dev ? 'emanuel2' : '',
  senha: dev ? 'papa1539' : '',
})

watch(
  () => data,
  (v) => emit('update:data', v),
  { deep: true, immediate: true }
)

const form = ref(Element)
defineExpose({ form })
</script>

<style lang="sass">
@import 'src/css/responsivo.sass'

// @include d(md)
//   .form-login
//     :deep(.q-checkbox .q-checkbox__label)
//       font-size: .75rem !important

@include d(md)
  .q-field
    padding: 0

    .q-field__bottom
      display: none
</style>
