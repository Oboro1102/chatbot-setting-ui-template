<script setup lang="ts">
import { ref, computed, defineAsyncComponent, onBeforeMount, watch } from 'vue'
import { useRouter } from 'vue-router'
import { Button, Checkbox, ToggleButton, useToast, useConfirm } from 'primevue'
import { useGlobalStore } from '@/stores/index'
import { API } from '@/api/index'
import LayoutPages from '@/layout/LayoutPages.vue'
import LoadingArea from '@/components/LoadingArea.vue'
import IconBot from '@/components/IconBot.vue'
const FormBot = defineAsyncComponent({
  loader: () => import('@/components/FormBot.vue'),
  loadingComponent: LoadingArea,
})

const globalStore = useGlobalStore()
const userId = computed(() => globalStore.userInfo.id)
const toast = useToast()
const confirm = useConfirm()
const router = useRouter()

const botList = ref([])
const getBotList = async (reload: boolean = false) => {
  try {
    const result = await API.BOT.GET_BOT_LIST(userId.value, {
      cache: { override: reload },
    })
    if (result.data) {
      console.log(result.data.data.bots)
      botList.value = result.data.data.bots
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
const activeDeleteMode = ref(false)
const preDeleteList = ref([])
const deleteChatBot = async () => {
  try {
    confirm.require({
      message: `你是否確定要刪除你選取 ${preDeleteList.value.length} 個機器人？`,
      header: '刪除機器人',
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
        const result = await API.BOT.POST_BOT_DELETE({
          userId: userId.value,
          botId: preDeleteList.value,
        })
        if (result.status === 200) {
          toast.add({
            severity: 'success',
            summary: '刪除機器人',
            detail: '刪除成功',
            life: 3000,
          })
          getBotList(true)
          preDeleteList.value = []
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
const endEdit = ref(false)
watch(endEdit, (value) => {
  if (value) {
    getBotList(true)
  }
})
onBeforeMount(() => {
  getBotList()
})
</script>

<template>
  <LayoutPages root-class="flex gap-4">
    <div class="panel sticky top-17 flex h-fit w-fit flex-col">
      <FormBot use-for="add" v-model:endEdit="endEdit" />
    </div>
    <section class="wrap radius max-h-fit w-full bg-white pt-2!">
      <div class="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2">
        <ToggleButton
          onLabel="解除刪除模式"
          offLabel="開啟刪除模式"
          onIcon="bi bi-lock"
          offIcon="bi bi-unlock"
          size="small"
          class="max-h-8.5! whitespace-nowrap"
          :pt="{
            root: ({ context }) => ({
              class: context.active ? 'bg-error! border-0!' : 'bg-secondaryLight/30!',
            }),
            content: ({ context }) => ({
              class: ['px-2!', context.active ? 'text-error!' : ''],
            }),
            icon: ({ context }) => ({
              class: context.active ? 'text-error!' : '',
            }),
          }"
          v-model="activeDeleteMode"
        />
        <Button
          v-if="activeDeleteMode"
          icon="bi bi-trash"
          label="刪除機器人"
          severity="danger"
          size="small"
          :disabled="preDeleteList.length < 1"
          @click="deleteChatBot"
        />
      </div>
      <p v-if="botList.length < 1">目前無已設定好的機器人</p>
      <div v-else class="grid gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8">
        <div
          v-for="{ bot_id, name } in botList"
          :key="bot_id"
          class="radius relative flex flex-col items-center justify-center border border-(--p-form-field-border-color)/25 p-2"
        >
          <div class="absolute top-2" :class="activeDeleteMode ? 'right-4' : 'right-2'">
            <Checkbox
              v-if="activeDeleteMode"
              :pt="{
                box: ({ context }) => ({
                  class: {
                    'bg-error! border-error!': context.checked,
                    'bg-transparent! border-error!': !context.checked,
                  },
                }),
              }"
              :value="bot_id"
              v-model="preDeleteList"
            />
            <FormBot
              v-else
              use-for="edit"
              :botName="name"
              :edit-target-id="bot_id"
              v-model:endEdit="endEdit"
            />
          </div>
          <Transition name="slideDown" mode="out-in">
            <IconBot v-if="activeDeleteMode" use-for="delete" />
            <button
              v-else
              v-tooltip.top="'啟動機器人'"
              type="button"
              @click="
                router.push({
                  name: 'ChatBotChat',
                  query: { botID: bot_id, name: name },
                })
              "
            >
              <IconBot use-for="active" />
            </button>
          </Transition>
          <p class="truncate text-center text-sm font-medium whitespace-nowrap" v-text="name" />
        </div>
      </div>
    </section>
  </LayoutPages>
</template>
