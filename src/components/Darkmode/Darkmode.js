import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './Darkmode.css';


function Darkmode({ type, store, dispatch }) {

  useEffect(() => {
    localStorage.setItem("darkmode", JSON.stringify(store.darkmode))

    if(!store.darkmode) {
      document.documentElement.style.setProperty('--main-color', '#000');
      document.documentElement.style.setProperty('--main-color-rgb', '0,0,0');
      document.documentElement.style.setProperty('--main-color-primary', '#1a73e8');
      document.documentElement.style.setProperty('--main-color-secondary', 'green');
      document.documentElement.style.setProperty('--main-bg-color', '#fff');
    } else {
      document.documentElement.style.setProperty('--main-color', '#fff');
      document.documentElement.style.setProperty('--main-color-rgb', '255,255,255');
      document.documentElement.style.setProperty('--main-color-primary', '#1a73e8');
      document.documentElement.style.setProperty('--main-color-secondary', 'green');
      document.documentElement.style.setProperty('--main-bg-color', '#333');
    }

  }, [store.darkmode])

  return (
    <button type="button" onClick={() => dispatch({type: 'TOGGLE_DARKMODE'})} className={ `darkmode${store.darkmode ? ' active' : '' }${type ? ' footer' : '' }`}>
        { type ?
          <svg width="34" height="34" viewBox="-5 -5 34 34" stroke-width="0" fill="var(--main-color-5)">
            { store.darkmode ?
              <path fill="var(--main-color)" fill-rule="evenodd" clip-rule="evenodd" d="M12 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zM4.929 4.929a1 1 0 011.414 0l.707.707A1 1 0 115.636 7.05l-.707-.707a1 1 0 010-1.414zm14.142 0a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM7 12a5 5 0 1110 0 5 5 0 01-10 0zm-5 0a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm17 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm-2.05 4.95a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm-11.314 0a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707zM12 19a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z"/>
              :
              <path fill="var(--main-color)" fill-rule="evenodd" clip-rule="evenodd" d="M9.353 2.939a1 1 0 01.22 1.08 8 8 0 0010.408 10.408 1 1 0 011.301 1.3A10.003 10.003 0 0112 22C6.477 22 2 17.523 2 12c0-4.207 2.598-7.805 6.273-9.282a1 1 0 011.08.22z"/>
            }
          </svg>
          :
          <div>
            <span>Dark Mode</span>
            <input id="darkmode" type="checkbox" checked={ store.darkmode } onChange={()=>{}} />
          </div>
        }
    </button>
  );
}

function mapStateToProps(state) {
  return { store: state }
}

export default connect(mapStateToProps)(Darkmode);
