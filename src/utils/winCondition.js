const winCondition = (board) => {
  const boardSize = board.length;
  for(let i = 0; i < boardSize; i++) {
    for(let j = 0; j < boardSize; j++) {
      if(!board[i][j].isBomb && !board[i][j].clicked) return false;
    }
  }
  return true;
}

export default winCondition;