import React, { useState } from 'react';
import { connect } from 'react-redux';
import './Keyboard.css';

function Keyboard({ store, dispatch }) {
  const [translateY, setTranslateY] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const [capslock, setCapslock] = useState(false)
  const [shift, setShift] = useState(false)
  const [ctrlalt, setCtrlalt] = useState(false)

  let holding = null;
  let onDraggingFunctionRef = null;

  function onMouseDown(e) {
    holding = true;
    onDraggingFunctionRef = onMouseDragging();
    document.addEventListener('mousemove', onDraggingFunctionRef);
    document.addEventListener('mouseup', _onMouseUp);
  }

  function _onMouseUp(e) {
    holding = false;
    document.removeEventListener('mousemove', onDraggingFunctionRef);
    document.removeEventListener('mouseup', _onMouseUp);
  }

  function onMouseDragging() {
    return (e) => {
      if (holding) {
        if((e.clientY - 20) > 2 && e.clientY < (window.innerHeight - 220)) {
          setTranslateY(`${e.clientY - 20}px`)
        }
        if((e.clientX - 250) > 2 && e.clientX < window.innerWidth - 290) {
          setTranslateX(`${e.clientX - 250}px`)
        }
      }
    }
  }

  function onKeyVirtual(event) {
    event.persist()
    if(event.target.classList.contains('key')) {
      let input = document.querySelector('.App-search-input')

      switch(event.target.textContent) {
        case 'backspace':
          backspace(input)
          break;
        case 'whitespace':
          insertAtCaret(input, ' ')
          break;
        case 'capslock':
          setCapslock(!capslock)
          capslockEvent(!capslock)
          break;
        case 'Ctrl+Alt':
          setCtrlalt(!ctrlalt)
          ctrlAltEvent(!ctrlalt)
          console.log('Ctrl+Alt')
          break;
        case 'shift 1':
        case 'shift 2':
          setShift(!shift)
          shiftEvent(!shift)
          console.log('shitf 1')
          break;
        default:
          insertAtCaret(input, event.target.textContent)
          break;
      }
      console.log(input.selectionStart)
      console.log(event.target)
    }
  }

  // function insertAtCaret @Collin Anderson
  function insertAtCaret(element, text) {
    if (document.selection) {
      element.focus();
      let sel = document.selection.createRange();
      sel.text = text;
      element.focus();
    } else if (element.selectionStart || element.selectionStart === 0) {
      let startPos = element.selectionStart;
      let endPos = element.selectionEnd;
      element.value = element.value.substring(0, startPos) + text + element.value.substring(endPos, element.value.length);
      element.focus();
      element.selectionStart = startPos + text.length;
      element.selectionEnd = startPos + text.length;
    } else {
      element.value += text;
      element.focus();
    }
  }

  function backspace(element) {
    if (document.selection) {
      element.focus();
      let sel = document.selection.createRange();
      --sel.text;
      element.focus();
    } else if (element.selectionStart || element.selectionStart === 0) {
      let startPos = element.selectionStart;
      let endPos = element.selectionEnd;
      element.value = element.value.substring(0, startPos-1) + element.value.substring(endPos, element.value.length);
      element.focus();
      element.selectionStart = startPos;
      element.selectionEnd = --endPos;
    } else {
      --element.value;
      element.focus();
    }
  }

  function capslockEvent(status) {
    let keys = document.querySelectorAll('.App-keyboard-content .key')
    for(let key of keys) {
      switch(key.textContent) {
        case 'backspace':
        case 'whitespace':
        case 'capslock':
        case 'Ctrl+Alt':
        case 'shift 1':
        case 'shift 2':
          break;
        default:
          status ?
            key.textContent = key.textContent.toUpperCase()
            :
            key.textContent = key.textContent.toLowerCase()
          break;
      }
    }
  }

  function ctrlAltEvent(status) {
    let keys = document.querySelectorAll('.App-keyboard-content .key')
    for(let key of keys) {
      switch(key.textContent) {
        case 'backspace':
        case 'whitespace':
        case 'capslock':
        case 'Ctrl+Alt':
        case 'shift 1':
        case 'shift 2':
          break;
        case '1':
        case '¹':
          status ? key.textContent = '¹' : key.textContent = '1'
          break;
        case '2':
        case '²':
          status ? key.textContent = '²' : key.textContent = '2'
          break;
        case '3':
        case '³':
          status ? key.textContent = '³' : key.textContent = '3'
          break;
        case '4':
        case '£':
          status ? key.textContent = '£' : key.textContent = '4'
          break;
        case '5':
        case '¢':
          status ? key.textContent = '¢' : key.textContent = '5'
          break;
        case '6':
        case '¬':
          status ? key.textContent = '¬' : key.textContent = '6'
          break;
        case '=':
        case '§':
          status ? key.textContent = '§' : key.textContent = '='
          break;
        case '[':
        case 'ª':
          status ? key.textContent = 'ª' : key.textContent = '['
          break;
        case ']':
        case 'º':
          status ? key.textContent = 'º' : key.textContent = ']'
          break;
        default:
          status ?
            key.classList.add('hidden')
            :
            key.classList.remove('hidden')
          break;
      }
    }
  }

  function shiftEvent(status) {
    let keys = document.querySelectorAll('.App-keyboard-content .key')
    for(let key of keys) {
      switch(key.textContent) {
        case 'backspace':
        case 'whitespace':
        case 'capslock':
        case 'Ctrl+Alt':
        case 'shift 1':
        case 'shift 2':
          break;
        case '\'':
        case '\'\'':
          status ? key.textContent = '\'\'' : key.textContent = '\''
          break;
        case '1':
        case '!':
          status ? key.textContent = '!' : key.textContent = '1'
          break;
        case '2':
        case '@':
          status ? key.textContent = '@' : key.textContent = '2'
          break;
        case '3':
        case '#':
          status ? key.textContent = '#' : key.textContent = '3'
          break;
        case '4':
        case '$':
          status ? key.textContent = '$' : key.textContent = '4'
          break;
        case '5':
        case '%':
          status ? key.textContent = '%' : key.textContent = '5'
          break;
        case '6':
        case '¨':
          status ? key.textContent = '¨' : key.textContent = '6'
          break;
        case '7':
        case '&':
          status ? key.textContent = '&' : key.textContent = '7'
          break;
        case '8':
        case '*':
          status ? key.textContent = '*' : key.textContent = '8'
          break;
        case '9':
        case '(':
          status ? key.textContent = '(' : key.textContent = '9'
          break;
        case '0':
        case ')':
          status ? key.textContent = ')' : key.textContent = '0'
          break;
        case '-':
        case '_':
          status ? key.textContent = '_' : key.textContent = '-'
          break;
        case '=':
        case '+':
          status ? key.textContent = '+' : key.textContent = '='
          break;
        case '´':
        case '`':
          status ? key.textContent = '`' : key.textContent = '´'
          break;
        case '~':
        case '^':
          status ? key.textContent = '^' : key.textContent = '~'
          break;
        case '[':
        case '{':
          status ? key.textContent = '{' : key.textContent = '['
          break;
        case ']':
        case '}':
          status ? key.textContent = '}' : key.textContent = ']'
          break;
        case '\\':
        case '|':
          status ? key.textContent = '|' : key.textContent = '\\'
          break;
        case ',':
        case '<':
          status ? key.textContent = '<' : key.textContent = ','
          break;
        case '.':
        case '>':
          status ? key.textContent = '>' : key.textContent = '.'
          break;
        case ';':
        case ':':
          status ? key.textContent = ':' : key.textContent = ';'
          break;
        default:
          status ?
            key.textContent = key.textContent.toUpperCase()
            :
            key.textContent = key.textContent.toLowerCase()
          break;
      }
    }
  }

  return (
    <section className={ `App-keyboard${store.keyboard ? ' active' : '' }`} style={{ transform: `translate(${translateX}, ${translateY})` }} onMouseDown={onMouseDown}>
      <h1>português brasileiro</h1>
      <button className="exit" type="button" onClick={() => dispatch({type: 'TOGGLE_KEYBOARD'})}><i className="icon icon-exit">X</i></button>
      <div className="App-keyboard-content" onClick={onKeyVirtual.bind(this)}>
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
          <button className={ `key${capslock ? ' active' : '' }`} type="button" style={{width: '53.75px'}}><i className="icon icon-capslock">capslock</i></button>
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
          <button className={ `key${shift ? ' active' : '' }`} type="button" style={{width: '37.25px'}}><i className="icon icon-shitf">shift 1</i></button>
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
          <button className={ `key${shift ? ' active' : '' }`} type="button" style={{width: '86.75px'}}><i className="icon icon-shitf">shift 2</i></button>
        </div>
        <div className="row">
          <button className={ `key${ctrlalt ? ' active' : '' }`} type="button" style={{width: '95px'}}>Ctrl+Alt</button>
          <button className="key" type="button" style={{width: '293px', fontSize: '0px'}}>whitespace</button>
          <button className={ `key${ctrlalt ? ' active' : '' }`} type="button" style={{width: '95px'}}>Ctrl+Alt</button>
        </div>
      </div>
    </section>
  );
}

function mapStateToProps(state) {
  return { store: state }
}

export default connect(mapStateToProps)(Keyboard);
