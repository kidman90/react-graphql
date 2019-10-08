import React from 'react';
import ApolloClient from 'apollo-boost';
import logo from './logo.svg';
import './App.css';

const client = new ApolloClient({
  uri: 'https://vm8mjvrnv3.lp.gql.zone/graphql'
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
