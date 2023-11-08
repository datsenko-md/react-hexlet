import React from 'react';

const Title = (props) => <div className="card-title">{props.children}</div>
const Body = (props) => <div className="card-body">{props.children}</div>

export default class Card extends React.Component {
  static Title = Title;
  static Body = Body;
  
  render() {
    return <div className="card card-block">{this.props.children}</div>;
  }
}