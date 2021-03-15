import React, { useState, useRef, useEffect } from 'react';
import './Profile.scss';
import foto from '../../assets/sinatra.jpg';

function Profile() {
  const [show, setShow] = useState(false)
  const profile = () => setShow(!show)
  const wrapperRef = useRef(null)

  useEffect(() => {
    /**
     * Clicked on outside of element
     */
    function handleClickOutside(event) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          setShow(false)
        }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside)
    };
  });

  return (
    <section data-testid="app-profile" className="App-profile" ref={wrapperRef}>
      <h1 onClick={profile}>
        2L
        <img src={foto} className="App-profile-foto" alt="Foto Frank Sinatra" width="40" />
      </h1>
      <div className={ `App-profile__content${show ? ' show' : '' }`}>
        <a href="https://github.com/lucasferreiralimax" target="_blank" rel="noreferrer noopener">
          <img src={foto} className="App-profile-foto big" alt="Foto Frank Sinatra" />
        </a>
        <h1>Lucas Lima</h1>
        <h2>lucasferreiralimax@gmail.com</h2>
        <button type="button">Gerenciar sua Conta do Google</button>
        <div className="divider">
          <a href="https://github.com/lucasferreiralimax" target="_blank" rel="noreferrer noopener">Política de Privacidade</a>
          <div className="bullet">•</div>
          <a href="https://github.com/lucasferreiralimax" target="_blank" rel="noreferrer noopener">Termos de Serviço</a>
        </div>
      </div>
    </section>
  );
}

export default Profile;
