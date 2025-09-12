<template>
  <div class="h-screen flex flex-row justify-center">
    <div class="basis-1/3 text-center mt-10 text-3xl">
      <h3 class="bungee-spice-regular">{{ store.player1 }}</h3>
      <img src="./public/images/cat.png" alt="" />
    </div>

    <div class="basis-1/3 flex flex-col items-center">
      <div class="flex flex-row items-center justify-center border-orange-400 border-solid border-2 mt-30">
        <div>
          <div @click="addImg"  class="internalGrid"> <img v-if="img"  :src="img" alt=""></div>
          <div class="internalGrid"></div>
          <div class="internalGrid"></div>
        </div>
        <div>
          <div class="internalGrid"></div>
          <div class="internalGrid"></div>
          <div class="internalGrid"></div>
        </div>
        <div>
          <div class="internalGrid"></div>
          <div class="internalGrid"></div>
          <div class="internalGrid"></div>
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
import { resetWindow, putImg, checkIsVoid, nikWin, colorTurn, checkAlgo, whoWin, winFlag} from '../lib/script.js';
import { ref } from 'vue';

const img = ref('');

const p1Img = "../../public/images/gokuIcon.png";
const p2Img = "../../public/images/vegetaIcon.png";

let matrix = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

function addImg(){

    if(putImg() === "tP1"){

       img.value = p1Img;
       
    }
    else{
        img.value = p2Img
    }

}


const store = playersData()
</script>
