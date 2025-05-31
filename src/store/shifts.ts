import { defineStore } from 'pinia'

export const useShiftStore = defineStore('shifts', {
  state: () => ({
    shifts: JSON.parse(localStorage.getItem('shifts') || '[]')
  }),
  actions: {
    addShift(shift) {
      this.shifts.push(shift)
      localStorage.setItem('shifts', JSON.stringify(this.shifts))
    },
    removeShift(index) {
      this.shifts.splice(index, 1)
      localStorage.setItem('shifts', JSON.stringify(this.shifts))
    }
  }
})
