import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import './Keyboard.scss';

import { shiftEvent } from './shiftEvent'
import { ctrlAltEvent } from './ctrlAltEvent'
import { capslockEvent } from './capslockEvent'
import { insertAtCaretEvent } from './insertAtCaretEvent'
import { backspaceEvent } from './backspaceEvent'

function Keyboard({ store, dispatch }) {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)
  const [show, setShow] = useState(width > 900 && height > 400)
  const [translateY, setTranslateY] = useState(`${height - 250}px`)
  const [translateX, setTranslateX] = useState(`${(width / 2) - 250}px`)
  const [capslock, setCapslock] = useState(false)
  const [shift, setShift] = useState(false)
  const [ctrlalt, setCtrlalt] = useState(false)
  const wrapperRef = useRef(null)
  let holding = null;
  let onDraggingFunctionRef = null;

  const updateWidthAndHeight = () => {

    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
    setTranslateX(`${(width / 2) - 250}px`)

    if(width > 900 && height < 900) {
      setTranslateY(`${height - 250}px`)
    }

    if(width > 900 && height > 400) {
      setShow(true)
    } else {
      setShow(false)
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight)
    return () => window.removeEventListener("resize", updateWidthAndHeight)
  })

  function onMouseDown(e) {
    holding = true;
    onDraggingFunctionRef = onMouseDragging();
    document.addEventListener('mousemove', onDraggingFunctionRef);
    document.addEventListener('mouseup', _onMouseUp);
  }

  function _onMouseUp(e) {
    holding = false;
    wrapperRef.current.style.removeProperty('cursor')
    document.removeEventListener('mousemove', onDraggingFunctionRef);
    document.removeEventListener('mouseup', _onMouseUp);
  }

  function onMouseDragging() {
    return (e) => {
      if (holding) {
        wrapperRef.current.style.setProperty('cursor', 'move')

        if((e.pageY - 20) > 2 && e.pageY < (window.innerHeight - 220)) {
          setTranslateY(`${e.pageY - 20}px`)
        }
        if((e.pageX - 250) > 2 && e.pageX < window.innerWidth - 290) {
          setTranslateX(`${e.pageX - 250}px`)
        }
      }
    }
  }

  function onKeyVirtualEvents(event) {
    event.persist()
    if(event.target.classList.contains('key')) {
      let input = document.querySelector('.App-search-input')

      switch(event.target.textContent) {
        case 'backspace':
          backspaceEvent(input)
          break;
        case 'whitespace':
          insertAtCaretEvent(input, ' ')
          break;
        case 'capslock':
          setCapslock(!capslock)
          capslockEvent(!capslock)
          break;
        case 'Ctrl+Alt':
          setCtrlalt(!ctrlalt)
          ctrlAltEvent(!ctrlalt)
          break;
        case 'shift 1':
        case 'shift 2':
          setShift(!shift)
          shiftEvent(!shift)
          break;
        default:
          insertAtCaretEvent(input, event.target.textContent)
          break;
      }
    }
  }

  if(!show) {
    return null
  } else {
    return (
      <section data-testid="app-keyboard" className={ `App-keyboard${store.keyboard ? ' active' : '' }`} style={{ transform: `translate(${translateX}, ${translateY})` }}>
        <h1 onMouseDown={onMouseDown} ref={wrapperRef}>português brasileiro</h1>
        <button className="exit" type="button" onClick={() => dispatch({type: 'TOGGLE_KEYBOARD'})}><i className="icon icon-exit">X</i></button>
        <div className="App-keyboard-content" onClick={onKeyVirtualEvents.bind(this)}>
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
    )
  }
}

function mapStateToProps(state) {
  return { store: state }
}

export default connect(mapStateToProps)(Keyboard);
