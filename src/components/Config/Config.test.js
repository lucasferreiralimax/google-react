import React from 'react';
import { render } from '@testing-library/react';
import Config from './Config';

test('renders with text Brasil', () => {
  const { getByText } = render(<Config />);
  const textLogin = getByText(/Configurações/i);
  expect(textLogin).toBeInTheDocument();
});
