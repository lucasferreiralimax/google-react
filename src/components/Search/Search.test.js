import React from 'react';
import { render } from '@testing-library/react';
import Search from './Search';

test('renders with Search Buttons', () => {
  const { getByText } = render(<Search />);
  const buttonTeclado = getByText(/Teclado virtual/i);
  const buttonVoice = getByText(/Buscar por voz/i);
  expect(buttonTeclado).toBeInTheDocument();
  expect(buttonVoice).toBeInTheDocument();
});
