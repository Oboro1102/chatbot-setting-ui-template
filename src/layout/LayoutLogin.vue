<script setup lang="ts">
import { toRefs } from 'vue'

const props = withDefaults(
  defineProps<{
    showLogo?: boolean
  }>(),
  { showLogo: true },
)
const { showLogo } = toRefs(props)
</script>

<template>
  <main
    class="flex grow flex-col items-center justify-center bg-[url(https://unsplash.com/photos/D_ivYIn4jWw/download?force=true&w=1920)] bg-cover bg-center xl:bg-position-[center_left_-22.5vw]"
  >
    <div
      class="flex w-full grow flex-col items-center justify-center p-4 backdrop-blur-sm xl:ml-auto xl:max-w-screen-sm xl:bg-white 2xl:max-w-3xl"
    >
      <div
        class="radius wrap--gap flex w-full max-w-md flex-col gap-5 bg-white p-6 xl:max-w-2xl xl:bg-transparent"
      >
        <div v-if="showLogo" class="text-main mx-auto flex items-center gap-2">
          <span class="text-2xl font-semibold">問答機器人建構系統模板</span>
        </div>
        <slot name="form" />
      </div>
    </div>
  </main>
</template>
