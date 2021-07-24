import { Component } from 'react';
import Board from './mine';
import Cell from './Cell';
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
    this.tablero.picked(fil, col);
    this.setState({ gameStatus: 1 });
  };
  handleCheck = () => {
    this.setState(state => ({ check: !state.check }));
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
        <div className="game-board">{filas}</div>
        {this.state.gameStatus !== 1
          ? this.state.gameStatus === 0
            ? 'Game Over'
            : 'You Win'
          : `mines ${this.tablero.cantMines}`}
        <input
          type="checkbox"
          onChange={this.handleCheck}
          checked={this.state.check}
        />
      </div>
    );
  }
}

export default Game;
