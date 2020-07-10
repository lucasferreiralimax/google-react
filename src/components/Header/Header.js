import React from 'react';
import './Header.css';
import logo from '../../logo.svg';

function Header() {
  return (
    <header className="App-header">
      <h1>Deus é Maior</h1>
      <img src={logo} className="App-logo" alt="logo Google" width="272" />
    </header>
  );
}

export default Header;
