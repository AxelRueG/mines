import './App.css';
// import Start from './start/Start';
import Game from './main/Game';

function App() {
  return (
    <div className="App">
      {/* <Start /> */}
      <Game size={10} />
    </div>
  );
}

export default App;
