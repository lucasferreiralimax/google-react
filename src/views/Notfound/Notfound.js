import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import './Notfound.scss';

function Notfound() {
  useEffect(() => {
    document.body.classList.add('notfound');
    return () => {
      document.body.classList.remove('notfound');
    }
  })
  return (
    <section data-testid="app-notfound" className="App-notfound">
      <Link to="/">
        <span id="logo" aria-label="Google"></span>
      </Link>
      <p><b>404.</b> Esse é um erro.</p>
      <br/>
      <p>O URL <b className="highlight">{ window.location.pathname }</b> solicitado não foi encontrado. Isso é tudo que sabemos.</p>
    </section>
  );
}

export default Notfound;
