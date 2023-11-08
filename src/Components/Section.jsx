import React from 'react';

export default class Section extends React.Component {
  render() {
    const { header, body } = this.props;
    return (
      <React.Fragment>
        <h2>{header}</h2>
        <div>{body}</div>
      </React.Fragment>
    );
  }
}
