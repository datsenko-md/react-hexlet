import React from 'react';

export default class Component extends React.Component {
  render() {
    const htmlString = 'This <i>text</i> should be rendered <b>"as is"</b>';
    const divStyle = {
      color: 'blue',
      fontSize: '50px',
    };
    return (
      <>
        <ul>
          <li>{htmlString}</li>
          <li dangerouslySetInnerHTML={{ __html: htmlString }} />
        </ul>
        <div style={divStyle}>Hello, world!</div>
      </>
    );
  }
}