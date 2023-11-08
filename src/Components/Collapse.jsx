// @ts-check
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/static-property-placement */

import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
export default class Collapse extends React.Component {
  constructor(props) {
    super(props);
    const { opened } = this.props;
    this.state = { uiState: { opened } };
  }

  toggleText = () => {
    const { uiState: { opened } } = this.state;
    this.setState({ uiState: { opened: !opened } });
  };

  render() {
    const { text } = this.props;
    const { uiState: { opened } } = this.state;

    return (
      <div>
        <p>
          <a className="btn btn-primary" data-bs-toggle="collapse" onClick={this.toggleText} href="#" role="button" aria-expanded={opened}>Link with href</a>
        </p>
        <div className={cn('collapse', { show: opened })}>
          <div className="card card-body">
            {text}
          </div>
        </div>
      </div>
    );
  }
}

Collapse.defaultProps = {
  opened: true,
};
// END
