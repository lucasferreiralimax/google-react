import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Config from './components/Config/Config';
import Profile from './components/Profile/Profile';
import Search from './components/Search/Search';
import Keyboard from './components/Keyboard/Keyboard';
import Footer from './components/Footer/Footer';
import './App.scss';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Menu />
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/config">
              <Config />
            </Route>
            <Route path="/">
              <Profile />
              <Header />
              <Search />
              <Keyboard />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
