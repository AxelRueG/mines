class Board {
  constructor(cant) {
    this.cant = cant;
    this.percentage = 0.2;
    this.cantMines = 0;
    this.board = [];
    // Cells status
    // [return 0] hide
    // [return 1] view
    // [return 2] picked mine
    // [return 3] lose -> show mines
    this.boardStatus = [];
    this.settle();
    this.colonize();
  }

  // constructor auxiliar methods
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
          this.cantMines++;
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
  click(fil, col) {
    // interactions
    // [return 0] lose
    // [return 1] contunue
    // [return 2] win
    if (this.board[fil][col] === 9) {
      this.loseStatus();
      return 0;
    }
    if (this.boardStatus[fil][col] !== 0) return 1;

    this.propagation(fil, col);
    return this.checkWin();
  }

  propagation(fil, col) {
    if (this.boardStatus[fil][col] === 1) return;
    if (this.board[fil][col] !== 0) {
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

  picked(fil, col) {
    // if status is <view> you can't picket
    if (this.boardStatus[fil][col] === 1) return;

    // change state
    if (this.boardStatus[fil][col] === 0) {
      this.boardStatus[fil][col] = 2;
    } else {
      this.boardStatus[fil][col] = 0;
    }
  }

  checkWin() {
    let cellPick = 0,
      cellView = 0;

    for (let i = 0; i < this.cant; i++) {
      for (let j = 0; j < this.cant; j++) {
        if (this.boardStatus[i][j] === 2 && this.board[i][j] === 9) {
          cellPick++;
        }
        if (this.boardStatus[i][j] === 1) {
          cellView++;
        }
      }
    }
    let cant2 = this.cant * this.cant;
    if (cellPick === this.cantMines || cellView === cant2 - this.cantMines) {
      return 2;
    }
    return 1;
  }

  loseStatus() {
    for (let i = 0; i < this.cant; i++) {
      for (let j = 0; j < this.cant; j++) {
        if (this.board[i][j] === 9) this.boardStatus[i][j] = 4;
      }
    }
  }
}

export default Board;
