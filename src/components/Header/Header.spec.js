import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

describe("Should render <Header/>", () => {
  it('renders valid link and text', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Header />
      </I18nextProvider>
    );
    const textGodIsBig = screen.getByText(/text.GodIsBig/i);
    const altLogo = screen.getByAltText(/logo Google/i);
    const linkReact = screen.getByText(/react/i);

    expect(textGodIsBig).toHaveTextContent('text.GodIsBig');
    expect(altLogo).toBeDefined();
    expect(linkReact).toBeInTheDocument();
  });
});
