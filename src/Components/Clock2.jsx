import React from 'react';

export default class Clock2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.setState({ date: new Date() }));
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { date } = this.state;
    return (
      <div>{date.toLocaleTimeString()}</div>
    );
  }
}