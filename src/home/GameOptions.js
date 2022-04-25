const GameOptions = ({handleCheck, check, handleRestart, handleGotoHome}) => {
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
