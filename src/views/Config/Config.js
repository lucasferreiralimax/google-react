import React from 'react';
import { connect } from 'react-redux';

import Darkmode from '../../components/Darkmode/Darkmode';
import Profile from '../../components/Profile/Profile';
import { useTranslation } from 'react-i18next';

import './Config.scss';

function Config({ store, dispatch }) {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Profile />
      <form data-testid="app-config" className="App-config">
        <h1>{t('text.config')}</h1>
        <Darkmode />
        <select
          className="App-language"
          name="language"
          value={store.lang}
          onChange={e => dispatch({type: 'SET_LANG', payload: e.target.value})}
        >
          <option value="pt">{t('languages.pt')}</option>
          <option value="en">{t('languages.en')}</option>
        </select>
        <a
          href="https://github.com/lucasferreiralimax/google-react"
          target="_blank"
          rel="noreferrer noopener"
        >
          {t('text.github')}
        </a>
      </form>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return { store: state }
}

export default connect(mapStateToProps)(Config);
