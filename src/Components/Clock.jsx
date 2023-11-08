import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  handleClick = () => {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <p>
          It is {this.state.date.toLocaleString()}.
        </p>
        <button
          type="button"
          onClick={this.handleClick}
        >
          Refresh
        </button>
      </div>
    );
  }
}