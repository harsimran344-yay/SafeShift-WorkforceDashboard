<template>
  <div class="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition">
    <h2 class="text-xl font-semibold">{{ shift.role }}</h2>
    <p>{{ shift.time }}</p>
    <p>Status: <span :class="statusClass">{{ shift.status }}</span></p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ shift: { role: string; time: string; status: string } }>();

const statusClass = computed(() =>
  shift.status === 'Confirmed' ? 'text-green-600' : 'text-red-600'
);
</script>
