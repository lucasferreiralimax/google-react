import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Loading from './components/Loading/Loading';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import './App.scss';
import store from './store';

const Header = lazy(() => import('./components/Header/Header'));
const Login = lazy(() => import('./components/Login/Login'));
const Config = lazy(() => import('./components/Config/Config'));
const Profile = lazy(() => import('./components/Profile/Profile'));
const Search = lazy(() => import('./components/Search/Search'));
const Keyboard = lazy(() => import('./components/Keyboard/Keyboard'));
const Voice = lazy(() => import('./components/Voice/Voice'));

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loading/>}>
        <Router>
          <div className="App">
            <Menu />
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/config">
                <Profile />
                <Config />
              </Route>
              <Route path="/">
                <Profile />
                <Header />
                <Search />
                <Keyboard />
                <Voice />
              </Route>
            </Switch>
            <Footer />
          </div>
        </Router>
      </Suspense>
    </Provider>
  );
}

export default App;
