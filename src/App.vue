<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">SafeShift Dashboard</h1>
    <ShiftCard :shift="{ role: 'Cook', time: '2 PM', status: 'Confirmed' }" />
  </div>
</template>

<script setup lang="ts">
import ShiftCard from './components/ShiftCard.vue'
</script>
