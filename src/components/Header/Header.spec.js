import { render, screen } from '@testing-library/react';
import Header from './Header';

it('renders valid link and text', () => {
  render(<Header />);
  const textGodIsBig = screen.getByText(/Deus é Maior/i);
  const altLogo = screen.getByAltText(/logo Google/i);
  const linkReact = screen.getByText(/react/i);

  expect(textGodIsBig).toHaveTextContent('Deus é Maior');
  expect(altLogo).toBeDefined();
  expect(linkReact).toBeInTheDocument();
});
