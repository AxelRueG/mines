class MinesGame {
  constructor(m) {
    this.m = m;
    // board data
    this.total = m*m;
    this.cantMines = 0;
    // status game data
    this.cantShowed = 0;
    this.discoveredMines = 0;
    // board
    this.board = [];
    this.fill();
    this.populate();
  }

  // fill the board
  fill() {
    for (let i = 0; i < this.m; i++) {
      let vec = [];
      for (let j = 0; j < this.m; j++)
        vec.push({ val: 0, status: 'hidden' });
      this.board.push(vec);
    }
  }

  // create mines and calcule boxes values
  populate() {
    for (let i = 0; i < this.m; i++) {
      for (let j = 0; j < this.m; j++) {
        // probability to was a mine
        if (Math.random() < 0.2) {
          this.board[i][j].val = -1;
          this.cantMines++;
          this.neighbours(i, j, this.addMineNeighbour);
        } // if
      } // for
    } // for
  }

  // add in one the value of boxes neighbours of a mine
  neighbours(x, y) {
    // border check
    let i1 = x-1 < 0 ? 0 : x - 1;
    let j1 = y-1 < 0 ? 0 : y - 1;
    let i2 = x+1 === this.m ? this.m : x + 2;
    let j2 = y+1 === this.m ? this.m : y + 2;
    // mines neighbours
    for (let m = i1; m < i2; m++)
      for (let n = j1; n < j2; n++)
        if (this.board[m][n].val >= 0) this.board[m][n].val++;
  }
      
  click(m, n) {
    // if the box is show, do nothing
    if (this.board[m][n].status === 'flag') return 'continue'
    if (this.board[m][n].status === 'show') return 'continue'
    // if the box is a mine, game over
    if (this.board[m][n].val === -1){
      // show mines
      for (let i = 0; i < this.m; i++)
        for (let j = 0; j < this.m; j++)
          if (this.board[m][n].val === -1) this.board[m][n].status = 'show';

      return 'gameover';
    }
    // propagate to others boxes
    this.propagation(m, n);
    return this.checkWin();
  }

  propagation(m, n) {
    // if already showed or with flag
    if (this.board[m][n].status === 'show' ||
      this.board[m][n].status === 'flag') {
        return;
      }

    // is the box neighbour of a mine
    if (this.board[m][n].val >= 0) {
      this.board[m][n].status = 'show';
      this.cantShowed++;
    }

    // if its not a neighbour of a mine 
    if (this.board[m][n].val === 0) {      
      let i1 = m-1 < 0 ? 0 : m - 1;
      let j1 = n-1 < 0 ? 0 : n - 1;
      let i2 = m+1 === this.m ? this.m : m + 2;
      let j2 = n+1 === this.m ? this.m : n + 2;

      for (let i = i1; i < i2; i++) {
        for (let j = j1; j < j2; j++) {
          this.propagation(i, j);
        } // endfor
      } // endfor
    } // endif

  } // endfunction

  redflag(m, n) {
    if (this.board[m][n].status === 'show') return;

    // game data update
    if (this.board[m][n].status === 'flag'){
      this.board[m][n].status = 'hidden'
      if (this.board[m][n].val === -1) this.discoveredMines--
    } else {
      this.board[m][n].status = 'flag'
      if (this.board[m][n].val === -1) this.discoveredMines++
    }

    return this.checkWin();
  }

  checkWin() {
    if (this.total-this.cantShowed === this.cantMines) return 'win'
    if (this.cantMines-this.discoveredMines === 0) return 'win'
    return 'continue'
  }
}

export default MinesGame;
