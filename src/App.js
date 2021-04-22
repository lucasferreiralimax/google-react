import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

import Loading from './components/Loading/Loading';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import store from './store';

import './App.scss';

const Home = lazy(() => import('./views/Home/Home'));
const Login = lazy(() => import('./views/Login/Login'));
const Config = lazy(() => import('./views/Config/Config'));
const Notfound = lazy(() => import('./views/Notfound/Notfound'));


function App() {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <Suspense fallback={<Loading/>}>
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
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="*" exact>
                  <Notfound />
                </Route>
              </Switch>
              <Footer />
            </div>
          </Router>
        </Suspense>
      </I18nextProvider>
    </Provider>
  );
}

export default App;
