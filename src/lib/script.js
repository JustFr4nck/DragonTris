let inc = 0;
let winFlag = false;

export function checkIsVoid(cel) {
  if (cel.innerHTML !== "") {
    return false;
  }
  return true;
}

export function putImg() {
  if (inc % 2 === 0) {
    inc++;
    return "tP1";
  } else {
    inc++;
    return "tP2";
  }
}

export function colorTurn(colorP1, colorP2) {
  colorP1.classList.remove("playerInGame");
  colorP2.classList.remove("playerInGame");

  if (inc % 2 === 0) {
    colorP1.classList.add("playerInGame");
  } else {
    colorP2.classList.add("playerInGame");
  }
}

export function checkAlgo(matrix) {
  for (let i = 0; i < 3; i++) {
    // controllo delle righe
    if (
      matrix[i][0] !== null &&
      matrix[i][0] === matrix[i][1] &&
      matrix[i][0] === matrix[i][2]
    ) {
      return matrix[i][0];
    }

    // controllo delle colonne
    if (
      matrix[0][i] !== null &&
      matrix[0][i] === matrix[1][i] &&
      matrix[0][i] === matrix[2][i]
    ) {
      return matrix[0][i];
    }
  }

  // controllo diagonali
  if (
    matrix[0][0] !== null &&
    matrix[0][0] === matrix[1][1] &&
    matrix[0][0] === matrix[2][2]
  ) {
    return matrix[0][0];
  }
  if (
    matrix[0][2] !== null &&
    matrix[0][2] === matrix[1][1] &&
    matrix[0][2] === matrix[2][0]
  ) {
    return matrix[0][2];
  }

  // controllo pareggio
  const isFull = matrix.flat().every((cel) => cel !== null);
  if (isFull) {
    return "tie";
  }

  return null;
}

export function whoWin(result, player1, player2) {
  if (result === "p1") {
    winFlag = true;
    return `${player1.innerHTML} won the game!!!`;
  } else if (result === "p2") {
    winFlag = true;
    return `${player2.innerHTML} won the game!!!`;
  } else if (result === "tie") {
    return "TIE!!!";
  } else {
    return null;
  }
}

export function resetWindow() {
  window.location.reload();
}

export function nikWin() {
  window.open("./src/pages/niknames.html");
}

export { winFlag };
