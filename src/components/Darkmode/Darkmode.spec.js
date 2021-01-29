import React from 'react';
import { render, screen } from '@testing-library/react';
import Darkmode from './Darkmode';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../../store';

describe("Should render <Darkmode/>", () => {
  it('renders app-darkmode', () => {
    render(
    <Provider store={store}>
      <BrowserRouter>
        <Darkmode />
      </BrowserRouter>
    </Provider>
    );
    expect(screen.getByTestId('app-darkmode')).toBeInTheDocument();
  });
});
