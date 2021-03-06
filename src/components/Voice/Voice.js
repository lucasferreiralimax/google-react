import React, { useRef, useEffect, useState, useCallback }from 'react';
import { connect } from 'react-redux';
import './Voice.scss';
import { useTranslation } from 'react-i18next';

function Voice({ store, dispatch }) {
  const { t } = useTranslation();
  const buttoVoiceRef = useRef(null);
  const [animation, setAnimation] = useState(false)
  const [voiceText, setVoiceText] = useState('');
  const final_transcript = useRef('');
  const recognizing = useRef(false);
  const ignore_onend = useRef(null);
  const recognition = useRef(null);

  const voiceSetup = useCallback(() => {
    if (!('webkitSpeechRecognition' in window)) {
      console.log(t('voice.update'))
    } else {
      recognition.current = new window.webkitSpeechRecognition();
      recognition.current.continuous = false;
      recognition.current.interimResults = true;
      final_transcript.current = '';
      recognition.current.start();
      ignore_onend.current = false;
      setVoiceText(t('voice.active_mic'));

      recognition.current.onstart = () => {
        recognizing.current = true;
        setVoiceText(t('voice.speak_now'));
        setAnimation(true);
      };

      recognition.current.onerror = (event) => {
        setAnimation(false);
        if (event.error === 'no-speech') {
          console.log(t('voice.error_no_speech'));
          ignore_onend.current = true;
        }
        if (event.error === 'audio-capture') {
          console.log(t('voice.error_audio_capture'));
          ignore_onend.current = true;
        }
        if (event.error === 'not-allowed') {
          setVoiceText(t('voice.active_mic'));
          ignore_onend.current = true;
        }
      };

      recognition.current.onend = () => {
        recognizing.current = false;
        if (ignore_onend) { return; }
        if (!final_transcript.current) { return; }
        setAnimation(false);
        setVoiceText(t('voice.speak_now'));
      };

      recognition.current.onresult = function(event) {
        var interim_transcript = '';
        for (var i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            final_transcript.current += event.results[i][0].transcript;
          } else {
            interim_transcript += event.results[i][0].transcript;
          }
        }
        if (final_transcript.current) {
          document.querySelector('body').removeAttribute('style');
          dispatch({type: 'SEARCH_VALUE', payload: final_transcript.current});
          dispatch({type: 'SET_VOICE', payload: false});
          recognition.current.stop();
        }
        if (interim_transcript) {
          setVoiceText(interim_transcript);
        }
      };
    }
  }, [t, setVoiceText, recognizing, final_transcript, ignore_onend, dispatch]);

  const stopButton = () => {
    if (recognizing.current) {
      recognition.current.stop();
      setAnimation(false);
      dispatch({type: 'SET_VOICE', payload: false});
      return;
    }
  }

  const handleClickOutside = (event) => {
    if (
      buttoVoiceRef.current &&
      !buttoVoiceRef.current.contains(event.target)
    ) {
      document.querySelector('body').removeAttribute('style');
      dispatch({type: 'SET_VOICE', payload: false})
    }
  }

  useEffect(() => {
    if(store.voice) { voiceSetup() }
  }, [store.voice, voiceSetup]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    };
  });

  return (
    <section data-testid="app-voice" className={`App-voice${store.voice ? ' active' : '' }`}>
      {store.voice && (
        <React.Fragment>
          <button className="exit" type="button"><i className="icon icon-exit">X</i></button>
          <p>{voiceText}</p>
          <button
            className={`btn-voice${animation ? ' active' : '' }`}
            onClick={stopButton}
            ref={buttoVoiceRef}
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M17 11.998c0 2.76-2.23 5-4.99 5l-.002.002a4.994 4.994 0 01-4.979-5h-2c0 3.52 2.59 6.433 5.98 6.92v3.078h.01V22h2v-3.08h-.01A6.982 6.982 0 0019 11.998z"/>
              <path fill="none" d="M0 0h24v24H0z"/>
              <path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v7c0 1.66 1.34 3 3 3z"/>
            </svg>
          </button>
        </React.Fragment>
        )
      }
    </section>
  );
}

function mapStateToProps(state) {
  return { store: state }
}

export default connect(mapStateToProps)(Voice);
