import React from 'react';
import './Config.css';

function Config() {
  return (
    <form className="App-config">
      <h1>Configurações</h1>
      <label for="color-1">Cor 1
        <input id="color-1" type="color" value="#ffffff"/>
      </label>
      <label for="color-2">Cor 2
        <input id="color-2" type="color" value="#ffffff"/>
      </label>
      <label for="color-3">Cor 3
        <input id="color-3" type="color" value="#ffffff"/>
      </label>
      <label for="color-4">Cor 4
        <input id="color-4" type="color" value="#ffffff"/>
      </label>
      <label for="color-5">Cor 5
        <input id="color-5" type="color" value="#ffffff"/>
      </label>
    </form>
  );
}

export default Config;
