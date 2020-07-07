import React from 'react';
import { render } from '@testing-library/react';
import Search from './Search';

test('renders with text Brasil', () => {
  const { getByText } = render(<Search />);
  const buttonTeclado = getByText(/Teclado virtual/i);
  const buttonVoice = getByText(/Buscar por voz/i);
  expect(buttonTeclado).toBeInTheDocument();
  expect(buttonTeclado).toBeInTheDocument();
});
