import React from 'react';

export default class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  handleTextInput = () => {
    console.log(this.textInput);
    this.textInput.current.focus();
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <input type="button" value="Focus the text input" onClick={this.handleTextInput} />
      </div>
    );
  }
}