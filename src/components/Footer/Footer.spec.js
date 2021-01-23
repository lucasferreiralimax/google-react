import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../../store';

describe("Should render <Footer/>", () => {
  it('renders app-darkmode', () => {
    render(
    <Provider store={store}>
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    </Provider>
    );
    expect(screen.getByTestId('app-darkmode')).toBeInTheDocument();
  });
});
