import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: this.props.count };
  }

  handleClick = () => {
    this.setState((state) => ({ count: state.count + 1 }));
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        count: {this.state.count}
      </button>
    )
  }
}

Counter.defaultProps = {
  count: 0,
};