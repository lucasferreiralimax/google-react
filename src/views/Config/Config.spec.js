import React from 'react';
import { render, screen } from '@testing-library/react';
import Config from './Config';
import { Provider } from 'react-redux';
import store from '../../store';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

describe("Should render <Config/>", () => {
  it('renders valid link and text', () => {
    render(
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <Config />
        </I18nextProvider>
      </Provider>
    );
    const titleConfig = screen.getByText(/text.config/i);
    const linkGithub = screen.getByText(/text.github/i);

    expect(titleConfig).toHaveTextContent('text.config');
    expect(linkGithub).toHaveTextContent('text.github');
    expect(screen.getByTestId('app-darkmode')).toBeInTheDocument();
  });
});
