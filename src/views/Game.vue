<template>
  <div class="h-screen flex flex-row justify-center">
    <div class=" flex flex-col basis-1/3 text-center mt-10 text-3xl items-center ">
      <h3 :class="{ playerInGame: colorFlag === true }" class="rubik-bubbles-regular">
        {{ store.player1 }}
      </h3>
      <img src="../../public/gokuIcon.png" class="w-80" alt="" />
      <h4 class="rubik-bubbles-regular">SCORE: {{ store.score.player1 }}</h4>
    </div>

    <div class="basis-1/3 flex flex-col items-center">
      <div
        class="flex flex-row items-center justify-center border-orange-400 border-solid border-2 mt-30"
      >
        <div v-for="(row, iRow) in matrix" :key="iRow">
          <div
            v-for="(col, iCol) in row"
            :key="iCol"
            class="internalGrid"
            @click="addImg(iRow, iCol)"
          >
            <img v-if="col" :src="col" alt="" />
          </div>
        </div>
      </div>
      <div>
        <button
          @click="resetWindow"
          class="readyBtn text-white p-1 pr-10 pl-10 mt-4"
        >
          Refresh
        </button>
      </div>

      <div class="flex justify-center mt-20">
        <h2 class="bungee-spice-regular text-5xl">{{ winner }}</h2>
      </div>
    </div>

    <div class="basis-1/3 text-center mt-10 text-3xl flex flex-col items-center">
      <h3 :class="{ playerInGame: colorFlag === false }" class="rubik-bubbles-regular">
        {{ store.player2 }}
      </h3>
      <img src="../../public/majin_vegeta.png" class="w-80" alt="" />
      <h4 class="rubik-bubbles-regular">SCORE: {{ store.score.player2 }}</h4>
    </div>
  </div>
</template>

<script setup>
import { playersData } from '../../data/store'
import { resetWindow, putImg, checkIsVoid, checkAlgo, whoWin, winFlag } from '../lib/script.js'
import { ref } from 'vue'

const store = playersData()

const p1Img = ref('/gokuIcon.png')
const p2Img = ref('/majin_vegeta.png')
const winner = ref('')

let colorFlag = true

let matrix = ref([
  [null, null, null],
  [null, null, null],
  [null, null, null],
])

function addImg(row, col) {
  if (winFlag) return

  if (!checkIsVoid(matrix.value[row][col])) {
    alert("ERROR: You can't put a symbol where there is already one")
    return
  }

  if (putImg() === 'tP1') {
    matrix.value[row][col] = p1Img.value
    colorFlag = false
  } else {
    matrix.value[row][col] = p2Img.value
    colorFlag = true
  }

  const result = checkAlgo(matrix)

  if (whoWin(result) === 'p1') {
    winner.value = store.player1 + ' IS THE WINNER!!!'
    store.score.player1++;
  } else if (whoWin(result) === 'p2') {
    winner.value = store.player2 + ' IS THE WINNER!!!!'
    store.score.player2++;
  } else {
    winner.value = 'TIE!!!'
  }
}
</script>
