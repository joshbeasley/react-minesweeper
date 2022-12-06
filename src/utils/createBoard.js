const createBoard = (boardSize, numMines) => {
  let mines = generateMines(numMines, boardSize);
  let board = initializeBoard(boardSize)
  board = fillMines(board, mines);

  for(let i = 0; i < boardSize; i++) {
    for(let j = 0; j < boardSize; j++) {
      let numMines = 0;
      if (i - 1 >= 0 && board[i-1][j].isBomb) numMines++; // up
      if (i + 1 < boardSize && board[i+1][j].isBomb) numMines++; // down
      if (j - 1 >= 0 && board[i][j-1].isBomb) numMines++; // left
      if (j + 1 < boardSize && board[i][j+1].isBomb) numMines++; // right
      if (i - 1 >= 0 && j - 1 >= 0 && board[i-1][j-1].isBomb) numMines++; // up-left
      if (i - 1 >= 0 && j + 1 < boardSize && board[i-1][j+1].isBomb) numMines++; // up-right
      if (i + 1 < boardSize && j - 1 >= 0 && board[i+1][j-1].isBomb) numMines++; // down-left
      if (i + 1 < boardSize && j + 1 < boardSize && board[i+1][j+1].isBomb) numMines++; // down-right
      board[i][j].value = numMines;
    }
  }

  return board;
}

const initializeBoard = (boardSize) => {
  let board = []
  for(let i = 0; i < boardSize; i++) {
    let row = [];
    for(let j = 0; j < boardSize; j++) {
      row.push(createCell(false, false, 0))
    }
    board.push(row);
  }
  return board;
}

const fillMines = (board, mines) => {
  for(let mine of mines) {
    board[mine[0]][mine[1]] = createCell(false, true, 0);
  }
  return board;
}

const createCell = (clicked, isBomb, value) => {
  return {
    clicked: clicked,
    isBomb: isBomb,
    value: value
  }
}

const generateMines = (numMines, boardSize) => {
  let mines = []
  while(mines.length < numMines) {
    let mineLocation = randomLocation(boardSize);
    if (!mines.some(mine => isEqual(mine, mineLocation))) {
      mines.push(mineLocation);
    }
  }
  return mines;
}

const printBoard = (board) => {
  for(let i = 0; i < board.length; i++) {
    let row = '';
    for (let j = 0; j < board.length; j++) {
      if(board[i][j].isBomb) {
        row += 'x '
      } else {
        row += board[i][j].value + ' ';
      }
    }
    console.log(row);
  }
}

const randomLocation = (max) => {
  return [Math.floor(Math.random() * max),
          Math.floor(Math.random() * max)];
}

const isEqual = (first, second) => {
  return JSON.stringify(first) === JSON.stringify(second);
}

export default createBoard;

