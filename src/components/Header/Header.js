import React from 'react';
import './Header.scss';
import logo from '../../assets/logo.svg';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();

  return (
    <header data-testid="app-header" className="App-header">
      <h1>{t('text.GodIsBig')}</h1>
      <img src={logo} className="App-logo" alt="logo Google" width="272" height="92" />
      <h2><a href="https://pt-br.reactjs.org" target="_blank" rel="noreferrer noopener">React</a></h2>
    </header>
  );
}

export default Header;
