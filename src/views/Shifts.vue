<template>
  <div>
    <h2 class="text-xl font-semibold mb-4">Shifts</h2>
    <input v-model="newShift" placeholder="Enter new shift..." class="border p-1 mr-2" />
    <button @click="addShift" class="bg-blue-500 text-white px-2 py-1">Add</button>
    <ul class="mt-4 list-disc list-inside">
      <li v-for="(shift, index) in shiftStore.shifts" :key="index">
        {{ shift }}
        <button @click="removeShift(index)" class="text-red-500 ml-2">x</button>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useShiftStore } from '../store/shifts'

const newShift = ref('')
const shiftStore = useShiftStore()

function addShift() {
  if (newShift.value.trim()) {
    shiftStore.addShift(newShift.value.trim())
    newShift.value = ''
  }
}

function removeShift(index: number) {
  shiftStore.removeShift(index)
}
</script>