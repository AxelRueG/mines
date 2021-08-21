import { Component } from 'react';
import './App.css';
import Title from './start/Title';
import Start from './start/Start';
import Game from './main/Game';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: 0,
      sizeBoard: null,
    };
  }

  handleSelection = value => {
    this.setState({ sizeBoard: value, layout: 1 });
  };

  handleGotoHome = () => {
    this.setState({ layout: 0 });
  };

  render() {
    return (
      <div className="App">
        <Title />
        {this.state.layout ? (
          <Game
            size={this.state.sizeBoard}
            handleGotoHome={this.handleGotoHome}
          />
        ) : (
          <Start handleSelection={this.handleSelection} />
        )}
      </div>
    );
  }
}

export default App;
