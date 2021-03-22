import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';

describe("Should render <Login/>", () => {
  it('renders valid link and text', () => {
    render(<Login />);
    const titleLogin = screen.getByText(/Fazer login/);
    const titleParagraph = screen.getByText(/Use sua Conta do Google/i);
    const labelEmail = screen.getByLabelText(/Email ou telefone/i);
    const linkRemember = screen.getByText(/Esqueceu seu e-mail\?/i);
    const buttonNewAccount = screen.getByRole('button', { name: 'Criar conta' })
    const buttonNext = screen.getByRole('button', { name: 'Próxima' })

    expect(titleLogin).toHaveTextContent('Fazer login');
    expect(titleParagraph).toHaveTextContent('Use sua Conta do Google');
    expect(labelEmail).toBeInTheDocument();
    expect(buttonNewAccount).toHaveTextContent('Criar conta');
    expect(buttonNext).toHaveTextContent('Próxima');
    expect(linkRemember).toHaveTextContent('Esqueceu seu e-mail?');
  });
});
