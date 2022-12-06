import React from 'react'

export const Cell = ({ cell, handleClick }) => {

  const getValue = () => {
    if (!cell.clicked) return null;
    if (cell.isBomb) return '💣';
    return cell.value;
  }

  return (
    <div className='cell' onClick={handleClick} role="button" style={{backgroundColor: cell.clicked ? 'lightgreen' : 'lightgray'}}>{getValue()}</div>
  )
}
