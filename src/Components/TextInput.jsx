import React from 'react';

export default class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: props.text };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`A name was submitted: ${this.state.text}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          value={this.state.text}
        />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}