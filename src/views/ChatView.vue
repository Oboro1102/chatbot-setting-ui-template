<script setup lang="ts">
import { ref, computed, onBeforeMount, watch, defineAsyncComponent } from 'vue'
import { useRoute, onBeforeRouteLeave } from 'vue-router'
import { useWindowSize, useTimeoutFn } from '@vueuse/core'
import { useGlobalStore } from '@/stores/index'
import { API } from '@/api/index'
import { Button, Textarea, ScrollPanel, useToast } from 'primevue'
import LoadingArea from '@/components/LoadingArea.vue'
import LayoutPages from '@/layout/LayoutPages.vue'
const FormBot = defineAsyncComponent({
  loader: () => import('@/components/FormBot.vue'),
  loadingComponent: LoadingArea,
})
const FormMessageList = defineAsyncComponent({
  loader: () => import('@/components/FormMessageList.vue'),
  loadingComponent: LoadingArea,
})

const toast = useToast()
const route = useRoute()
const { width } = useWindowSize()
const globalStore = useGlobalStore()
const userId = computed(() => globalStore.userInfo.id)
const routeQuery = computed(() => route.query)
const botId = computed(() => route.query.botId as string)
const botName = computed(() => route.query.name as string)
const dataLoading = ref(false)
const controller = ref<AbortController | null>(null)

const conversation = ref({ chat_id: '', bot_id: botId.value, history: [] })
const emptyConversation = ref(false)
const setNewConversation = () => {
  conversation.value.chat_id = crypto.randomUUID()
  conversation.value.history = []
}
const question = ref('')
const askBotQuestion = async () => {
  if (question.value.length < 1) {
    toast.add({
      severity: 'warn',
      summary: '傳送訊息',
      detail: '請輸入內容再重新發送一次',
      life: 3000,
    })
    return
  }
  try {
    controller.value = new AbortController()
    const result = await API.MESSAGE.POST_MESSAGE(
      {
        userId: userId.value,
        botId: botId.value as string,
        content: question.value,
        chatId: conversation.value.chat_id,
      },
      {
        signal: controller.value.signal,
      },
    )
    if (result.data) {
      conversation.value.history = result.data.data.history
      question.value = ''
    }
  } catch (error: any) {
    const { response } = error
    toast.add({
      severity: 'error',
      summary: '傳送訊息',
      detail: response.data.message,
      life: 3000,
    })
  }
}
const scrollContainer = ref()
const typingBar = ref()
const messageArea = ref()
const fixElementHeight = computed(() => {
  if (typingBar.value && messageArea.value) {
    return `${messageArea.value.clientHeight - typingBar.value.clientHeight - 44}px`
  } else {
    return '0px'
  }
})
const isTyping = ref(false)
const submit = (event: KeyboardEvent) => {
  if (isTyping.value) return
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault()
    askBotQuestion()
    const { start } = useTimeoutFn(() => {
      scrollContainer.value.$refs.content.scrollTop =
        scrollContainer.value.$refs.content.scrollHeight
    }, 100)
    start()
  }
}

const selectedConversation = ref('')
const openMessage = async (chatId: string) => {
  try {
    const result = await API.MESSAGE.POST_SPECIFY_MESSAGE({
      userId: userId.value,
      botId: botId.value as string,
      chatId,
    })
    if (result.data) {
      conversation.value.chat_id = chatId
      conversation.value.history = result.data.data.history
    }
  } catch (error: any) {
    const { response } = error
    toast.add({
      severity: 'error',
      summary: '資料取得異常',
      detail: response.data.message,
      life: 3000,
    })
  }
}

watch(selectedConversation, (value) => {
  openMessage(value)
})
watch(emptyConversation, (value) => {
  if (value) {
    setNewConversation()
  }
})

onBeforeMount(() => {
  setNewConversation()
})
onBeforeRouteLeave((to, from) => {
  const { name } = from
  if (name === 'ChatBotsChat' && controller.value) {
    controller.value.abort()
  }
})
</script>

<template>
  <LayoutPages root-class="flex gap-4">
    <div class="panel sticky top-17 flex h-fit w-fit flex-col">
      <Button
        v-tooltip.top="width < 640 && '建立新交談'"
        icon="bi bi-chat-left-dots"
        :label="width >= 640 ? '建立新交談' : ''"
        text
        severity="secondary"
        size="small"
        @click="setNewConversation()"
      />
      <FormMessageList
        :user-id="userId"
        :bot-id="botId"
        :current-message-id="conversation.chat_id"
        v-model:selected-conversation="selectedConversation"
        v-model:empty-conversation="emptyConversation"
      />
      <FormBot use-for="tune" :bot-name="botName" :edit-target-id="botId" />
    </div>
    <div ref="messageArea" class="wrap radius flex grow flex-col gap-3 overflow-hidden bg-white">
      <p v-if="conversation.history.length < 1" class="flex flex-col">
        <span
          class="to-sub bg-linear-to-b from-black from-78% to-78% bg-clip-text text-7xl leading-snug font-extrabold text-transparent md:text-[10vw] md:leading-tight xl:text-[8vw]"
          >您好！</span
        ><span
          class="text-3xl leading-snug font-bold tracking-wide md:text-[4.5vw] md:leading-tight xl:text-[2.5vw]"
          >今天想要諮詢什麼事務？
        </span>
      </p>
      <ScrollPanel
        v-else
        ref="scrollContainer"
        :pt="{ root: { class: 'mx-auto! w-full! md:w-2/3! lg:w-1/2!' } }"
        :style="{ height: fixElementHeight }"
      >
        <ul class="wrap--gap flex flex-col items-baseline">
          <li
            v-for="{ message_id, role, content } in conversation.history"
            :key="message_id"
            class="p-2 whitespace-pre-wrap"
            :class="{ 'bg-divide radius ml-auto': role === 'user' }"
            v-text="content"
          />
        </ul>
      </ScrollPanel>
      <form ref="typingBar" class="mt-auto" @submit.prevent="askBotQuestion">
        <Textarea
          minlength="1"
          rows="1"
          :name="`contentCard-${botId}`"
          fluid
          autoResize
          :placeholder="`傳訊息給 ${routeQuery.name ? routeQuery.name : '問答機器人'}`"
          style="resize: none"
          :pt="{
            root: { class: 'placeholder:text-sm placeholder:text-placeholder!' },
          }"
          :disabled="dataLoading"
          v-model="question"
          @keydown="submit"
          @compositionstart="isTyping = true"
          @compositionend="isTyping = false"
        />
        <p class="text-right text-[0.6875rem]">
          <span class="radius mr-1 bg-[#ced4db] px-1">Shift</span>+<span
            class="radius mx-1 bg-[#ced4db] px-1"
            >Enter</span
          >可以換行，直接按<span class="radius mx-1 bg-[#ced4db] px-1">Enter</span>可發送訊息
        </p>
      </form>
    </div>
  </LayoutPages>
</template>
