import React from 'react';
import { render } from '@testing-library/react';
import Config from './Config';

test('renders with text Configurações', () => {
  const { getByText } = render(<Config />);
  const textConfig = getByText(/Configurações/i);
  expect(textConfig).toBeInTheDocument();
});
