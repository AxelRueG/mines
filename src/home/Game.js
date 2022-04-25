import { useState, useEffect } from 'react';
import MineGame from '../mines';
import Cell from './Cell';
import StatusAndCount from './StatusAndCount';
import GameOptions from './GameOptions';
import './style.css';

const Game = ({ size }) => {
  const [gameBoard, setGameBoard] = useState(new MineGame(size))
  const [gameStatus, setGameStatus] = useState('continue')
  const [check, setCheck ] = useState(false)
  const [countMoves, setCountMoves] = useState(0)
  
  useEffect(() => {
    setGameStatus('continue')
  },[])

  const handleClick = (fil, col) => {
    if (gameStatus !== 'continue') return

    if (check) {
      const status = gameBoard.redflag(fil,col)
      setGameStatus(status)
    } else {
      const status = gameBoard.click(fil,col)
      setGameStatus(status)
    }

    setCountMoves(countMoves+1)
    console.log('click')
  };

  const handleCheck = () => setCheck(!check)

  const handleRestart = () => {
    setGameBoard(new MineGame(size))
    setGameStatus('continue')
  };

  return (
    <div className="game">
      <StatusAndCount
        gameStatus={gameStatus}
        cantMines={gameBoard.cantMines}
      />
      <div className={
        gameStatus === 'gameover'
        ? `game-board game-board-${size} game-board-over`
        : `game-board game-board-${size}`
      }>{
        gameBoard.board.map((Row, m) =>
          Row.map((box, n) => (
            <Cell
              box={box}
              position={[m, n]}
              click={handleClick}
              key={`${m}-${n}`}
            />
        )))
      }</div>
      <GameOptions
        handleCheck={handleCheck}
        handleRestart={handleRestart}
        check={check}
      />
    </div>
  );
}

export default Game;
