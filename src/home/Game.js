import { useState, useEffect } from 'react';
import MineGame from '../mines';
import Cell from './Cell';
import StatusAndCount from './StatusAndCount';
import GameOptions from './GameOptions';
import './style.css';

const Game = (props) => {
  const [tablero, setTablero] = useState(new MineGame(props.size))
  const [gameStatus, setGameStatus] = useState('continue')
  const [check, setCheck ] = useState(false)
  const [countMoves, setCountMoves] = useState(0)
  
  useEffect(() => {
    setGameStatus('continue')
  },[])

  const handleClick = (fil, col) => {
    if (gameStatus !== 'continue') return

    if (check) {
      const status = tablero.redflag(fil,col)
      setGameStatus(status)
    } else {
      const status = tablero.click(fil,col)
      setGameStatus(status)
    }

    setCountMoves(countMoves+1)
    console.log('click')
  };

  const handleCheck = () => {
    setCheck(!check)
  };

  const handleRestart = () => {
    setTablero(new MineGame(props.size))
    setGameStatus('continue')
  };

  
  return (
    <div className="game">
      {/* Game Status */}
      <StatusAndCount
        gameStatus={gameStatus}
        cantMines={tablero.cantMines}
      />
      {/* MineGame */}
      <div className={
        gameStatus === 'gameover'
        ? `game-board game-board-${props.size} game-board-over`
        : `game-board game-board-${props.size}`
      }>{
        tablero.board.map((Row, m) =>
          Row.map((box, n) => (
            <Cell
              box={box}
              position={[m, n]}
              click={handleClick}
              key={`${m}-${n}`}
            />
        )))
      }</div>
      {/* flags */}
      <GameOptions
        handleCheck={handleCheck}
        handleRestart={handleRestart}
        handleGotoHome={props.handleGotoHome}
        check={check}
      />
    </div>
  );
}

export default Game;
