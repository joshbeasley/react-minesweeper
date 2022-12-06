import './App.css';
import { Board } from './components/Board';
import { Settings } from './components/Settings';
import React from 'react';
import { Timer } from './components/Timer';

function App() {
  const [boardSize, setBoardSize] = React.useState(10);
  const [numMines, setNumMines] = React.useState(10);

  return (
    <div className="App">
      <h1 >Minesweeper</h1>
      <Timer/>
      <Board boardSize={boardSize} numMines={numMines}/>
      <Settings boardSize={boardSize} setBoardSize={setBoardSize} numMines={numMines} setNumMines={setNumMines}/>
    </div> 
  );
}

export default App;
