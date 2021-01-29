import React from 'react';
import { render, screen } from '@testing-library/react';
import Keyboard from './Keyboard';
import { Provider } from 'react-redux';
import store from '../../store';

describe("Should render <Keyboard/>", () => {
  it('renders app-keyboard', () => {
    render(
    <Provider store={store}>
      <Keyboard />
    </Provider>
    );
    expect(screen.getByTestId('app-keyboard')).toBeInTheDocument();
  });
});
