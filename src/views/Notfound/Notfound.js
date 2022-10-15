import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import './Notfound.scss';

import { useTranslation } from 'react-i18next';

function Notfound() {
  const { t } = useTranslation();

  useEffect(() => {
    document.body.classList.add('notfound');
    return () => {
      document.body.classList.remove('notfound');
    }
  })
  return (
    <section data-testid="app-notfound" className="App-notfound">
      <Link to="/">
        <span className="logo" aria-label="Google"></span>
      </Link>
      <p><b>404.</b> {t('notfound.text1')}</p>
      <br/>
      <p>{t('notfound.text2')} <b className="highlight">{ window.location.pathname }</b> {t('notfound.text3')}</p>
    </section>
  );
}

export default Notfound;
