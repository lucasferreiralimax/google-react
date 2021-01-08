import React from 'react';
import { render } from '@testing-library/react';
import Menu from './Menu';

test('renders with text Inicio', () => {
  const { getByText } = render(<Menu />);
  const textMenu = getByText(/Inicio/i);
  expect(textMenu).toBeInTheDocument();
});
