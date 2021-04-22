import React from 'react';
import { render, screen } from '@testing-library/react';
import Menu from './Menu';
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

describe("Should render <Menu/>", () => {
  it('renders valid link and text', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Menu />
        </BrowserRouter>
      </I18nextProvider>
    );

    const home = screen.getByText(/menu.home/i);
    const login = screen.getByText(/menu.login/i);
    const config = screen.getByText(/menu.config/i);

    expect(home).toBeInTheDocument();
    expect(login).toBeInTheDocument();
    expect(config).toBeInTheDocument();
  });
});
