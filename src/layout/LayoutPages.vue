<script setup lang="ts">
import { toRefs } from 'vue'
import MenuTop from '@/components/MenuTop.vue'
import FooterBar from '@/components/FooterBar.vue'

const props = withDefaults(
  defineProps<{
    rootClass?: string
  }>(),
  {},
)
const { rootClass } = toRefs(props)
</script>

<template>
  <MenuTop />
  <main class="min-h-full w-full grow p-4" :class="rootClass">
    <slot />
  </main>
  <FooterBar />
</template>
