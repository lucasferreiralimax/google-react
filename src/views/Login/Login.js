import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './Login.scss';
import logo from '../../assets/logo.svg';

function Login() {
  const { t } = useTranslation();
  const [input, setInput] = useState('lucasferreiralimax@gmail.com')
  const [error, setError] = useState(false)
  const textInput = useRef(null);

  const handleChange = (e) => {
    setInput(e.target.value)
    setError(e.target.value ? false : true)
  }

  const submitNext = () => {
    if(!textInput.current.value) {
      textInput.current.focus()
      setError(true)
    } else {
      setError(false)
    }
  }

  return (
    <form data-testid="app-login" className="App-login">
      <img
        className="App-logo"
        alt="logo Google"
        src={logo}
        width="75"
      />
      <h1>{t('login.title')}</h1>
      <p>{t('login.description')}</p>
      <div className={ `App-login-control${input ? ' placeholder' : '' }${error ? ' error' : '' }`}>
        <input
          id="user"
          className="App-login-input"
          onChange={handleChange} ref={textInput}
          value={input}
          type="text"
        />
        <label
          htmlFor="user"
          className="App-login-label"
        >
          {t('login.form_email.label')}
        </label>
        { error && (
          <div className="App-login-error">
            <svg aria-hidden="true" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
            </svg>
            {t('login.form_email.error')}
          </div>
        )}
      </div>
      <a
        href="https://github.com/lucasferreiralimax"
        target="_blank"
        rel="noreferrer noopener">
          {t('login.remember')}
      </a>
      <p>{t('login.text')} <a href="https://github.com/lucasferreiralimax" target="_blank" rel="noreferrer noreferrer noopener">{t('login.text_more')}</a></p>
      <button type="button" className="App-login-new btn">{t('login.new')}</button>
      <button type="button" className="App-login-next btn primary" onClick={submitNext}>{t('login.next')}</button>
    </form>
  );
}

export default Login;
