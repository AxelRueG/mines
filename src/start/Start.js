import React from 'react';
import Title from './Title';
import SelectDificult from './Form';

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dificult: null,
    };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection = value => {
    this.setState({ dificult: value });
  };

  render() {
    return (
      <div>
        <Title />
        <SelectDificult handleForm={this.handleSelection} />
      </div>
    );
  }
}

export default Start;
