import { useState } from 'react';
import './App.css';
import Title from './start/Title';
// import Start from './start/Start';
import Game from './home/Game';

const App = () => {
  
  const [sizeBoard, setSizeBoard] = useState(10)
  
  const handleSize = (e) => {
    const size = e.target.value
    console.log(size)
    setSizeBoard(size)
  }

  const handleGotoHome = () => {
    console.log('HOME')
  }
  
  return (
    <div className="App">
      <Title />
      <Game
        size={sizeBoard}
        handleGotoHome={handleGotoHome}
        handleSize={handleSize}
      />
      {/* {this.state.layout ? (
      ) : (
        <Start handleSelection={this.handleSelection} />
      )} */}
    </div>
  );
}

export default App;
