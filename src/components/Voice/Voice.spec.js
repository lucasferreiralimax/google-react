import React from 'react';
import { render, screen } from '@testing-library/react';
import Voice from './Voice';
import { Provider } from 'react-redux';
import store from '../../store';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

describe("Should render <Voice/>", () => {
  it('renders app-voice', () => {
    render(
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <Voice />
      </I18nextProvider>
    </Provider>
    );
    expect(screen.getByTestId('app-voice')).toBeInTheDocument();
  });
});
