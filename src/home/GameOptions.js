import { useNavigate } from 'react-router-dom'

const GameOptions = ({handleCheck, check, handleRestart}) => {
  const goHome = useNavigate()

  const handleGotoHome = () => {
    goHome('/home')
  }
  
  return (
    <div className="options-container">
      <label className="game-check">
        <input
          type="checkbox"
          onChange={handleCheck}
          checked={check}
        />{' '}
        Flag
      </label>
      <button className="game-button" onClick={handleRestart}>
        New Game
      </button>
      <button className="game-button" onClick={handleGotoHome}>
        Home
      </button>
    </div>
  );
};

export default GameOptions;
