import { Component } from 'react';
import Board from './mine';
import Cell from './Cell';
import StatusAndCount from './StatusAndCount';
import './style.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.tablero = new Board(props.size);
    this.state = {
      gameStatus: 1,
      check: false,
    };
  }
  toggleClick = (fil, col) => {
    if (this.state.gameStatus === 1) {
      if (this.state.check) {
        this.handlePick(fil, col);
      } else {
        this.handleClick(fil, col);
      }
    }
  };

  handleClick = (fil, col) => {
    let status = this.tablero.click(fil, col);
    this.setState({ gameStatus: status });
  };

  handlePick = (fil, col) => {
    let status = this.tablero.picked(fil, col);
    this.setState({ gameStatus: status });
  };

  handleCheck = () => {
    this.setState(state => ({ check: !state.check }));
  };

  handleRestart = () => {
    console.log('new game');
  };

  render() {
    const filas = this.tablero.boardStatus.map((Fila, it1) =>
      Fila.map((nodo, it2) => (
        <Cell
          status={nodo}
          value={this.tablero.board[it1][it2]}
          position={[it1, it2]}
          click={this.toggleClick}
          key={`${it1}-${it2}`}
        />
      ))
    );
    return (
      <div className="game">
        {/* Game Status */}
        <StatusAndCount
          gameStatus={this.state.gameStatus}
          cantMines={this.tablero.cantMines}
        />
        {/* Board */}
        <div className="game-board">{filas}</div>
        {/* flags */}
        <label className="game-check">
          <input
            type="checkbox"
            onChange={this.handleCheck}
            checked={this.state.check}
          />{' '}
          Flag
        </label>
        <button onClick={this.handleRestart}>New Game</button>
        <button onClick={this.props.handleGotoHome}>Home</button>
      </div>
    );
  }
}

export default Game;
