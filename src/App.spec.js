import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import store from './store';
import i18n from './i18n';

function AppWapper() {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </I18nextProvider>
    </Provider>
  );
}

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)
  return render(ui)
}

describe("Should render <App/>", () => {
  it('renders app-nav', () => {
    render(<AppWapper />);
    expect(screen.getByTestId('app-nav')).toBeInTheDocument();
  });

  it('renders app-header', () => {
    render(<AppWapper />);
    expect(screen.getByTestId('app-header')).toBeInTheDocument();
  });

  it('renders app-profile', () => {
    render(<AppWapper />);
    expect(screen.getByTestId('app-profile')).toBeInTheDocument();
  });

  it('renders app-keyboard', () => {
    renderWithRouter(<AppWapper />, { route: '/' })
    expect(screen.getByTestId('app-keyboard')).toBeInTheDocument();
  });

  it('renders app-voice', () => {
    renderWithRouter(<AppWapper />, { route: '/' })
    expect(screen.getByTestId('app-voice')).toBeInTheDocument();
  });

  it('renders app-search', () => {
    renderWithRouter(<AppWapper />, { route: '/' })
    expect(screen.getByTestId('app-search')).toBeInTheDocument();
  });

  it('renders app-footer', () => {
    render(<AppWapper />);
    expect(screen.getByTestId('app-footer')).toBeInTheDocument();
  });
});

// @todo update test with lazy loading
// describe("Should render routes <App/>", () => {
//   it('renders app-login', () => {
//     renderWithRouter(<AppWapper />, { route: '/login' })
//     expect(screen.getByTestId('app-login')).toBeInTheDocument();
//   });

//   it('renders app-config', () => {
//     renderWithRouter(<AppWapper />, { route: '/config' })
//     expect(screen.getByTestId('app-profile')).toBeInTheDocument();
//     expect(screen.getByTestId('app-config')).toBeInTheDocument();
//   });
// });
