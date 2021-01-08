import React from 'react';
import './Config.css';
import Darkmode from '../Darkmode/Darkmode';

function Config() {
  return (
    <form className="App-config">
      <h1>Configurações</h1>
      <Darkmode />
    </form>
  );
}

export default Config;
