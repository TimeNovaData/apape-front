<template>
  <div class="o-chat-message mt-16">
    <q-chat-message
      :avatar="data.usuario.foto"
      :text="[data.comentario]"
      :sent="sender"
      class="md:!text-12"></q-chat-message>

    <div
      class="flex items-center gap-6 text-paragraph-3 mt-4"
      :class="{
        'justify-end mr-[2.75rem] md:mr-[2.25rem]': sender,
        'ml-[2.75rem] md:ml-[2.25rem]': !sender,
      }">
      <span class="capitalize">{{ data.usuario.nome || 'Sem nome' }}</span>
      <span class="text-neutral-100/40 dark:text-white/10">•</span>
      <span class="text-neutral-60 dark:text-white/40">{{
        data.data_amigavel
      }}</span>
      <TagBase
        v-if="data.tipo_etapa"
        type="projeto"
        :nome="data.tipo_etapa.tipo_etapa"
        :cor="data.tipo_etapa.cor" />
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'
import TagBase from 'components/Tag/TagBase.vue'

const props = defineProps({
  data: { type: Object, default: () => ({}) },
})

// Pegando os valores do usuário logado pelo provider
const user = inject('user')

// Verificando se usuário enviou ou recebeu a mensagem
const sender = props.data.usuario_criacao === user.value.id
</script>

<style lang="sass">
@import "src/css/responsivo.sass"

.o-chat-message
  @include d(md)
    .q-message-avatar
      width: 1.5rem
      height: 1.5rem
      min-width: auto

    .q-message-text
      font-size: .75rem

    span, .tag-base-projeto
      font-size: .625rem
</style>
