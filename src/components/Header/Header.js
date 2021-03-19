import React from 'react';
import './Header.scss';
import logo from '../../assets/logo.svg';

function Header() {
  return (
    <header data-testid="app-header" className="App-header">
      <h1>Deus é Maior</h1>
      <img src={logo} className="App-logo" alt="logo Google" width="272" height="92" />
      <h2><a href="https://pt-br.reactjs.org" target="_blank" rel="noreferrer noopener">React</a></h2>
    </header>
  );
}

export default Header;
