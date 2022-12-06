import React, { useState, useContext, useEffect } from 'react'
import createBoard from '../utils/createBoard'
import revealBoard from '../utils/revealBoard';
import winCondition from '../utils/winCondition';
import { Cell } from './Cell';

export const Board = ({boardSize, numMines}) => {
  const [board, setBoard] = useState(createBoard(boardSize, numMines));

  const handleClick = async (i, j) => {
    let newBoard = JSON.parse(JSON.stringify(board));
    newBoard[i][j].clicked = true;

    if (board[i][j].isBomb) {
      setBoard(newBoard);
      await new Promise( res => setTimeout(res, 500) );
      alert('You lost')
      setBoard(createBoard(boardSize, numMines))
    } else {
      newBoard = revealBoard(newBoard, i, j);
      setBoard(newBoard);
      if (winCondition(newBoard)) {
        alert('You won!')
        setBoard(createBoard(boardSize, numMines))
      }
    }
  }

  useEffect(() => {
    setBoard(createBoard(boardSize, numMines))
  }, [boardSize, numMines])

  return (
    <div className='rows'>
      {board.map((row, i) => {
        return <div key={i} className='cells'>{row.map((cell, j) => {
          return <Cell cell={cell} handleClick={() => handleClick(i,j)} key={JSON.stringify([i,j])}/>
        })}</div>
      })}
    </div>
  )
}


