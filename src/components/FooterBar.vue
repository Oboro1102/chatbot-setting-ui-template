<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="px-4 pb-2 text-xs text-(--p-button-text-secondary-color)">
    <span class="panel ml-auto"
      >&copy; 2026{{ currentYear > 2026 ? ` - ${currentYear}` : null }} Design & Coding by
      ツキノリュウ.</span
    >
  </footer>
</template>
