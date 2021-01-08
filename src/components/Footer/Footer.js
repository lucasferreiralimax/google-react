import React from 'react';
import './Footer.css';
import Darkmode from '../Darkmode/Darkmode';

function Footer() {
  return (
    <footer className="App-footer">
      <Darkmode type="footer" />
      <a href="http://lucasferreiralimax-dev.web.app"><strong>Brasil - @lucasferreiralimax</strong></a>
    </footer>
  );
}

export default Footer;
