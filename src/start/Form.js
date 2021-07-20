import React from 'react';

class SelectDificult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '1',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
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
          <option value="1" defaultValue>
            10x10
          </option>
          <option value="2">30x30</option>
          <option value="3">50x50</option>
        </select>
        <input type="submit" value="Play" />
      </form>
    );
  }
}

export default SelectDificult;
