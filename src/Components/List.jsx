import React from 'react';

export default class List extends React.Component {
  renderList(items) {
    return items.map((item) => <li id={item.id} key={item.id}>{item.name}</li>);
  }
  
  render() {
    const { data } = this.props;
    return (
      <ul>
        {this.renderList(data)}
        <li>Элемент без key</li>
        <li>Ещё один элемент без key</li>
      </ul>
    );
  }
}
