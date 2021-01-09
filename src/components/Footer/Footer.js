import React from 'react';
import './Footer.css';
import Darkmode from '../Darkmode/Darkmode';

function Footer() {
  return (
    <footer className="App-footer">
      <Darkmode type="footer" />
      <a href="https://github.com/lucasferreiralimax"><strong>Github<br/>@lucasferreiralimax</strong></a>
    </footer>
  );
}

export default Footer;
