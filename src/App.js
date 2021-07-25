import './App.css';
// import Start from './start/Start';
import Title from './start/Title';
import Game from './main/Game';

function App() {
  return (
    <div className="App">
      <Title />
      {/* <Start /> */}
      <Game size={10} />
    </div>
  );
}

export default App;
