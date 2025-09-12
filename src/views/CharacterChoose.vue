<template>
  <div class="flex flex-row h-screen justify-content text-center pt-10 chooseBody">
    <div class="flex flex-col basis-1/3 items-center justify-center">
      <h2 class="text-3xl bungee-spice-regular">Player1</h2>
      <img class="w-100" src="../../public/images/goku_god.png" alt="">
    </div>
    <div class="flex flex-col basis-1/3 items-center justify-center">
      <label class="bungee-spice-regular" for="">Insert names</label>
      <input
        class="border-solid border-black border-1 rounded-lg mb-3 font-bold"
        placeholder="player1"
        type="text"
        name=""
        id="nik1"
      />
      <input
        class="border-solid border-black border-1 rounded-lg font-bold mb-5"
        placeholder="player2"
        type="text"
        name=""
        id="nik2"
      />
      <button id="confBtn" class="readyBtn p-1 pr-10 pl-10">Play</button>
    </div>
    <div class="flex flex-col basis-1/3 items-center justify-center">
      <h2 class="text-3xl bungee-spice-regular">Player2</h2>
      <img class="w-100 mt-6" src="../../public/images/vegeta_blue.png" alt="">
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

document.addEventListener('DOMContentLoaded', () => {
  const nik1 = document.getElementById('nik1')
  const nik2 = document.getElementById('nik2')
  const confBtn = document.getElementById('confBtn')

  // in caso gli elementi non siano dichiarati
  if (!confBtn || !nik1 || !nik2) return

  confBtn.addEventListener('click', (e) => {
    // controlli che le caselle vengano utilizzate correttamante
    if (nik1.value === nik2.value && nik1.value !== '' && nik2.value !== '') {
      alert('ERROR: nicknames must be different!!!')
      return
    } else if (nik1.value === '' || nik2.value === '') {
      alert('ERROR: set all the nicknames!!!')
      return
    }

    //apre di nuovo la finestra index
    router.push("/game");

    //sul caricamento della pagina esegue l'arrow function seguente
    nikWin.onload = () => {
      const { nik1, nik2 } = getNiknames()
      nikWin.document.getElementById('player1').innerHTML = nik1
      nikWin.document.getElementById('player2').innerHTML = nik2
    }
  })
})

function getNiknames() {
  const nik1Text = document.getElementById('nik1')
  const nik2Text = document.getElementById('nik2')

  return { nik1: nik1Text.value, nik2: nik2Text.value }
}
</script>
