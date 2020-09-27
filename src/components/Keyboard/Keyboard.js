import React from 'react';
import { connect } from 'react-redux';
import './Keyboard.css';

function Keyboard({ store, dispatch }) {
  return (
    <section className={ `App-keyboard${store.keyboard ? ' active' : '' }`}>
      <h1>português brasileiro</h1>
      <button className="exit" type="button" onClick={() => dispatch({type: 'TOGGLE_KEYBOARD'})}><i className="icon icon-exit">X</i></button>
      <div className="App-keyboard-content">
        <div className="row">
          <button className="key" type="button">'</button>
          <button className="key" type="button">1</button>
          <button className="key" type="button">2</button>
          <button className="key" type="button">3</button>
          <button className="key" type="button">4</button>
          <button className="key" type="button">5</button>
          <button className="key" type="button">6</button>
          <button className="key" type="button">7</button>
          <button className="key" type="button">8</button>
          <button className="key" type="button">9</button>
          <button className="key" type="button">0</button>
          <button className="key" type="button">-</button>
          <button className="key" type="button">=</button>
          <button className="key" type="button" style={{width: '62px'}}><i className="icon icon-backspace">backspace</i></button>
        </div>
        <div className="row" style={{paddingLeft: '50px'}}>
          <button className="key" type="button">q</button>
          <button className="key" type="button">w</button>
          <button className="key" type="button">e</button>
          <button className="key" type="button">r</button>
          <button className="key" type="button">t</button>
          <button className="key" type="button">y</button>
          <button className="key" type="button">u</button>
          <button className="key" type="button">i</button>
          <button className="key" type="button">o</button>
          <button className="key" type="button">p</button>
          <button className="key" type="button">´</button>
          <button className="key" type="button">[</button>
        </div>
        <div className="row">
          <button className="key" type="button" style={{width: '53.75px'}}><i className="icon icon-capslock">capslock</i></button>
          <button className="key" type="button">a</button>
          <button className="key" type="button">s</button>
          <button className="key" type="button">d</button>
          <button className="key" type="button">f</button>
          <button className="key" type="button">g</button>
          <button className="key" type="button">h</button>
          <button className="key" type="button">j</button>
          <button className="key" type="button">k</button>
          <button className="key" type="button">l</button>
          <button className="key" type="button">ç</button>
          <button className="key" type="button">~</button>
          <button className="key" type="button">]</button>
        </div>
        <div className="row">
          <button className="key" type="button" style={{width: '37.25px'}}><i className="icon icon-shitf">shitf 1</i></button>
          <button className="key" type="button">\</button>
          <button className="key" type="button">z</button>
          <button className="key" type="button">x</button>
          <button className="key" type="button">c</button>
          <button className="key" type="button">v</button>
          <button className="key" type="button">b</button>
          <button className="key" type="button">n</button>
          <button className="key" type="button">m</button>
          <button className="key" type="button">,</button>
          <button className="key" type="button">.</button>
          <button className="key" type="button">;</button>
          <button className="key" type="button" style={{width: '86.75px'}}><i className="icon icon-shitf">shift 2</i></button>
        </div>
        <div className="row">
          <button className="key" type="button" style={{width: '95px'}}>Ctrl+Alt</button>
          <button className="key" type="button" style={{width: '293px', fontSize: '0px'}}>whitespace</button>
          <button className="key" type="button" style={{width: '95px'}}>Ctrl+Alt</button>
        </div>
      </div>
    </section>
  );
}

function mapStateToProps(state) {
  return { store: state }
}

export default connect(mapStateToProps)(Keyboard);
