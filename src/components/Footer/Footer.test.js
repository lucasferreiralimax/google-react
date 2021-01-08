import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

test('renders with text Brasil', () => {
  const { getByText } = render(<Footer />);
  const textFooter = getByText(/Brasil - @lucasferreiralimax/i);
  expect(textFooter).toBeInTheDocument();
});
