<template>
  <q-form
    ref="form"
    class="mx-auto my-auto flex justify-center form-login md:w-[95vw]">
    <q-card class="!p-32 max-w-[26.75rem] flex flex-col">
      <h3 class="text-title-2 !text-32 md:!text-24 text-primary-pure">
        Esqueci minha senha
      </h3>
      <p
        class="mt-8 text-paragraph-1 text-neutral-70 mb-48 md:mb-32 md:!text-14 dark:text-white/60">
        Preencha o campo abaixo que enviaremos uma nova senha para o seu e-mail.
      </p>
      <OInput
        ref="emailRef"
        v-model="emailRecipient"
        :size="Screen.lt.md ? 'md' : 'lg'"
        label="Email"
        class="pb-0"
        @update:model-value="handleUpdate"></OInput>

      <div class="flex flex-col gap-4">
        <!-- :class="{ 'opacity-10 pointer-events-none': !emailValido }" -->
        <OButton
          :loading="load"
          :size="Screen.lt.md ? 'md' : 'lg'"
          type="submit"
          primary
          :disabled="load || !emailValido"
          class="w-full mt-40 text-paragraph-1"
          @click.prevent="$emit('click:send-email')"
          >Redefinir senha
        </OButton>
        <OButton
          :size="Screen.lt.md ? 'md' : 'lg'"
          tertiary
          type="submit"
          class="w-full text-paragraph-1"
          @click="$emit('update:form-type', 'login')"
          >Voltar ao login
        </OButton>
      </div>
    </q-card>
  </q-form>
</template>

<script setup>
import { computed, onUpdated, ref, watch } from 'vue'
import { Screen } from 'quasar'

import { testPattern } from 'utils/patterns'
import OButton from 'components/Button/OButton.vue'
import OInput from 'components/Input/OInput.vue'
const props = defineProps({
  load: Boolean,
  emailRecipient: {
    type: String,
    default: '',
  },
})

const emailRef = ref(Element)
const emailValido = computed(() => testPattern.email(emailRecipient.value))
const emit = defineEmits([
  'update:email',
  'update:form-type',
  'click:send-email',
])

const emailRecipient = ref(props.emailRecipient)

watch(
  () => props.emailRecipient,
  (v) => (emailRecipient.value = v)
)

function handleUpdate() {
  if (emailValido.value) {
    emit('update:email', emailRecipient.value)
    emailRef.value.componentRef.validate(true)
  } else {
    emailRef.value.componentRef.validate(false)
  }
}
</script>

<style lang="sass" scoped></style>
