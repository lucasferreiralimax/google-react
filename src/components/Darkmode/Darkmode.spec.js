import React from 'react';
import { render, screen } from '@testing-library/react';
import Darkmode from './Darkmode';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../../store';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

describe("Should render <Darkmode/>", () => {
  it('renders app-darkmode', () => {
    render(
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Darkmode />
        </BrowserRouter>
      </I18nextProvider>
    </Provider>
    );
    expect(screen.getByTestId('app-darkmode')).toBeInTheDocument();
  });
});
