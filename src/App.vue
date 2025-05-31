<template>
  <div class="p-4 font-sans">
    <nav class="flex gap-4 text-blue-600 mb-4">
      <RouterLink to="/">Dashboard</RouterLink>
      <RouterLink to="/shifts">Shifts</RouterLink>
      <RouterLink to="/team">Team</RouterLink>
      <RouterLink to="/alerts">Alerts</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>
<script setup lang="ts"></script>
