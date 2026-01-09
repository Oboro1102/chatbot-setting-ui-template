<script setup lang="ts">
import { ref, toRefs, defineAsyncComponent, watch } from 'vue'
import { useWindowSize } from '@vueuse/core'
import LoadingArea from '@/components/LoadingArea.vue'
const DrawerFrame = defineAsyncComponent({
  loader: () => import('@/components/DrawerFrame.vue'),
  loadingComponent: LoadingArea,
})
const PopoverHint = defineAsyncComponent({
  loader: () => import('@/components/PopoverHint.vue'),
  loadingComponent: LoadingArea,
})

const props = withDefaults(
  defineProps<{
    rootClass?: string
    conversationList: {
      conversationID: number
      title: string
    }[]
    getDataFunction: (conversationID: number, reload?: boolean) => Promise<void>
  }>(),
  {},
)
const { rootClass, conversationList, getDataFunction } = toRefs(props)
const selectedConversation = defineModel<number | null>('selectedConversation')
const { width } = useWindowSize()

const active = ref(false)
const forceClose = ref(false)

const changeConversation = (id: number) => {
  selectedConversation.value = id
  getDataFunction.value(id)
  forceClose.value = true
}
watch(active, (value) => {
  if (value) {
    forceClose.value = false
  }
})
</script>

<template>
  <DrawerFrame
    :root-class="rootClass"
    use-overlay
    direction="right"
    content-base-class="w-[45vw] sm:w-[35vw]"
    content-wrap-class="flex flex-col gap-3"
    content-title="交談紀錄"
    v-model:detect-active="active"
    v-model:force-close="forceClose"
  >
    <template #trigger="{ active }">
      <PopoverHint :additional-active-condition="width < 640" direction="right" content="交談紀錄">
        <template #trigger>
          <button
            type="button"
            class="button--panel sm:w-full sm:min-w-fit sm:!justify-start sm:gap-2 sm:px-1.5 sm:py-1"
            @click="active"
          >
            <i class="bi bi-layout-text-sidebar-reverse leading-none" />
            <span class="hidden whitespace-nowrap text-xs sm:inline">交談紀錄</span>
          </button>
        </template>
      </PopoverHint>
    </template>
    <template #content>
      <ul class="flex flex-col gap-2 text-sm">
        <li
          v-for="{ conversationID, title } in conversationList"
          :key="conversationID"
          class="flex w-fit cursor-pointer gap-2 hover:text-main"
          @click="changeConversation(conversationID)"
        >
          <i class="bi bi-inboxes" /><span v-text="title" />
        </li>
      </ul>
    </template>
  </DrawerFrame>
</template>
