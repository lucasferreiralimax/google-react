import React from 'react';
import './Home.scss';
import Header from '../../components/Header/Header';
import Keyboard from '../../components/Keyboard/Keyboard';
import Voice from '../../components/Voice/Voice';
import Search from '../../components/Search/Search';
import Profile from '../../components/Profile/Profile';

function Home() {
  return (
    <React.Fragment>
      <Profile />
      <Header />
      <Search />
      <Keyboard />
      <Voice />
    </React.Fragment>
  );
}

export default Home;
