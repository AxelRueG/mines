import { Component } from 'react';
import Board from './mine';
import Cell from './Cell';
import StatusAndCount from './StatusAndCount';
import GameOptions from './GameOptions';
import './style.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tablero: new Board(props.size),
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
    let status = this.state.tablero.click(fil, col);
    this.setState({ gameStatus: status });
  };

  handlePick = (fil, col) => {
    let status = this.state.tablero.picked(fil, col);
    this.setState({ gameStatus: status });
  };

  handleCheck = () => {
    this.setState(state => ({ check: !state.check }));
  };

  handleRestart = () => {
    this.setState({ tablero: new Board(this.props.size), gameStatus: 1 });
  };

  render() {
    const filas = this.state.tablero.boardStatus.map((Fila, it1) =>
      Fila.map((nodo, it2) => (
        <Cell
          status={nodo}
          value={this.state.tablero.board[it1][it2]}
          position={[it1, it2]}
          click={this.toggleClick}
          key={`${it1}-${it2}`}
        />
      ))
    );

    let classNameBoard =
      this.state.gameStatus === 0
        ? `game-board game-board-${this.props.size} game-board-over`
        : `game-board game-board-${this.props.size}`;

    return (
      <div className="game">
        {/* Game Status */}
        <StatusAndCount
          gameStatus={this.state.gameStatus}
          cantMines={this.state.tablero.cantMines}
        />
        {/* Board */}
        <div className={classNameBoard}>{filas}</div>
        {/* flags */}
        <GameOptions
          handleCheck={this.handleCheck}
          handleRestart={this.handleRestart}
          handleGotoHome={this.props.handleGotoHome}
          check={this.state.check}
        />
      </div>
    );
  }
}

export default Game;
