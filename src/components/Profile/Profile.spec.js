import React from 'react';
import { render, screen } from '@testing-library/react';
import Profile from './Profile';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

describe("Should render <Profile/>", () => {
  it('renders valid link and text', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Profile />
      </I18nextProvider>
    );
    const altFoto = screen.getAllByAltText(/Foto Frank Sinatra/i);
    const userName = screen.getByText(/2L/i);
    const name = screen.getByText(/Lucas Lima/i);
    const email = screen.getByText(/lucasferreiralimax@gmail.com/i);
    const linkPrivacidade = screen.getByText(/profile_component.politics/i);
    const linkTermos = screen.getByText(/profile_component.terms/i);

    for(let photo of altFoto) {
      expect(photo.alt).toContain('Foto Frank Sinatra');
    }

    expect(userName).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(linkPrivacidade).toBeInTheDocument();
    expect(linkTermos).toBeInTheDocument();
  });
});
