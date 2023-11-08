import React from 'react';
import Section from './Section.jsx';

export default class Article extends React.Component {
  render() {
    return (
      <article>
        <h1>Заголовок статьи</h1>
        <Section {...this.props}/>
      </article>
    )
  }
}
