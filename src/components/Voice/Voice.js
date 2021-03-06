import React, { useRef, useEffect, useState }from 'react';
import { connect } from 'react-redux';
import './Voice.scss';

function Voice({ store, dispatch }) {
  const buttoVoiceRef = useRef(null);
  const [animation, setAnimation] = useState(false)
  let final_transcript = '';
  let recognizing = false;
  let ignore_onend;
  let recognition;

  useEffect(() => {
    /**
     * Voice search setup
     */

    if(store.voice) {
      voiceSetup();
    }

    /**
     * Clicked on outside of element
     */
    function handleClickOutside(event) {
        if (buttoVoiceRef.current && !buttoVoiceRef.current.contains(event.target)) {
          document.querySelector('body').removeAttribute('style');
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

  function voiceSetup() {
    if (!('webkitSpeechRecognition' in window)) {
      console.log('atualize SpeechRecognition')
    } else {
      recognition = new window.webkitSpeechRecognition();

      recognition.continuous = false;
      recognition.interimResults = true;

      final_transcript = '';
      recognition.start();
      ignore_onend = false;
      document.querySelector('.App-voice p').textContent = 'Ative o microfone';

      recognition.onstart = function() {
        recognizing = true;
        document.querySelector('.App-voice p').textContent = 'Fale agora';
        setAnimation(true);
        console.log('onstart voice');
      };

      recognition.onerror = function(event) {
        setAnimation(false);
        if (event.error === 'no-speech') {
          console.log('onerror voice no-speech');
          ignore_onend = true;
        }
        if (event.error === 'audio-capture') {
          console.log('onerror audio-capture');
          ignore_onend = true;
        }
        if (event.error === 'not-allowed') {
          document.querySelector('.App-voice p').textContent = 'Ative o microfone';
          ignore_onend = true;
        }
      };

      recognition.onend = function() {
        recognizing = false;
        if (ignore_onend) {
          return;
        }
        if (!final_transcript) {
          return;
        }
        setAnimation(false);
        document.querySelector('.App-voice p').textContent = 'Fale agora';
      };

      recognition.onresult = function(event) {
        var interim_transcript = '';
        for (var i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            final_transcript += event.results[i][0].transcript;
          } else {
            interim_transcript += event.results[i][0].transcript;
          }
        }
        if (final_transcript) {
          document.querySelector('body').removeAttribute('style');
          dispatch({type: 'SEARCH_VALUE', payload: final_transcript})
          dispatch({type: 'SET_VOICE', payload: false})
          recognition.stop();
        }
        if (interim_transcript) {
          document.querySelector('.App-voice p').textContent = interim_transcript;
        }
      };
    }
  }

  function startButton() {
    if (recognizing) {
      recognition.stop();
      return;
    }
    final_transcript = '';
    recognition.start();
    ignore_onend = false;
  }

  return (
    <section data-testid="app-voice" className={`App-voice${store.voice ? ' active' : '' }`}>
      <button className="exit" type="button"><i className="icon icon-exit">X</i></button>
      <p>Fale agora</p>
      <button type="button" className={`btn-voice${animation ? ' active' : '' }`} ref={buttoVoiceRef} onClick={startButton}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
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
