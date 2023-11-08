import React from 'react';

const UserContext = React.createContext({});

class GreetingComponent extends React.Component {
  static contextType = UserContext;
  
  render() {
    const { context } = this;
    const { name } = context;
    return `Hello, ${name}`;
  }
}

class App extends React.Component {
  render() {
    return <GreetingComponent />;
  }
}

export { App, UserContext };