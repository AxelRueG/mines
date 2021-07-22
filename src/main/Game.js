import React from 'react';

class Board {
  constructor(cant) {
    this.cant = cant;
    this.percentage = 0.3;
    this.board = [];
    this.boardStatus = [];
    this.settle();
    this.colonize();
  }

  // constructor method
  settle() {
    for (let i = 0; i < this.cant; i++) {
      let vec = [];
      let vec2 = [];
      for (let j = 0; j < this.cant; j++) {
        vec.push(0);
        vec2.push(0);
      }
      this.board.push(vec);
      this.boardStatus.push(vec2);
    }
  }

  colonize() {
    for (let i = 0; i < this.cant; i++) {
      for (let j = 0; j < this.cant; j++) {
        if (Math.random() < this.percentage) {
          this.board[i][j] = 9;
          this.neighbours(i, j, this.addMineNeighbour);
        }
      }
    }
  }

  neighbours(x, y) {
    // through the positions
    let i = x - 1 < 0 ? 0 : x - 1;
    let j = y - 1 < 0 ? 0 : y - 1;
    let tox = x + 2 > this.cant ? this.cant : x + 2;
    let toy = y + 2 > this.cant ? this.cant : y + 2;
    for (let fromx = i; fromx < tox; fromx++) {
      for (let fromy = j; fromy < toy; fromy++) {
        if (this.board[fromx][fromy] < 9) this.board[fromx][fromy] += 1;
      }
    }
  }
  // interactions
  click(fil, col) {
    if (this.board[fil][col] == 9) return false;
    if (this.boardStatus[fil][col] == 1) return true;

    this.propagation(fil, col);
    return true;
  }

  propagation(fil, col) {
    if (this.boardStatus[fil][col] == 1) return;
    if (this.board[fil][col] != 0) {
      this.boardStatus[fil][col] = 1;
    } else {
      this.boardStatus[fil][col] = 1;

      let i = fil - 1 < 0 ? 0 : fil - 1;
      let j = col - 1 < 0 ? 0 : col - 1;
      let tox = fil + 2 > this.cant ? this.cant : fil + 2;
      let toy = col + 2 > this.cant ? this.cant : col + 2;

      for (let fromx = i; fromx < tox; fromx++) {
        for (let fromy = j; fromy < toy; fromy++) {
          this.propagation(fromx, fromy);
        }
      }
    }
  }

  // auxiliar
  plotMatrix() {
    for (let i = 0; i < this.cant; i++) {
      console.log(this.boardStatus[i]);
    }
    console.log('minas');
    for (let i = 0; i < this.cant; i++) {
      console.log(this.board[i]);
    }
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tablero: [],
    };
  }

  render() {
    return <div></div>;
  }
}

export default Game;
