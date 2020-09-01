import React from 'react';
import { render } from '@testing-library/react';
import Login from './Login';

test('renders with text Brasil', () => {
  const { getByText } = render(<Login />);
  const textLogin = getByText(/Login/i);
  expect(textLogin).toBeInTheDocument();
});
