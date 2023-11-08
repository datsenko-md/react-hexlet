import React from 'react';

const CompanyContext = React.createContext({});

class CompanyAddressComponent extends React.Component {
  static contextType = CompanyContext;

  render() {
    const { context } = this;
    const { address } = context;

    return (
      <>
        {address.street}
        <br />
        {address.post} {address.city} {address.country}
      </>
    );
  }
}

class CompanyNameComponent extends React.Component {
  static contextType = CompanyContext;

  render() {
    const { context } = this;
    const { name } = context;

    return <>{name}</>;
  }
}

class App2 extends React.Component {
  render() {
    return (
      <>
        <CompanyNameComponent />
        <br />
        <CompanyAddressComponent />
      </>
    );
  }
}

export { App2, CompanyContext };
