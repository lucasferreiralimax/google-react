import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders with text Brasil', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Brasil/i);
  expect(linkElement).toBeInTheDocument();
});
