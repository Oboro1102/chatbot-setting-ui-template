<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="px-4 pb-2 text-right text-xs text-white">
    &copy; 2026{{ currentYear > 2026 ? ` - ${currentYear}` : null }} Design & Coding by
    ツキノリュウ.
  </footer>
</template>
