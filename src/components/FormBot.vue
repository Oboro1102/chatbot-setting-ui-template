<script setup lang="ts">
import { ref, computed, toRefs, watch } from 'vue'
import { useWindowSize, useTimeoutFn } from '@vueuse/core'
import { useGlobalStore } from '@/stores/index'
import {
  Button,
  Drawer,
  FloatLabel,
  InputText,
  Textarea,
  FileUpload,
  Message,
  Checkbox,
  useToast,
} from 'primevue'
import { API } from '@/api/index'

const props = withDefaults(
  defineProps<{
    triggerClass?: string
    useFor: 'add' | 'edit' | 'tune'
    botName?: string
    editTargetId?: string
  }>(),
  { useFor: 'add', botName: '', editTargetId: '' },
)
const { triggerClass, useFor, editTargetId } = toRefs(props)
const toast = useToast()
const { width } = useWindowSize()
const globalStore = useGlobalStore()
const userId = computed(() => globalStore.userInfo.id)

const botData = ref<{
  bot_id: string
  name: string
  system_prompt: string
  knowledge_base?: File[]
  strict_mode: boolean
}>({
  bot_id: editTargetId.value || '',
  name: '',
  system_prompt: '',
  knowledge_base: [],
  strict_mode: false,
})

const lockFormSubmit = computed(() => botData.value.name.length < 1)
const showErrorInfo = ref(false)
const validateForm = (key: string) => {
  const errorMessage: { [index: string]: string } = {
    name: [botData.value.name.length < 1 ? '請設定名稱' : ''].join(' ').trim(),
    systemPrompt: [botData.value.system_prompt.length < 1 ? '請填寫角色設定' : ''].join(' ').trim(),
  }
  return errorMessage[key]
}
const uploadLoading = ref(false)
const endEdit = defineModel('endEdit', { default: false })
const setDataFiles = (value: any) => {
  botData.value.knowledge_base = value.files
}
const onRemoveTemplatingFile = (index: number) => {
  if (botData.value.knowledge_base && botData.value.knowledge_base.length > 0) {
    botData.value.knowledge_base.splice(index, 1)
  }
}
const uploadData = async () => {
  if (lockFormSubmit.value) {
    showErrorInfo.value = true
    return
  } else {
    showErrorInfo.value = false
  }

  try {
    uploadLoading.value = true
    const result =
      useFor.value === 'add'
        ? await API.BOT.POST_BOT_ADD({ userId: userId.value, botData: botData.value })
        : await API.BOT.POST_BOT_UPDATE({
            userId: userId.value,
            botData: botData.value,
          })
    if (result.status === 200) {
      endEdit.value = true
      toast.add({
        severity: 'success',
        summary: useFor.value === 'add' ? '建立機器人' : '更新機器人',
        detail: useFor.value === 'add' ? '新增成功' : '更新成功',
        life: 3000,
      })
      const { start } = useTimeoutFn(() => {
        editActive.value = false
        endEdit.value = false
      }, 850)
      start()
    }
  } catch (error: any) {
    const { response } = error
    toast.add({
      severity: 'error',
      summary: useFor.value === 'add' ? '建立失敗' : '更新失敗',
      detail: response.data.message,
      life: 3000,
    })
  } finally {
    uploadLoading.value = false
  }
}

const editActive = ref(false)
const restoreToDefault = () => {
  botData.value = {
    bot_id: '',
    name: '',
    system_prompt: '',
    knowledge_base: [],
    strict_mode: false,
  }
}
const getEditTargetData = async (data: { userId: string; botId: string }) => {
  try {
    const result = await API.BOT.POST_SPECIFY_BOT_SETTING(data)
    if (result.data) {
      botData.value = result.data.data.bots
    }
  } catch (error) {}
}
watch(editActive, (value) => {
  if (value) {
    if (useFor.value === 'edit' || useFor.value === 'tune') {
      getEditTargetData({
        userId: userId.value,
        botId: editTargetId.value,
      })
    } else {
      restoreToDefault()
    }
  }
  showErrorInfo.value = false
})
</script>

<template>
  <Button
    v-tooltip.top="
      useFor === 'add' && width < 640
        ? '建立機器人'
        : useFor === 'edit'
          ? `調整 ${botName}`
          : useFor === 'tune' && width < 640
            ? '調整機器人'
            : ''
    "
    :icon="useFor === 'add' ? 'bi bi-plus-lg' : 'bi bi-gear'"
    :class="[triggerClass, 'whitespace-nowrap'].join(' ').trim()"
    :label="
      width >= 640 ? (useFor === 'add' ? '建立機器人' : useFor === 'tune' ? '調整機器人' : '') : ''
    "
    text
    :rounded="['add', 'tune'].includes(useFor)"
    severity="secondary"
    size="small"
    @click="editActive = true"
  />
  <Drawer
    v-model:visible="editActive"
    position="right"
    class="w-full! max-w-1/5 min-w-75"
    :header="useFor === 'add' ? '建立機器人' : `調整 ${botName}`"
  >
    <div class="mt-2 flex flex-col gap-4">
      <FloatLabel variant="on">
        <InputText
          id="name"
          fluid
          autocomplete="true"
          :invalid="showErrorInfo && validateForm('name')!.length > 0"
          :disabled="useFor === 'tune'"
          v-model="botData.name"
        />
        <label for="name" class="form__label form__label--whitMessage">
          <span>名稱</span>
          <Message
            v-if="showErrorInfo && validateForm('name')!.length > 0"
            severity="error"
            variant="simple"
            size="small"
            :pt="{ text: { class: '!text-[0.625rem]' } }"
            >{{ validateForm('name') }}</Message
          >
        </label>
      </FloatLabel>
      <FloatLabel variant="on">
        <Textarea
          id="systemPrompt"
          v-model="botData.system_prompt"
          rows="5"
          cols="30"
          :invalid="showErrorInfo && validateForm('systemPrompt')!.length > 0"
          style="resize: none"
        />
        <label for="systemPrompt" class="form__label form__label--whitMessage">
          <span>角色設定</span>
          <Message
            v-if="showErrorInfo && validateForm('systemPrompt')!.length > 0"
            severity="error"
            variant="simple"
            size="small"
            :pt="{ text: { class: '!text-[0.625rem]' } }"
            >{{ validateForm('systemPrompt') }}</Message
          >
        </label>
      </FloatLabel>
      <FileUpload
        name="demo[]"
        :multiple="true"
        @select="setDataFiles($event)"
        :pt="{
          header: {
            class: 'p-2!',
          },
          content: { class: 'p-2! pt-0!' },
        }"
      >
        <template #header="{ chooseCallback }">
          <Button
            @click="chooseCallback()"
            size="small"
            icon="bi bi-cloud-plus"
            label="上傳要使用的資料檔案"
            variant="outlined"
            severity="secondary"
          />
        </template>
        <template #content>
          <div
            v-if="botData.knowledge_base && botData.knowledge_base.length > 0"
            class="divide-y divide-(--p-form-field-border-color) text-sm"
          >
            <div
              v-for="({ name }, index) of botData.knowledge_base"
              :key="index"
              class="flex items-center justify-between gap-4 py-2 first-of-type:pt-0 last-of-type:pb-0"
            >
              <span
                class="max-w-60 overflow-hidden font-semibold text-ellipsis whitespace-nowrap"
                v-text="name || '模擬上傳後的檔案'"
              />
              <Button
                icon="bi bi-x-lg"
                @click="onRemoveTemplatingFile(index)"
                variant="outlined"
                rounded
                size="small"
                severity="danger"
              />
            </div>
          </div>
          <label class="flex w-fit cursor-pointer items-center gap-2 text-sm">
            <Checkbox
              v-model="botData.strict_mode"
              name="strictMode"
              :disabled="botData.knowledge_base && botData.knowledge_base.length < 1"
              binary
            />
            <span class="select-none">限定機器人回話內容只依據提供的資料回答</span>
          </label>
        </template>
      </FileUpload>
    </div>
    <template #footer>
      <Button
        size="small"
        fluid
        severity="success"
        :label="useFor === 'add' ? '建立' : '更新'"
        :loading="uploadLoading"
        :disabled="uploadLoading"
        @click="uploadData"
      />
    </template>
  </Drawer>
</template>
