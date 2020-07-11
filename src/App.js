import React from 'react';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
