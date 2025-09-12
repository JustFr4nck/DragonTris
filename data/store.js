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

  getters: {
    
    getNames: (state) => ({
      player1: state.player1,
      player2: state.player2,
    }),
  },

  actions: {
    playerNames(player1, player2) {
      this.player1 = player1
      this.player2 = player2
    },
  },

  persist: {
    enabled: true,
    storage: sessionStorage,
  },
})
