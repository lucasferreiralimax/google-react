import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Menu.scss';

function Menu() {
  const [nav, setNav] = useState(false)
  const menu = () => setNav(!nav)
  const menuEvent = (e) => {
    if (e.keyCode === 27 || e.key === 'Escape') {
      setNav(false)
    }
  }

  useEffect(() => {
    let links = document.querySelectorAll('.App-nav-item')
    for(let link of links) { link.addEventListener('click', menu) }

    document.addEventListener('keyup', menuEvent)

    return () => {
      for(let link of links) { link.removeEventListener('click', menu) }

      document.removeEventListener('keyup', menuEvent)
    }
  })

  return (
    <nav data-testid="app-nav" className={ `App-nav${nav ? ' active' : '' }`}>
      <button type="button" className="App-nav-menu" onClick={menu}>
        <svg fill="var(--main-color)" height="25px" viewBox="0 0 25 25" width="25px" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
        </svg>
      </button>
      <div className="App-nav-content">
        <Link to="/" className="App-nav-item">
          <svg fill="var(--main-color)" height="25px" viewBox="0 0 25 25" width="25px" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
            <path d="M0 0h24v24H0z" fill="none"></path>
          </svg>
          <span>Inicio</span>
        </Link>
        <Link to="/login" className="App-nav-item">
          <svg xmlns="http://www.w3.org/2000/svg" fill="var(--main-color)" width="25px" viewBox="0 0 460.8 460.8">
            <path d="M230.432 0c-65.829 0-119.641 53.812-119.641 119.641s53.812 119.641 119.641 119.641 119.641-53.812 119.641-119.641S296.261 0 230.432 0zM435.755 334.89c-3.135-7.837-7.314-15.151-12.016-21.943-24.033-35.527-61.126-59.037-102.922-64.784-5.224-.522-10.971.522-15.151 3.657-21.943 16.196-48.065 24.555-75.233 24.555s-53.29-8.359-75.233-24.555c-4.18-3.135-9.927-4.702-15.151-3.657-41.796 5.747-79.412 29.257-102.922 64.784-4.702 6.792-8.882 14.629-12.016 21.943-1.567 3.135-1.045 6.792.522 9.927 4.18 7.314 9.404 14.629 14.106 20.898 7.314 9.927 15.151 18.808 24.033 27.167 7.314 7.314 15.673 14.106 24.033 20.898 41.273 30.825 90.906 47.02 142.106 47.02s100.833-16.196 142.106-47.02c8.359-6.269 16.718-13.584 24.033-20.898 8.359-8.359 16.718-17.241 24.033-27.167 5.224-6.792 9.927-13.584 14.106-20.898 2.611-3.135 3.133-6.793 1.566-9.927z"/>
          </svg>
          <span>Login</span>
        </Link>
        <Link to="/config" className="App-nav-item">
          <svg fill="var(--main-color)" height="25px" viewBox="0 0 25 25" width="25px" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path>
          </svg>
          <span>Configurações</span>
        </Link>
      </div>
      <div className={ `overlay${nav ? ' active' : '' }`} onClick={menu}></div>
    </nav>
  );
}

export default Menu;
