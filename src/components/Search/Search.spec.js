import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from './Search';
import { Provider } from 'react-redux';
import store from '../../store';

describe("Should render <Search/>", () => {
  it('renders valid buttons', () => {
    render(
    <Provider store={store}>
      <Search />
    </Provider>
    );
    const buttonKeyboard = screen.getByRole('button', { name: 'Icone Teclado Teclado virtual' })
    const buttonVoice = screen.getByRole('button', { name: 'Buscar por voz' })
    const buttonSearch = screen.getByRole('button', { name: 'Pesquisa Google' })
    const buttonLucky = screen.getByRole('button', { name: 'Estou com sorte' })

    expect(buttonKeyboard).toHaveTextContent('Teclado virtual');
    expect(buttonVoice).toHaveTextContent('Buscar por voz');
    expect(buttonSearch).toHaveTextContent('Pesquisa Google');
    expect(buttonLucky).toHaveTextContent('Estou com sorte');
  });
});
