import React from 'react';
import './Config.scss';
import Darkmode from '../Darkmode/Darkmode';

function Config() {
  return (
    <form data-testid="app-config" className="App-config">
      <h1>Configurações</h1>
      <Darkmode />
      <br/>
      <a href="https://github.com/lucasferreiralimax/google-react" target="_blank">Estude o código fonte desse projeto no Github acesse aqui.</a>
    </form>
  );
}

export default Config;
