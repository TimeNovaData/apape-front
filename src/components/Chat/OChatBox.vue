<template>
  <q-card
    ref="cardChatBox"
    class="q-chat p-16 flex flex-col bg-neutral-20 dark:bg-d-neutral-10 flex-1 flex-nowrap h-full md:p-8">
    <div
      v-if="!comentariosResult?.length && isLoading"
      class="flex place-content-center h-full flex-1">
      <q-spinner color="primary" class="shrink-0" size="48px" />
    </div>

    <div
      v-else-if="!comentariosResult?.length"
      class="flex place-content-center h-full flex-[1_1_auto]">
      <div class="flex flex-col gap-6 opacity-40">
        <q-icon class="block mx-auto" name="fluorescent" size="2.5rem"></q-icon>
        <p>Sem mensagens no momento</p>
      </div>
    </div>
    <q-scroll-area
      class="flex flex-col gap-8 flex-1 pr-10"
      @scroll="handleScroll">
      <OChatMessage
        v-for="data in comentariosResult"
        :key="data.id"
        :data="data" />
      <!-- <q-page-sticky
          position="bottom-left"
          :offset="[0, 0]"
          v-show="scroll < 0.88 && scroll !== false"
          @click="scrollChatToBottom(true)"
        >
          <OButton
            secondary
            round
            icon="arrow_forward"
            class="rotate-90 !p-0 !h-32 !w-32 !min-w-0 !min-h-0 bg-white hover:!bg-primary-pure hover:!text-white"
          />
        </q-page-sticky> -->
      <slot name="top"></slot>
    </q-scroll-area>

    <footer v-if="showInput" class="pt-16">
      <OSelect
        v-if="tipo === 'projeto'"
        v-model="tipoetapa"
        :options="tipoetapaOpts"
        option-value="id"
        option-label="tipo_etapa"
        size="md"
        behavior="menu"
        label="Etapa"
        class="bg-white dark:!bg-white/5 mb-8"></OSelect>

      <div class="flex gap-8">
        <OInput
          v-model="message"
          size="md"
          placeholder="Escreva sua mensagem"
          class="h-40 flex-1 bg-white dark:!bg-transparent no-label"
          autofocus
          @keydown.enter="submitMessage"></OInput>

        <OButton
          secondary
          class="bg-white h-40 dark:!bg-white/10 dark:!border-transparent dark:text-white !min-w-[100px]"
          @click="submitMessage">
          Enviar
        </OButton>
      </div>
    </footer>
  </q-card>
</template>

<script setup>
import { NotifyAlert } from 'boot/Notify'
import { api } from 'boot/axios'
import { deepUnref } from 'vue-deepunref'
import { scroll as qScroll } from 'quasar'
import {
  ref,
  onMounted,
  onUnmounted,
  watch,
  useSlots,
  computed,
  unref,
  nextTick,
} from 'vue'
import { useAxios } from '@vueuse/integrations/useAxios'
import OButton from 'components/Button/OButton.vue'
import OChatMessage from 'components/Chat/OChatMessage.vue'
import OInput from 'components/Input/OInput.vue'
import OSelect from 'components/Select/OSelect.vue'
// const { getScrollHeight, getVerticalScrollPosition, getScrollTarget } = scroll

const { URLS } = api.defaults

const cardChatBox = ref(null)
const props = defineProps({
  comments: { type: Object, default: () => ({}) },
  isLoading: Boolean,
  sendComment: { type: Function, default: null },
  getComments: { type: Function, default: null },
  filters: { type: String, default: '' },
  canUpdate: {
    type: Boolean,
    default: true,
  },
  showInput: {
    type: Boolean,
    default: true,
  },
  tipo: {
    type: String,
    default: 'task',
  },
})

const scroll = ref(false)
const comentariosResult = ref(unref(props.comments)?.results)

watch(
  () => props.comments,
  async (v) => {
    comentariosResult.value = unref(v)?.results
    chatContainer = cardChatBox.value.$el.querySelector(
      '.q-scrollarea__container'
    )
    await nextTick()
    scrollChatToBottom()
  },
  { deep: true, flush: 'post' }
)

const message = ref('')
let chatContainer

function scrollChatToBottom(animate) {
  const container = (chatContainer = cardChatBox.value.$el.querySelector(
    '.q-scrollarea__container'
  ))
  if (animate)
    qScroll.setVerticalScrollPosition(container, container.scrollHeight, 300)
  else container?.scrollTo(0, container.scrollHeight)
}
function handleScroll(v) {
  if (v.verticalPercentage) scroll.value = v.verticalPercentage
}
async function submitMessage() {
  if (props.tipo === 'projeto' && !tipoetapa.value) {
    NotifyAlert('Escolha uma etapa')
    return
  }

  const mensagem = {
    txt: message.value,
    tipo_etapa: tipoetapa.value,
  }
  message.value = ''

  await props.sendComment(mensagem, props.tipo)
  await props.getComments(props.tipo, props.filters)
  // debugger
  scrollChatToBottom()
}

let timeout

async function updateChatInterval(container) {
  clearTimeout(timeout)
  chatContainer = cardChatBox.value.$el.querySelector(
    '.q-scrollarea__container'
  )

  if (props.canUpdate && props.getComments) {
    const newComments = await props.getComments(props.tipo, props.filters)
    // const lastMessage = container.querySelector('.o-chat-message:last-child')
    // const el = getScrollTarget(container)
    // console.log(getVerticalScrollPosition(el), 'getVerticalScrollPosition')
    // console.log(getScrollHeight(el), 'getScrollHeight')
    // console.log(el.clientHeight, 'clientHeight')
    // console.log(newComments)
    // newComments.map()
    const newC = newComments.results.map((i) => i.comentario)
    const oldC = comentariosResult.value.map((i) => i.comentario)
    if (newC.toString() === oldC.toString()) return
    newComments?.length && scrollChatToBottom()
  }

  timeout = setTimeout(() => updateChatInterval(container), 15000)
}

// ==========================================================================================
// GET TIPOETAPAs =================================================================
const tipoetapa = ref(null)
const tipoetapaOpts = ref([])

async function getTipoetapa() {
  window._red('getTipoetapa')
  const { data, error } = await useAxios(URLS.tipoetapa, { method: 'GET' }, api)

  try {
    tipoetapaOpts.value = data.value
    return data.value
  } catch (e) {
    return error
  }
}

// ==========================================================================================

onMounted(() => {
  chatContainer = cardChatBox.value.$el.querySelector(
    '.q-scrollarea__container'
  )

  updateChatInterval(chatContainer)
  scrollChatToBottom()

  props.tipo === 'projeto' && getTipoetapa()
})

onUnmounted(() => {
  clearTimeout(timeout)
})
defineExpose({ scrollChatToBottom })
</script>

<style lang="sass" scoped>
.q-chat
  &:deep(.q-scrollarea__content)
    display: flex
    flex-direction: column-reverse !important
</style>
