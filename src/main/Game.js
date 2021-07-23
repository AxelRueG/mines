import React from 'react';
import Board from './mine';
import './style.css';

const Cell = props => {
  return (
    <div
      className="cellStyle"
      style={
        props.status
          ? { backgroundColor: '#b1b1b1' }
          : { backgroundColor: 'gray' }
      }
      onClick={() => {
        console.log(props.position[0], props.position[1]);
        props.update(props.position[0], props.position[1]);
      }}
    >
      {props.status ? props.value : ''}
    </div>
  );
};

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.tablero = new Board(props.size);
    this.state = {
      gameStatus: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(fil, col) {
    // this.setState({ gameStatus: this.tablero.click(fil, col) });
    let status = this.tablero.click(fil, col);
    this.setState({ gameStatus: status });
  }

  render() {
    const filas = this.tablero.boardStatus.map((Fila, it1) =>
      Fila.map((nodo, it2) => (
        <Cell
          status={nodo}
          value={this.tablero.board[it1][it2]}
          position={[it1, it2]}
          update={this.handleClick}
          key={`${it1}-${it2}`}
        />
      ))
    );
    // this.tablero.plotMatrix();
    return (
      <div className="boardStyle">
        {this.state.gameStatus ? filas : 'Game Over'}
      </div>
    );
  }
}

export default Game;
