const GameOptions = props => {
  return (
    <div className="options-container">
      <label className="game-check">
        <input
          type="checkbox"
          onChange={props.handleCheck}
          checked={props.check}
        />{' '}
        Flag
      </label>
      <button className="game-button" onClick={props.handleRestart}>
        New Game
      </button>
      <button className="game-button" onClick={props.handleGotoHome}>
        Home
      </button>
    </div>
  );
};

export default GameOptions;
