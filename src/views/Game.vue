<template>
  <div class="h-screen flex flex-row justify-center">
    <div class="basis-1/3 text-center">
      <h3 class="bungee-spice-regular">{{ store.player1 }}</h3>
      <img src="./public/images/cat.png" alt="" />
    </div>

    <div class="basis-1/3 text-center">
      <div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div>
        <button>Refresh</button>
      </div>
    </div>

    <div class="basis-1/3 text-center">
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
import { resetWindow, putImg, checkIsVoid, nikWin, colorTurn, checkAlgo, whoWin, winFlag} from '../lib/script.js';

const store = playersData()
</script>
