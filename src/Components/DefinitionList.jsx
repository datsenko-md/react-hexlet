/* eslint-disable react/prefer-stateless-function */

import React from 'react';

// BEGIN (write your solution here)
export default class DefinitionList extends React.Component {
  render() {
    const { data } = this.props;

    if (data.length === 0) {
      return null;
    }

    const renderTerm = (item) => (
      <React.Fragment key={item.id}>
        <dt>{item.dt}</dt>
        <dd>{item.dd}</dd>
      </React.Fragment>
    );

    return (
      <dl>
        {data.map(renderTerm)}
      </dl>
    );
  }
}
// END
