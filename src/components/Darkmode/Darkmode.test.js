import React from 'react';
import { render } from '@testing-library/react';
import Darkmode from './Darkmode';

test('renders with text Dark Mode', () => {
  const { getByText } = render(<Darkmode />);
  const textDarkmode = getByText(/Dark Mode/i);
  expect(textDarkmode).toBeInTheDocument();
});
