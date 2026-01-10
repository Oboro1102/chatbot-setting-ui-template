<script setup lang="ts">
import { ref, toRefs, watch } from 'vue'
import { useWindowSize, useTimeoutFn } from '@vueuse/core'
import { API } from '@/api/index'
import { Button, Drawer, useToast, useConfirm } from 'primevue'

const props = withDefaults(
  defineProps<{
    triggerClass?: string
    userId: string
    botId: string
    currentMessageId: string
  }>(),
  {},
)
const { triggerClass, userId, botId, currentMessageId } = toRefs(props)
const toast = useToast()
const confirm = useConfirm()
const selectedConversation = defineModel<string>('selectedConversation', { default: '' })
const emptyConversation = defineModel<boolean>('emptyConversation', { default: false })
const { width } = useWindowSize()

const active = ref(false)
const changeConversation = (id: string) => {
  selectedConversation.value = id
  active.value = false
}

const messageList = ref<
  {
    chat_id: string
    history: {
      message_id: string
      role: string
      content: string
      timestamp: string
    }[]
  }[]
>([])
const getMessage = async (reload: boolean = false) => {
  try {
    const result = await API.MESSAGE.GET_MESSAGE_LIST(
      { userId: userId.value, botId: botId.value },
      {
        cache: { override: reload },
      },
    )
    if (result.data) {
      messageList.value = result.data.data.messages
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
const deleteMessage = async (chatId: string) => {
  try {
    confirm.require({
      message: '你是否確定要刪除紀錄？',
      header: '刪除紀錄',
      rejectProps: {
        size: 'small',
        label: '取消',
        severity: 'secondary',
        outlined: true,
      },
      acceptProps: {
        size: 'small',
        label: '刪除',
        severity: 'danger',
      },
      accept: async () => {
        const result = await API.MESSAGE.POST_DELETE_SPECIFY_MESSAGE({
          userId: userId.value,
          botId: botId.value,
          chatId,
        })
        if (result.status === 200) {
          if (chatId === currentMessageId.value) {
            emptyConversation.value = true
            const { start } = useTimeoutFn(() => {
              emptyConversation.value = false
            }, 500)
            start()
          }
          toast.add({
            severity: 'success',
            summary: '刪除紀錄',
            detail: '刪除成功',
            life: 3000,
          })
          getMessage(true)
        }
      },
    })
  } catch (error: any) {
    const { response } = error
    toast.add({
      severity: 'error',
      summary: '刪除異常',
      detail: response.data.message,
      life: 3000,
    })
  }
}

watch(active, (value) => {
  if (value) {
    getMessage(true)
  }
})
</script>

<template>
  <Button
    v-tooltip.top="width < 640 ? '交談紀錄' : ''"
    icon="bi bi-layout-text-sidebar-reverse"
    :class="[triggerClass, 'whitespace-nowrap'].join(' ').trim()"
    :label="width >= 640 ? '交談紀錄' : ''"
    text
    severity="secondary"
    size="small"
    class="sm:justify-start!"
    @click="active = true"
  />
  <Drawer
    v-model:visible="active"
    position="left"
    class="w-full! max-w-1/5 min-w-75"
    header="交談紀錄"
  >
    <p v-if="messageList.length < 1">目前無交談紀錄</p>
    <ul v-else class="flex flex-col">
      <li
        v-for="{ chat_id, history } in messageList"
        :key="chat_id"
        class="flex items-center gap-2"
      >
        <i class="bi bi-inboxes" />
        <button
          type="button"
          class="truncate text-center text-sm font-medium whitespace-nowrap"
          v-text="history[0]?.content"
          @click="changeConversation(chat_id)"
        />
        <Button
          v-tooltip.top="'刪除紀錄'"
          icon="bi bi-trash"
          severity="danger"
          size="small"
          text
          @click="deleteMessage(chat_id)"
        />
      </li>
    </ul>
  </Drawer>
</template>
