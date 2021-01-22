import { render, screen } from '@testing-library/react';
import Menu from './Menu';
import { BrowserRouter } from "react-router-dom";

describe("Should render <Menu/>", () => {
  it('renders valid link and text', () => {
    render(
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    );

    const home = screen.getByText(/Inicio/i);
    const login = screen.getByText(/Login/i);
    const config = screen.getByText(/Configurações/i);

    expect(home).toBeInTheDocument();
    expect(login).toBeInTheDocument();
    expect(config).toBeInTheDocument();
  });
});
