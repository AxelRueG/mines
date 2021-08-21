import { Component } from 'react';

class SelectDificult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '10',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleForm(this.state.selected);
  };

  handleSelected = event => {
    this.setState({ selected: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <select onChange={this.handleSelected}>
          <option value="10" defaultValue>
            10x10
          </option>
          <option value="15">15x15</option>
          <option value="20">20x20</option>
        </select>
        <input type="submit" value="Play" />
      </form>
    );
  }
}

export default SelectDificult;
