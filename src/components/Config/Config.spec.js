import { render, screen } from '@testing-library/react';
import Config from './Config';
import { Provider } from 'react-redux';
import store from '../../store';


describe("Should render <Config/>", () => {
  it('renders valid link and text', () => {
    render(
      <Provider store={store}>
        <Config />
      </Provider>
    );
    const titleConfig = screen.getByText(/Configurações/i);
    const linkGithub = screen.getByText(/Estude o código fonte desse projeto no Github acesse aqui./i);

    expect(titleConfig).toHaveTextContent('Configurações');
    expect(linkGithub).toHaveTextContent('Estude o código fonte desse projeto no Github acesse aqui.');
    expect(screen.getByTestId('app-darkmode')).toBeInTheDocument();
  });
});
