<template>
  <div class="flex flex-row h-screen justify-content text-center pt-10 chooseBody">
    <div class="flex flex-col basis-1/3 items-center justify-center">
      <h2 class="text-3xl bungee-spice-regular">Player1</h2>
      <img class="w-100" src="../../public/images/goku_god.png" alt="" />
    </div>
    <div class="flex flex-col basis-1/3 items-center justify-center">
      <label class="bungee-spice-regular" for="">Insert names:</label>
      <input
        class="border-solid border-white border-1 rounded-lg mb-3 font-bold text-white"
        placeholder="player1"
        type="text"
        name=""
        v-model="nik1"
      />
      <input
        class="border-solid border-white border-1 rounded-lg font-bold mb-5 text-white"
        placeholder="player2"
        type="text"
        name=""
        v-model="nik2"
      />
      <button @click="play" class="readyBtn p-1 pr-10 pl-10 text-white">Play</button>
    </div>
    <div class="flex flex-col basis-1/3 items-center justify-center">
      <h2 class="text-3xl bungee-spice-regular">Player2</h2>
      <img class="w-100 mt-6" src="../../public/images/vegeta_blue.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { playersData } from '../../data/store' 

const router = useRouter()
const store = playersData()

const nik1 = ref('')
const nik2 = ref('')

function play() {
  // controlli che le caselle vengano utilizzate correttamante
  if (nik1.value === nik2.value && nik1.value !== '' && nik2.value !== '') {
    alert('ERROR: nicknames must be different!!!')
    return
  } else if (nik1.value === '' || nik2.value === '') {
    alert('ERROR: set all the nicknames!!!')
    return
  }

  store.playerNames(nik1.value, nik2.value);

  //apre la finestra per il game
  router.push('/game')
}
</script>
