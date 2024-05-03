<template>
  <q-layout class="grid place-items-center">
    <div class="grid grid-cols-2 h-screen w-screen md:grid-cols-1">
      <div class="img-wrapper relative overflow-hidden md:hidden">
        <q-img class="w-full h-full object-cover" :src="imageLogin" />


      </div>


      <FormLogin
        v-show="formType == 'login'"
        ref="form"
        :load="load"
        @submit="onSubmit"
        @update:data="(v) => handleUpdateData(v)"
        @update:form-type="(v) => (formType = v)" />
      <!-- Form Forgot password -->

      <FormForgotPassword
        v-if="formType == 'forgot_password'"
        :email-recipient="emailRecipient"
        :load="load"
        @update:form-type="(v) => (formType = v)"
        @click:send-email="sendEmailResetPassword"
        @update:email="(v) => (emailRecipient = v)" />

      <!-- Form Message send -->

      <FormMessageSend
        v-if="formType == 'message_send'"
        :load="load"
        @update:form-type="(v) => (formType = v)" />
    </div>
  </q-layout>
</template>

<script setup>
import { nextTick, onMounted, ref, watch } from 'vue'

import { api } from 'boot/axios'
import { NotifyError } from 'boot/Notify'
import { useAuthStore } from 'stores/auth.store'
import { useRouter } from 'vue-router'
import { useUserStore } from 'stores/usuarios/user.store'
import axios from 'axios'
import FormForgotPassword from './FormForgotPassword.vue'
import FormLogin from './FormLogin.vue'
import FormMessageSend from './FormMessageSend.vue'
import gsap from 'gsap/dist/gsap'
import imageLogin from 'public/image/bg-login.png'

const { URLS } = api.defaults
const API_URL = process.env.API_URL

const { getUser } = useUserStore()

const form = ref(null)
const router = useRouter()
const formType = ref('login')
const load = ref(false)
const dev = process.env.development
const emailRecipient = ref('')

const data = ref({ login: dev ? 'cleo@gmail.com' : '', senha: dev ? '123' : '' })

onMounted(() => {
  form.value.form.focus()
  animationForm()
})

function handleUpdateData(v) {
  data.value = v.value
}

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

async function sendEmailResetPassword() {
  load.value = true

  try {
    const { status, response } = await axios.post(
      API_URL + URLS.redefinir_senha,
      { email: emailRecipient.value }
    )

    if (status !== 204) throw new Error(response.data.mensagem)

    formType.value = 'message_send'
  } catch (e) {
    NotifyError(e.message)
  } finally {
    load.value = false
  }
}

async function onSubmit() {
  load.value = true
  const authStore = useAuthStore()

  const logged = await authStore.login(data.value.login, data.value.senha)

  // if (logged) {
  //   await getUser()
  //   router.push(router.query?.redirect || '/')
  // }

  // // else form.value.isInvalid()
  load.value = false
}

watch(formType, async () => {
  await nextTick()
  emailRecipient.value = ''
  animationForm()
})
</script>

<style lang="sass"></style>
