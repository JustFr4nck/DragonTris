<template>
  <div class="h-screen flex flex-row justify-center">
    <div class="basis-1/3 text-center mt-10 text-3xl">
      <h3 class="bungee-spice-regular">{{ store.player1 }}</h3>
      <img src="./public/images/cat.png" alt="" />
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
        <button class="readyBtn text-white p-1 pr-10 pl-10 mt-4">Refresh</button>
      </div>
    </div>

    <div class="basis-1/3 text-center mt-10 text-3xl">
      <h3 class="bungee-spice-regular">{{ store.player2 }}</h3>
      <img src="./public/images/dog.png" alt="" />
    </div>
  </div>

  <div>
    <h2></h2>
  </div>
</template>

<script setup>
import { playersData } from '../../data/store'
import {
  resetWindow,
  putImg,
  checkIsVoid,
  nikWin,
  colorTurn,
  checkAlgo,
  whoWin,
  winFlag,
} from '../lib/script.js'
import { ref } from 'vue'

const store = playersData()

const p1Img = ref('/gokuIcon.png')
const p2Img = ref('/majin_vegeta.png')



let matrix = ref([
  [null, null, null],
  [null, null, null],
  [null, null, null],
])

function addImg(row, col) {
  if (putImg() === 'tP1') {
    matrix.value[row][col] = p1Img.value
  } else {
    matrix.value[row][col] = p2Img.value
  }
}



console.log((store.player1))
</script>
