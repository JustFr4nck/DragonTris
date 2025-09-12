import { defineStore } from 'pinia'

export const playersData = defineStore('data', {
  state: () => ({
    player1: '',
    player2: '',
    score: {
      player1: 0,
      player2: 0,
    },
  }),

  actions: {
    playerNames(player1, player2) {
      this.player1 = player1
      this.player2 = player2
    },
  },

  persist: {
    enabled: true, 
    storage: localStorage,
  },
})
