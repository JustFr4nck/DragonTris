let inc = 0
let winFlag = false

export function checkIsVoid(cel) {
  if (cel !== null) {
    return false
  }
  return true
}

export function putImg() {
  if (inc % 2 === 0) {
    inc++
    return 'tP1'
  } else {
    inc++
    return 'tP2'
  }
}

export function checkAlgo(matrix) {
  for (let i = 0; i < 3; i++) {
    // controllo delle righe
    if (
      matrix.value[i][0] !== null &&
      matrix.value[i][0] === matrix.value[i][1] &&
      matrix.value[i][0] === matrix.value[i][2]
    ) {
      return matrix.value[i][0]
    }

    // controllo delle colonne
    if (
      matrix.value[0][i] !== null &&
      matrix.value[0][i] === matrix.value[1][i] &&
      matrix.value[0][i] === matrix.value[2][i]
    ) {
      return matrix.value[0][i]
    }
  }

  // controllo diagonali
  if (
    matrix.value[0][0] !== null &&
    matrix.value[0][0] === matrix.value[1][1] &&
    matrix.value[0][0] === matrix.value[2][2]
  ) {
    return matrix.value[0][0]
  }
  if (
    matrix.value[0][2] !== null &&
    matrix.value[0][2] === matrix.value[1][1] &&
    matrix.value[0][2] === matrix.value[2][0]
  ) {
    return matrix.value[0][2]
  }
    
    let isFull = matrix.value.flat().filter((cel) => cel !== null);
    
    if (isFull.length >= 9) {
      return 'tie'
    }

  return null
}

export function whoWin(result) {
  if (result === '/gokuIcon.png') {
    winFlag = true
    return 'p1'
  } else if (result === '/majin_vegeta.png') {
    winFlag = true
    return 'p2'
  } else if (result === 'tie') {
    return 'TIE!!!'
  }
  else{
    return null;
  }
}

export function resetWindow() {
  inc = 0
  window.location.reload()
}

export { winFlag }
