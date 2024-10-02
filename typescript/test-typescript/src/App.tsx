import React from 'react';
import logo from './logo.svg';
import './App.css';
import CatDescription from './catdescription';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header name='Aciser'></Header>
      </header>
      <CatDescription likeBy={1}></CatDescription>
    </div>
  );
}

export default App;
