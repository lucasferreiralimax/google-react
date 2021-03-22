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

const Home = lazy(() => import('./views/Home/Home'));
const Login = lazy(() => import('./views/Login/Login'));
const Config = lazy(() => import('./views/Config/Config'));

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
                <Config />
              </Route>
              <Route path="/">
                <Home />
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
