const revealBoard = (board, x, y) => {
  const fill = (r, c) => {
    let currCell = board[r][c];
    if (currCell.value === 0) {
      board[r][c].clicked = true;
      if (r-1 >= 0 && !board[r-1][c].clicked) fill(r-1, c);
      if (r+1 < board.length && !board[r+1][c].clicked) fill(r+1, c);
      if (c-1 >= 0 && !board[r][c-1].clicked) fill(r, c-1);
      if (c+1 < board.length && !board[r][c+1].clicked) fill(r, c+1);
      if (r-1 >= 0 && c-1 >= 0 && !board[r-1][c-1].clicked) fill(r-1, c-1);
      if (r+1 < board.length && c+1 < board.length && !board[r+1][c+1].clicked) fill(r+1, c+1);
      if (c-1 >= 0 && r+1 < board.length && !board[r+1][c-1].clicked) fill(r+1, c-1);
      if (c+1 < board.length && r-1 >= 0 && !board[r-1][c+1].clicked) fill(r-1, c+1);
    } else {
      board[r][c].clicked = true;
      return;
    }
  }

  fill(x, y)
  return board;
}

export default revealBoard;