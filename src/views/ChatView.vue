<script setup lang="ts">
import { ref, computed, onBeforeMount, watch, defineAsyncComponent } from 'vue'
import { useRoute, onBeforeRouteLeave } from 'vue-router'
import { useWindowSize } from '@vueuse/core'
import { useGlobalStore } from '@/stores/index'
import { API } from '@/api/index'
import { Button, ToggleButton, Checkbox, useToast, useConfirm } from 'primevue'
import LoadingArea from '@/components/LoadingArea.vue'
import LayoutPages from '@/layout/LayoutPages.vue'
const FormBot = defineAsyncComponent({
  loader: () => import('@/components/FormBot.vue'),
  loadingComponent: LoadingArea,
})
const FormChatList = defineAsyncComponent({
  loader: () => import('@/components/FormChatList.vue'),
  loadingComponent: LoadingArea,
})

const route = useRoute()
const { width } = useWindowSize()
const globalStore = useGlobalStore()

const controller = ref<AbortController | null>(null)

const routeQuery = computed(() => route.query)

const dataLoading = ref(false)
const botReady = ref(true)
const activeBot = async () => {
  try {
    const { botType, botID } = routeQuery.value
    const result = await API.BOT.POST_ACTIVE_BOT({ botType: Number(botType), botID: Number(botID) })
    if (result.status === 200) {
      botReady.value = true
    }
  } catch (error) {}
}

const currentConversation = ref<number | null>(null)
const conversationList = ref<
  {
    conversationID: number
    title: string
  }[]
>([
  {
    conversationID: 1,
    title: '牙齦紅腫處理建議',
  },
  {
    conversationID: 2,
    title: '牙齦紅腫處理方法',
  },
  {
    conversationID: 3,
    title: '牙齦紅腫處理方法',
  },
  {
    conversationID: 4,
    title: '牙齦紅腫處理方法',
  },
  {
    conversationID: 5,
    title: '牙齦紅腫處理方法',
  },
  {
    conversationID: 6,
    title: '牙齦紅腫處理方法',
  },
  {
    conversationID: 7,
    title: '牙齦紅腫處理方法',
  },
  {
    conversationID: 8,
    title: '牙齦紅腫處理方法',
  },
  {
    conversationID: 9,
    title: '牙齦紅腫處理方法',
  },
  {
    conversationID: 10,
    title: '牙齦紅腫處理方法',
  },
  {
    conversationID: 11,
    title: '牙齦紅腫處理方法',
  },
  {
    conversationID: 12,
    title: '牙齦紅腫處理方法',
  },
  {
    conversationID: 13,
    title: '牙齦紅腫處理方法',
  },
  {
    conversationID: 14,
    title: '牙齦紅腫處理方法',
  },
  {
    conversationID: 15,
    title: '牙齦紅腫處理方法',
  },
])
const getConversationList = async (botID: number, reload: boolean = false) => {
  try {
    const result = await API.BOT.GET_BOT_CONVERSATION(botID, {
      cache: { override: reload },
    })
    if (result.data) {
      conversationList.value = result.data
    }
  } catch (error) {}
}
const messageList = ref<
  {
    context: string
    role: 'Human' | 'AI'
    timestamp: string
  }[]
>([
  {
    context: '牙齦紅腫怎麼辦',
    role: 'Human',
    timestamp: '2024-09-11T08:58:52.627Z',
  },
  {
    context:
      '牙齦紅腫可能是由於多種原因引起的，例如牙齦發炎或牙周病。如果牙齦出現紅腫，建議您採取以下措施：\n\n1. 使用軟毛牙刷輕輕刷牙，避免用力過猛，以免加重敏感和紅腫。\n2. 維持良好的口腔衛生，每餐後用軟毛牙刷潔牙，並使用漱口水每天兩次。\n3. 如果紅腫情況持續或加重，建議儘快就醫，讓牙醫進行檢查和治療。\n\n如果您在進行牙齒漂白治療期間出現牙齦紅腫，可能需要考慮牙托的適合度，並可使用維他命E或口內藥膏幫助還原牙齦狀況。務必與牙醫溝通，尋求專業建議以獲得最佳處理方案。',
    role: 'AI',
    timestamp: '2024-09-11T08:58:52.631Z',
  },
  {
    context: '牙齦紅腫怎麼辦',
    role: 'Human',
    timestamp: '2024-09-11T08:58:52.647Z',
  },
  {
    context:
      '牙齦紅腫可能是由於多種原因引起的，例如牙齦發炎或牙周病。如果牙齦出現紅腫，建議您採取以下措施：\n\n1. 使用軟毛牙刷輕輕刷牙，避免用力過猛，以免加重敏感和紅腫。\n2. 維持良好的口腔衛生，每餐後用軟毛牙刷潔牙，並使用漱口水每天兩次。\n3. 如果紅腫情況持續或加重，建議儘快就醫，讓牙醫進行檢查和治療。\n\n如果您在進行牙齒漂白治療期間出現牙齦紅腫，可能需要考慮牙托的適合度，並可使用維他命E或口內藥膏幫助還原牙齦狀況。務必與牙醫溝通，尋求專業建議以獲得最佳處理方案。',
    role: 'AI',
    timestamp: '2024-09-11T08:58:52.651Z',
  },
])
const getMessage = async (conversationID: number, reload: boolean = false) => {
  try {
    // const result = await API.BOT.GET_BOT_CONVERSATION_MESSAGE(conversationID, {
    //   cache: { override: reload },
    // })
    // if (result.data) {
    //   messageList.value = result.data
    // }
    messageList.value = [
      {
        context: '牙齦紅腫怎麼辦',
        role: 'Human',
        timestamp: '2024-09-11T08:58:52.627Z',
      },
      {
        context:
          '牙齦紅腫可能是由於多種原因引起的，例如牙齦發炎或牙周病。如果牙齦出現紅腫，建議您採取以下措施：\n\n1. 使用軟毛牙刷輕輕刷牙，避免用力過猛，以免加重敏感和紅腫。\n2. 維持良好的口腔衛生，每餐後用軟毛牙刷潔牙，並使用漱口水每天兩次。\n3. 如果紅腫情況持續或加重，建議儘快就醫，讓牙醫進行檢查和治療。\n\n如果您在進行牙齒漂白治療期間出現牙齦紅腫，可能需要考慮牙托的適合度，並可使用維他命E或口內藥膏幫助還原牙齦狀況。務必與牙醫溝通，尋求專業建議以獲得最佳處理方案。',
        role: 'AI',
        timestamp: '2024-09-11T08:58:52.631Z',
      },
      {
        context: '牙齦紅腫怎麼辦',
        role: 'Human',
        timestamp: '2024-09-11T08:58:52.647Z',
      },
      {
        context:
          '牙齦紅腫可能是由於多種原因引起的，例如牙齦發炎或牙周病。如果牙齦出現紅腫，建議您採取以下措施：\n\n1. 使用軟毛牙刷輕輕刷牙，避免用力過猛，以免加重敏感和紅腫。\n2. 維持良好的口腔衛生，每餐後用軟毛牙刷潔牙，並使用漱口水每天兩次。\n3. 如果紅腫情況持續或加重，建議儘快就醫，讓牙醫進行檢查和治療。\n\n如果您在進行牙齒漂白治療期間出現牙齦紅腫，可能需要考慮牙托的適合度，並可使用維他命E或口內藥膏幫助還原牙齦狀況。務必與牙醫溝通，尋求專業建議以獲得最佳處理方案。',
        role: 'AI',
        timestamp: '2024-09-11T08:58:52.651Z',
      },
    ]
  } catch (error) {}
}
const question = ref('')
const askBotQuestion = async () => {
  try {
    controller.value = new AbortController()
    const result = await API.BOT.POST_ASK_BOT(
      {
        botID: Number(routeQuery.value.botID),
        question: question.value,
        conversationID: currentConversation.value,
      },
      {
        signal: controller.value.signal,
      },
    )
    if (result.data) {
      currentConversation.value = result.data.conversationID
      getMessage(result.data.conversationID, true)
    }
  } catch (error) {}
}

// onBeforeMount(() => {
//   activeBot()
// })

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
        v-tooltip.right="width < 640 && '建立新交談'"
        icon="bi bi-chat-left-dots"
        label="建立新交談"
        @click="currentConversation = null"
      />
      <!-- <FormChatList
        root-class="min-w-full"
        :conversation-list="conversationList"
        :get-data-function="getMessage"
        v-model:selected-conversation="currentConversation"
      /> -->
      <FormBot use-for="tune" />
    </div>
    <div class="wrap radius flex grow flex-col justify-between gap-3 bg-white">
      <div
        v-if="botReady && currentConversation"
        class="wrap flex max-h-[calc(100dvh-282px)] flex-col gap-10 overflow-y-auto !pl-0 sm:max-h-[calc(100dvh-226px)]"
      >
        <div
          v-for="{ context, role, timestamp } in messageList"
          :key="timestamp"
          class="flex w-fit max-w-[95%] items-start gap-4 odd:self-end odd:text-white sm:max-w-[80%]"
        >
          <svg
            v-if="role === 'AI'"
            class="text-main mt-1 w-full max-w-9"
            viewBox="0 0 30 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.77891 5.51076L8.76774 5.51077L8.36737 4.01656C8.12361 3.10686 8.66347 2.1718 9.57317 1.92805C10.4829 1.6843 11.4179 2.22415 11.6617 3.13385L12.2986 5.51076H11.5792L10.9416 3.13091C10.7971 2.59183 10.243 2.27191 9.70393 2.41636C9.16485 2.56081 8.84493 3.11492 8.98938 3.654L9.4869 5.51076H8.77891ZM3.46312 10.1245C3.77034 7.94084 5.3913 6.17894 7.50102 5.66379L7.14725 4.34349C6.72294 2.75994 7.66269 1.13224 9.24624 0.707932C10.8298 0.28362 12.4575 1.22337 12.8818 2.80692L13.6063 5.51076H16.3378L17.0622 2.80705C17.4865 1.22349 19.1142 0.283745 20.6978 0.708057C22.2813 1.13237 23.2211 2.76006 22.7968 4.34362L22.4464 5.65124C24.5817 6.14978 26.2271 7.92275 26.5368 10.1245H27.2211C28.7558 10.1245 30 11.3687 30 12.9035V15.3666C30 16.9014 28.7558 18.1456 27.2211 18.1456H26.5359C26.1663 20.75 23.9275 22.7529 21.221 22.7529H8.77891C6.07239 22.7529 3.83366 20.75 3.46403 18.1456H2.77895C1.24418 18.1456 0 16.9014 0 15.3666V12.9035C0 11.3687 1.24418 10.1245 2.77895 10.1245H3.46312ZM21.1763 5.51076L21.5766 4.01669C21.8204 3.10699 21.2805 2.17193 20.3708 1.92817C19.4611 1.68442 18.5261 2.22428 18.2823 3.13398L17.6455 5.51076H18.3647L19.0024 3.13083C19.1469 2.59175 19.701 2.27183 20.2401 2.41628C20.7791 2.56073 21.099 3.11484 20.9546 3.65392L20.4571 5.51076H21.1763ZM3.41049 11.2613H2.77895C1.87204 11.2613 1.13684 11.9965 1.13684 12.9035V15.3666C1.13684 16.2735 1.87204 17.0087 2.77895 17.0087H3.41049V16.3456H2.90525C2.29483 16.3456 1.79999 15.8508 1.79999 15.2403V12.9667C1.79999 12.3562 2.29483 11.8614 2.90525 11.8614H3.41049V11.2613ZM3.41049 12.8088H2.90525C2.81805 12.8088 2.74735 12.8794 2.74735 12.9667V15.2403C2.74735 15.3275 2.81805 15.3982 2.90525 15.3982H3.41049V12.8088ZM26.5894 15.3982V12.8088H27.0947C27.1819 12.8088 27.2526 12.8794 27.2526 12.9667V15.2403C27.2526 15.3275 27.1819 15.3982 27.0947 15.3982H26.5894ZM26.5894 16.3456H27.0947C27.7051 16.3456 28.2 15.8508 28.2 15.2403V12.9667C28.2 12.3562 27.7051 11.8614 27.0947 11.8614H26.5894V11.2613H27.2211C28.128 11.2613 28.8632 11.9965 28.8632 12.9035V15.3666C28.8632 16.2735 28.128 17.0087 27.2211 17.0087H26.5894V16.3456Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.3368 7.46877H9.6631C7.22142 7.46877 5.24205 9.44815 5.24205 11.8898V16.374C5.24205 18.8157 7.22142 20.7951 9.6631 20.7951H20.3368C22.7785 20.7951 24.7578 18.8157 24.7578 16.374V11.8898C24.7578 9.44815 22.7785 7.46877 20.3368 7.46877ZM9.6631 6.5214C6.6982 6.5214 4.29468 8.92493 4.29468 11.8898V16.374C4.29468 19.3389 6.6982 21.7425 9.6631 21.7425H20.3368C23.3017 21.7425 25.7052 19.3389 25.7052 16.374V11.8898C25.7052 8.92493 23.3017 6.5214 20.3368 6.5214H9.6631Z"
              fill="#ffffff"
            />
            <path
              d="M22.3467 14.1293C22.3467 15.3645 21.3454 16.3658 20.1102 16.3658C18.8751 16.3658 17.8738 15.3645 17.8738 14.1293C17.8738 12.8942 18.8751 11.8929 20.1102 11.8929C21.3454 11.8929 22.3467 12.8942 22.3467 14.1293Z"
              fill="#ffffff"
            />
            <path
              d="M12.1783 14.1294C12.1783 15.3646 11.177 16.3659 9.94179 16.3659C8.70662 16.3659 7.70532 15.3646 7.70532 14.1294C7.70532 12.8942 8.70662 11.8929 9.94179 11.8929C11.177 11.8929 12.1783 12.8942 12.1783 14.1294Z"
              fill="#ffffff"
            />
          </svg>
          <span
            class="wrap radius whitespace-pre-wrap"
            :class="{ 'bg-siteBg': role === 'AI', 'bg-sub': role === 'Human' }"
            v-text="context"
          />
        </div>
      </div>
      <div v-else class="flex grow flex-col items-start whitespace-pre-wrap">
        <span
          class="from-main to-sub bg-linear-to-r bg-clip-text text-7xl leading-snug font-extrabold text-transparent md:text-[10vw] md:leading-tight xl:text-[8vw]"
          >您好！</span
        ><span
          class="text-3xl leading-snug font-bold tracking-wide md:text-[4.5vw] md:leading-tight xl:text-[2.5vw]"
          ><span>我是</span
          ><span
            class="from-main to-sub bg-linear-to-r bg-clip-text text-transparent"
            v-text="`${routeQuery.name}\n`"
          /><span>今天想要諮詢什麼事務呢？</span>
        </span>
      </div>
      <form
        class="radius border-divide has-focus:border-focusDeco flex w-full gap-2 border bg-white px-3 py-1.5"
        @submit.prevent="askBotQuestion"
      >
        <input
          name="message"
          type="text"
          class="placeholder-placeholder w-full outline-none disabled:pointer-events-none disabled:bg-transparent"
          minlength="1"
          :placeholder="`傳訊息給${routeQuery.name ? routeQuery.name : '問答機器人'}`"
          :disabled="dataLoading"
          v-model="question"
        />
        <button
          v-tooltip.top="'發送'"
          type="submit"
          class="animate border-placeholder text-placeholder flex size-8 items-center justify-center rounded-full border hover:border-black hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
          :disabled="dataLoading || question.length < 1"
        >
          <i class="bi bi-send-fill" />
        </button>
        <button
          v-tooltip.top="'重置'"
          type="button"
          class="animate border-placeholder text-placeholder flex size-8 items-center justify-center rounded-full border hover:border-black hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
          :disabled="dataLoading || question.length < 1"
          @click="question = ''"
        >
          <i class="bi bi-arrow-clockwise" />
        </button>
      </form>
    </div>
  </LayoutPages>
</template>
