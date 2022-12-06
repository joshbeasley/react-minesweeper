import React from 'react';

export const SettingsContext = React.createContext({});

export const SettingsProvider = ({ children }) => {
  const [boardSize, setBoardSize] = React.useState(10);
  const [numMines, setNumMines] = React.useState(10);

  return (
    <SettingsContext.Provider value={{boardSize, setBoardSize, numMines, setNumMines}}>
      {children}
    </SettingsContext.Provider>
  )
}