import React from 'react';
// import cn from 'classnames';

export default class Alert extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="alert alert-primary">
        {children}
      </div>
    );
  }
}