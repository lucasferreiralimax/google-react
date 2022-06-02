import React, { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";

import Loading from './components/Loading/Loading';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';

import './App.scss';

const Home = lazy(() => import('./views/Home/Home'));
const Login = lazy(() => import('./views/Login/Login'));
const Config = lazy(() => import('./views/Config/Config'));
const Notfound = lazy(() => import('./views/Notfound/Notfound'));


function App() {
  return (
    <Suspense fallback={<Loading/>}>
      <div className="App">
        <Menu />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/config" element={<Config />} />
          <Route path="/" exact element={<Home />} />
          <Route path="*" exact element={<Notfound />} />
        </Routes>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
