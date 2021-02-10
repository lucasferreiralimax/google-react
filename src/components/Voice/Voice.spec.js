import React from 'react';
import { render, screen } from '@testing-library/react';
import Voice from './Voice';
import { Provider } from 'react-redux';
import store from '../../store';

describe("Should render <Voice/>", () => {
  it('renders app-voice', () => {
    render(
    <Provider store={store}>
      <Voice />
    </Provider>
    );
    expect(screen.getByTestId('app-voice')).toBeInTheDocument();
  });
});
