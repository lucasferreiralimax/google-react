import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from './Loading';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

describe("Should render <Loading/>", () => {
  it('renders valid text', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Loading />
      </I18nextProvider>
    );
    const loadingText = screen.getByText(/text.loading/i);

    expect(loadingText).toHaveTextContent('text.loading');
    expect(screen.getByTestId('app-loading-loader')).toBeInTheDocument();
  });
});
