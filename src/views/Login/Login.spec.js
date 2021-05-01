import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

describe("Should render <Login/>", () => {
  it('renders valid link and text', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Login />
      </I18nextProvider>
    );
    const titleLogin = screen.getByText(/login.title/);
    const titleParagraph = screen.getByText(/login.description/i);
    const labelEmail = screen.getByLabelText(/login.form_email.label/i);
    const linkRemember = screen.getByText(/login.remember/i);
    const buttonNewAccount = screen.getByRole('button', { name: 'login.new' })
    const buttonNext = screen.getByRole('button', { name: 'login.next' })

    expect(titleLogin).toHaveTextContent('login.title');
    expect(titleParagraph).toHaveTextContent('login.description');
    expect(labelEmail).toBeInTheDocument();
    expect(buttonNewAccount).toHaveTextContent('login.new');
    expect(buttonNext).toHaveTextContent('login.next');
    expect(linkRemember).toHaveTextContent('login.remember');
  });
});
