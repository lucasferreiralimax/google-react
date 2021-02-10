import React, { useRef, useEffect }from 'react';
import { connect } from 'react-redux';
import './Voice.scss';

function Voice({ store, dispatch }) {
  const buttoVoiceRef = useRef(null)

  useEffect(() => {
    /**
     * Clicked on outside of element
     */
    function handleClickOutside(event) {
        if (buttoVoiceRef.current && !buttoVoiceRef.current.contains(event.target)) {
          dispatch({type: 'SET_VOICE', payload: false})
        }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside)
    };
  });
  return (
    <section data-testid="app-voice" className={ `App-voice${store.voice ? ' active' : '' }`}>
      <button className="exit" type="button"><i className="icon icon-exit">X</i></button>
      <p>Fale agora</p>
      <button type="button" className="btn-voice" ref={buttoVoiceRef}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#ea4335">
          <path d="M17 11.998c0 2.76-2.23 5-4.99 5l-.002.002a4.994 4.994 0 01-4.979-5h-2c0 3.52 2.59 6.433 5.98 6.92v3.078h.01V22h2v-3.08h-.01A6.982 6.982 0 0019 11.998z"/>
          <path fill="none" d="M0 0h24v24H0z"/>
          <path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v7c0 1.66 1.34 3 3 3z"/>
          </svg>
      </button>
    </section>
  );
}

function mapStateToProps(state) {
  return { store: state }
}

export default connect(mapStateToProps)(Voice);
