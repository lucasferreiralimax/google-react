import React, { useState } from 'react';
import './Login.css';
import logo from '../../logo.svg';

function Login() {
  const [input, setInput] = useState(false)

  function handleChange(e) {
    setInput(e.target.value ? true : false)
    console.log(e.target.value);
  }

  return (
    <section className="App-login">
      <img src={logo} className="App-logo" alt="logo Google" width="75" />
      <h1>Fazer login</h1>
      <p>Use sua Conta do Google</p>
      <div className={ `App-login-control${input ? ' placeholder' : '' }`}>
        <input id="user" type="text" className="App-login-input" onChange={handleChange}/>
        <label htmlFor="user" className="App-login-label">Email ou telefone</label>
      </div>
      <a href="#">Esqueceu seu e-mail?</a>
      <p>Não está no seu computador? Use o modo visitante para fazer login com privacidade. <a href="#">Saiba mais</a></p>
      <button type="button" className="App-login-new btn">Criar conta</button>
      <button type="button" className="App-login-next btn primary">Próxima</button>
    </section>
  );
}

export default Login;
