import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)
  return render(ui, { wrapper: BrowserRouter })
}

describe("Should render <App/>", () => {
  it('renders app-nav', () => {
    render(<App />);
    expect(screen.getByTestId('app-nav')).toBeInTheDocument();
  });

  it('renders app-header', () => {
    render(<App />);
    expect(screen.getByTestId('app-header')).toBeInTheDocument();
  });

  it('renders app-profile', () => {
    render(<App />);
    expect(screen.getByTestId('app-profile')).toBeInTheDocument();
  });

  it('renders app-keyboard', () => {
    renderWithRouter(<App />, { route: '/' })
    expect(screen.getByTestId('app-keyboard')).toBeInTheDocument();
  });

  it('renders app-search', () => {
    renderWithRouter(<App />, { route: '/' })
    expect(screen.getByTestId('app-search')).toBeInTheDocument();
  });

  it('renders app-footer', () => {
    render(<App />);
    expect(screen.getByTestId('app-footer')).toBeInTheDocument();
  });
});

describe("Should render routes <App/>", () => {
  it('renders app-login', () => {
    renderWithRouter(<App />, { route: '/login' })
    expect(screen.getByTestId('app-login')).toBeInTheDocument();
  });

  it('renders app-config', () => {
    renderWithRouter(<App />, { route: '/config' })
    expect(screen.getByTestId('app-config')).toBeInTheDocument();
  });
});
