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
    let status = this.tablero.picked(fil, col);
    this.setState({ gameStatus: status });
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
        {this.state.gameStatus !== 1 ? (
          this.state.gameStatus === 0 ? (
            <h2 className="game-status">Game Over</h2>
          ) : (
            <h2 className="game-status">You Win</h2>
          )
        ) : (
          <h3 className="game-status">{`total mines: ${this.tablero.cantMines}`}</h3>
        )}
        <div className="game-board">{filas}</div>
        <label className="game-check">
          <input
            type="checkbox"
            onChange={this.handleCheck}
            checked={this.state.check}
          />{' '}
          Flag
        </label>
      </div>
    );
  }
}

export default Game;
