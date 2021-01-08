import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './Darkmode.css';


function Darkmode({ type, store, dispatch }) {

  useEffect(() => {
    localStorage.setItem("darkmode", JSON.stringify(store.darkmode))

    if(!store.darkmode) {
      document.documentElement.style.setProperty('--main-color', '#000');
      document.documentElement.style.setProperty('--main-color-primary', '#1a73e8');
      document.documentElement.style.setProperty('--main-color-secondary', 'green');
      document.documentElement.style.setProperty('--main-bg-color', '#fff');
    } else {
      document.documentElement.style.setProperty('--main-color', '#fff');
      document.documentElement.style.setProperty('--main-color-primary', '#1a73e8');
      document.documentElement.style.setProperty('--main-color-secondary', 'green');
      document.documentElement.style.setProperty('--main-bg-color', '#333');
    }

  }, [store.darkmode])

  return (
    <button type="button" onClick={() => dispatch({type: 'TOGGLE_DARKMODE'})} className={ `darkmode${store.darkmode ? ' active' : '' }${type ? ' footer' : '' }`}>
        <span>Dark Mode</span>
        <input id="darkmode" type="checkbox" checked={ store.darkmode } onChange={()=>{}} />
    </button>
  );
}

function mapStateToProps(state) {
  return { store: state }
}

export default connect(mapStateToProps)(Darkmode);
