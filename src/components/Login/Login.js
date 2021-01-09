import React, { useState, useRef } from 'react';
import './Login.css';
import logo from '../../logo.svg';

function Login() {
  const [input, setInput] = useState(false)
  const [error, setError] = useState(false)
  const textInput = useRef(null);

  function handleChange(e) {
    setInput(e.target.value ? true : false)
    console.log(e.target.value);
  }

  function submitNext(e) {
    console.log(e);
    console.log(textInput.current.value);
    if(!textInput.current.value) {
      textInput.current.focus()
      setError(true)
    } else {
      setError(false)
    }
  }

  return (
    <form className="App-login">
      <img src={logo} className="App-logo" alt="logo Google" width="75" />
      <h1>Fazer login</h1>
      <p>Use sua Conta do Google</p>
      <div className={ `App-login-control${input ? ' placeholder' : '' }${error ? ' error' : '' }`}>
        <input id="user" type="text" className="App-login-input" onChange={handleChange} ref={textInput}/>
        <label htmlFor="user" className="App-login-label">Email ou telefone</label>
        { error &&
          <div className="App-login-error">
            <svg aria-hidden="true" class="stUf5b qpSchb" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
            </svg>
            Digite um e-mail ou número de telefone
          </div>
        }
      </div>
      <a href="https://github.com/lucasferreiralimax">Esqueceu seu e-mail?</a>
      <p>Não está no seu computador? Use o modo visitante para fazer login com privacidade. <a href="https://github.com/lucasferreiralimax">Saiba mais</a></p>
      <button type="button" className="App-login-new btn">Criar conta</button>
      <button type="button" className="App-login-next btn primary" onClick={submitNext}>Próxima</button>
    </form>
  );
}

export default Login;
