import React from 'react';

import Darkmode from '../../components/Darkmode/Darkmode';
import Profile from '../../components/Profile/Profile';

import './Config.scss';

function Config() {
  return (
    <React.Fragment>
      <Profile />
      <form data-testid="app-config" className="App-config">
        <h1>Configurações</h1>
        <Darkmode />
        <a
          href="https://github.com/lucasferreiralimax/google-react"
          target="_blank"
          rel="noreferrer noopener"
        >
          Estude o código fonte desse projeto no Github acesse aqui.
        </a>
      </form>
    </React.Fragment>
  );
}

export default Config;
