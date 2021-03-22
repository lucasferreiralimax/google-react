import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import { Provider } from 'react-redux';
import store from '../../store';

describe("Should render <Home/>", () => {
  it('renders components', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(screen.getByTestId('app-profile')).toBeInTheDocument();
    expect(screen.getByTestId('app-header')).toBeInTheDocument();
    expect(screen.getByTestId('app-search')).toBeInTheDocument();
    expect(screen.getByTestId('app-keyboard')).toBeInTheDocument();
    expect(screen.getByTestId('app-voice')).toBeInTheDocument();
  });
});
