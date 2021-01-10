import React from 'react';
import './Config.css';
import Darkmode from '../Darkmode/Darkmode';

function Config() {
  return (
    <form className="App-config">
      <h1>Configurações</h1>
      <Darkmode />
      <br/>
      <a href="https://github.com/lucasferreiralimax/google-react" target="_blank">Estude o código fonte desse projeto no Github acesse aqui.</a>
    </form>
  );
}

export default Config;
