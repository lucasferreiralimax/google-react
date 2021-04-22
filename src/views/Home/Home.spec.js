import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import { Provider } from 'react-redux';
import store from '../../store';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

describe("Should render <Home/>", () => {
  it('renders components', () => {
    render(
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <Home />
        </I18nextProvider>
      </Provider>
    );
    expect(screen.getByTestId('app-profile')).toBeInTheDocument();
    expect(screen.getByTestId('app-header')).toBeInTheDocument();
    expect(screen.getByTestId('app-search')).toBeInTheDocument();
    expect(screen.getByTestId('app-keyboard')).toBeInTheDocument();
    expect(screen.getByTestId('app-voice')).toBeInTheDocument();
  });
});
