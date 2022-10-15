import React, { useState, useRef, useEffect } from 'react';
import './Profile.scss';
import foto_40 from '../../assets/sinatra-40x40.jpg';
import foto_150 from '../../assets/sinatra-150x150.jpg';

import { useTranslation } from 'react-i18next';

function Profile() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false)
  const profile = () => setShow(!show)
  const wrapperRef = useRef(null)

  const handleClickOutside = (event) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target)
    ) {
      setShow(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    };
  });

  return (
    <section data-testid="app-profile" className="App-profile" ref={wrapperRef}>
      <h1 onClick={profile}>
        2L <img src={foto_40} className="App-profile-foto" alt="Foto Frank Sinatra" width="40" height="40" />
      </h1>
      <div className={ `App-profile__content${show ? ' show' : '' }`}>
        <a href="https://github.com/lucasferreiralimax" target="_blank" rel="noreferrer noopener">
          <img src={foto_150} className="App-profile-foto big" alt="Foto Frank Sinatra" width="150" height="150" />
        </a>
        <h1>Lucas Lima</h1>
        <h2>lucasferreiralimax@gmail.com</h2>
        <button type="button">{t('profile_component.config')}</button>
        <div className="divider">
          <a href="https://github.com/lucasferreiralimax" target="_blank" rel="noreferrer noopener">{t('profile_component.politics')}</a>
          <div className="bullet">•</div>
          <a href="https://github.com/lucasferreiralimax" target="_blank" rel="noreferrer noopener">{t('profile_component.terms')}</a>
        </div>
      </div>
    </section>
  );
}

export default Profile;
