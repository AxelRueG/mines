import './style.css';

const StatusAndCount = props => {
  // la descripcion es condicional al estado del juego
  const descripcion =
    props.gameStatus !== 1 ? (
      props.gameStatus === 0 ? (
        <h2 className="game-status">Game Over</h2>
      ) : (
        <h2 className="game-status">You Win</h2>
      )
    ) : (
      <h3 className="game-status">{`total mines: ${props.cantMines}`}</h3>
    );

  return descripcion;
};

export default StatusAndCount;
