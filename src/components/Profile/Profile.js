import   React, { useState, useRef, useEffect } from 'react';
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
      <p onClick={profile}>
        <span>@lucasferreiralimax</span>
        <img src={foto_40} className="App-profile-foto" alt="Foto Frank Sinatra" width="40" height="40" />
      </p>
      <div className={ `App-profile__content${show ? ' show' : '' }`}>
        <button class="btn-close" aria-label="Close menu" onClick={() => setShow(false)}>
          <svg width="22" height="22" viewBox="1 1 22 22" focusable="false" fill="var(--main-color)">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
          </svg>
        </button>
        <p class="email">lucasferreiralimax@gmail.com</p>
        <a href="https://github.com/lucasferreiralimax" target="_blank" rel="noreferrer noopener">
          <img src={foto_150} className="App-profile-foto big" alt="Foto Frank Sinatra" width="150" height="150" />
        </a>
        <p class="title">Lucas Lima</p>
        <button class="btn" type="button">{t('profile_component.config')}</button>
        <div className="divider">
          <a class="link" href="https://github.com/lucasferreiralimax" target="_blank" rel="noreferrer noopener">{t('profile_component.politics')}</a>
          <div className="bullet">•</div>
          <a class="link" href="https://github.com/lucasferreiralimax" target="_blank" rel="noreferrer noopener">{t('profile_component.terms')}</a>
        </div>
      </div>
    </section>
  );
}

export default Profile;
