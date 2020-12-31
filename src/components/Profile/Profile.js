import React, { useState } from 'react';
import './Profile.css';
import foto from '../../sinatra.jpg';

function Profile() {
  const [show, setShow] = useState(false)
  const profile = () => setShow(!show)

  return (
    <section className="App-profile">
      <h1 onClick={profile}>
        2L
        <img src={foto} className="App-profile-foto" alt="Foto" width="40" />
      </h1>
      <div className={ `App-profile__content${show ? ' show' : '' }`}>
        <a href="http://lucasferreiralimax-dev.web.app" target="_blank">
          <img src={foto} className="App-profile-foto big" alt="Foto" />
        </a>
        <h1>Lucas Lima</h1>
        <h2>lucasferreiralimax@gmail.com</h2>
        <button type="button">Gerenciar sua Conta do Google</button>
        <div className="divider">
          <a href="http://lucasferreiralimax-dev.web.app" target="_blank">Política de Privacidade</a>
          <div className="bullet">•</div>
          <a href="http://lucasferreiralimax-dev.web.app" target="_blank">Termos de Serviço</a>
        </div>
      </div>
    </section>
  );
}

export default Profile;
