import './style.css';

const StatusAndCount = ({gameStatus, cantMines}) => {
  // la descripcion es condicional al estado del juego
  return (
    gameStatus === 'continue' ? (
      <h3 className="game-status">{`total mines: ${cantMines}`}</h3>
      ) : (
      gameStatus === 'gameover' ? (
        <h2 className="game-status">Game Over</h2>
      ) : (
        <h2 className="game-status">You Win</h2>
      )
    )
  )
};

export default StatusAndCount;
