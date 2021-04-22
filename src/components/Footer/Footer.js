import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import './Footer.scss';
import Darkmode from '../Darkmode/Darkmode';
import { useTranslation } from 'react-i18next';

function Footer({ store }) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(store.lang);
    localStorage.setItem("lang", store.lang);
  }, [i18n, store.lang]);

  return (
    <footer data-testid="app-footer" className="App-footer">
      <div>
        <h2 className="brasil">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" widht="25px" height="25px">
            <circle cx="256" cy="256" r="256" fill="#6da544"/>
            <path fill="#ffda44" d="M256 100.174L467.478 256 256 411.826 44.522 256z"/>
            <circle cx="256" cy="256" r="89.043" fill="#f0f0f0"/>
            <g fill="#0052b4">
              <path d="M211.478 250.435c-15.484 0-30.427 2.355-44.493 6.725.623 48.64 40.227 87.884 89.015 87.884 30.168 0 56.812-15.017 72.919-37.968-27.557-34.497-69.958-56.641-117.441-56.641zM343.393 273.06a89.45 89.45 0 001.651-17.06c0-49.178-39.866-89.043-89.043-89.043-36.694 0-68.194 22.201-81.826 53.899a183.693 183.693 0 0137.305-3.812c51.717-.001 98.503 21.497 131.913 56.016z"/>
            </g>
          </svg>
          Brasil
        </h2>
        <Darkmode type="footer" />
      </div>
      <hr className="divider" />
      <div>
        <a href="https://github.com/lucasferreiralimax" target="_blank" rel="noreferrer noopener"><strong>@lucasferreiralimax</strong></a>
        <Link to="/config">{t('text.config')}</Link>
      </div>
    </footer>
  );
}

function mapStateToProps(state) {
  return { store: state }
}

export default connect(mapStateToProps)(Footer);
