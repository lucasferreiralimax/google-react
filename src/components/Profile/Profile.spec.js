import React from 'react';
import { render, screen } from '@testing-library/react';
import Profile from './Profile';

describe("Should render <Profile/>", () => {
  it('renders valid link and text', () => {
    render(<Profile />);
    const altFoto = screen.getAllByAltText(/Foto Frank Sinatra/i);
    const userName = screen.getByText(/2L/i);
    const name = screen.getByText(/Lucas Lima/i);
    const email = screen.getByText(/lucasferreiralimax@gmail.com/i);
    const linkPrivacidade = screen.getByText(/Política de Privacidade/i);
    const linkTermos = screen.getByText(/Termos de Serviço/i);

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
