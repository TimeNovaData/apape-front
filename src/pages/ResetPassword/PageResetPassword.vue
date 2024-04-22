<template>
  <q-layout class="grid place-items-center">
    <div class="grid grid-cols-2 h-screen w-screen md:flex">
      <div
        class="img-wrapper relative md:static overflow-hidden flex justify-center">
        <q-img
          class="w-full h-full md:right-0 object-cover z-0 md:absolute"
          :src="imageLogin" />
      </div>
      <!-- 
          Form login
         -->
      <q-form
        v-if="formType == 'login'"
        ref="form"
        class="mx-auto my-auto flex justify-center form-login md:right-0 md:w-[95vw]">
        <q-card
          class="!p-32 max-w-[26.75rem] flex flex-col w-[350px] md:w-auto">
          <h3 class="text-title-2 text-primary-pure mb-24">Redefinir senha</h3>

          <OInput
            v-model="data.password"
            counter
            :rules="[
              (val) => {
                if (!val) return 'Campo Obrigatorio'
                if (val.length < 8)
                  return 'A senha precisa de ao menos 8 caracteres'
              },
            ]"
            size="lg"
            label="Senha"
            :type="typePassword"
            class="mt-24">
            <template #append>
              <OButton
                class="!w-32 !h-32 !p-0 !min-h-0"
                size="sm"
                tertiary
                icon="visibility"
                @click="
                  typePassword === 'password'
                    ? (typePassword = 'text')
                    : (typePassword = 'password')
                ">
              </OButton>
            </template>
          </OInput>

          <OInput
            v-model="data.confirmPassword"
            :reactive-rules="true"
            lazy-rules
            :rules="[
              (val) =>
                val === data.password || 'As senhas precisam ser identicas',
              (val) =>
                val.length >= 8 || 'A senha precisa de ao menos 8 caracteres',
            ]"
            size="lg"
            label="Confirme a Senha"
            :type="type"
            class="mt-24">
            <template #append>
              <OButton
                class="!w-32 !h-32 !p-0 !min-h-0"
                size="sm"
                tertiary
                icon="visibility"
                @click="
                  type === 'password' ? (type = 'text') : (type = 'password')
                ">
              </OButton>
            </template>
          </OInput>

          <OButton
            :loading="load"
            size="lg"
            :disabled="
              data.password !== data.confirmPassword ||
              data.password.length < 8 ||
              load
            "
            primary
            class="w-full mt-40 text-paragraph-1"
            @click="resetPassword"
            >Redefinir
          </OButton>

          <OButton
            size="lg"
            tertiary
            href="/login"
            class="w-full mt-8 text-paragraph-1"
            >Voltar ao Login
          </OButton>
        </q-card>
      </q-form>
    </div>
  </q-layout>
</template>

<script setup>
import { nextTick, onMounted, ref, watch } from 'vue'

import { api } from 'boot/axios'
import { NotifyError, NotifySucess } from 'boot/Notify'
import { useRouter } from 'vue-router'
import axios from 'axios'
import gsap from 'gsap'
import imageLogin from 'public/image/bg-login.jpg'
import OButton from 'components/Button/OButton.vue'
import OInput from 'components/Input/OInput.vue'

const form = ref(null)
const type = ref('password')
const formType = ref('login')
const router = useRouter()
const load = ref(false)
const typePassword = ref('password')

const { URLS } = api.defaults
const { API_URL } = process.env

const data = ref({
  password: '',
  confirmPassword: '',
})

watch(formType, async () => {
  await nextTick()
  animationForm()
})

const animationForm = () => {
  gsap.set('.form-login', {
    opacity: 0,
    y: 90,
  })
  gsap.to('.form-login', {
    opacity: 1,
    y: 0,
    ease: 'power1.out',
  })

  gsap.to('.letras', {
    rotate: 360,
    repeat: -1,
    ease: 'none',
    duration: 20,
  })
}

onMounted(() => {
  form.value.focus()
  animationForm()
})

const { uid, token } = router?.currentRoute?.value.params

async function resetPassword() {
  load.value = true

  try {
    const { data: r, status } = await axios.post(
      API_URL + URLS.confirmar_senha,
      {
        uid,
        token,
        new_password: data.value.password,
        re_new_password: data.value.confirmPassword,
      }
    )

    if (status === 203) {
      const mensagens = Array.isArray(r.mensagem)
        ? r.mensagem.join(', ')
        : r.mensagem

      NotifyError(mensagens, { timeout: 6000 })
      throw new Error(r)
    }

    NotifySucess('Senha atualizada com sucesso :)')
    setTimeout(() => {
      window.location.href = '/login'
    }, 1500)
  } catch (e) {
    console.log(e)
  } finally {
    load.value = false
  }
}
</script>

<style lang="sass"></style>
