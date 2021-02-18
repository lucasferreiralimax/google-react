import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Keyboard from './Keyboard';
import { Provider } from 'react-redux';
import store from '../../store';

describe("Should render <Keyboard/>", () => {
  beforeEach(() => {
    render(
    <Provider store={store}>
      <Keyboard />
    </Provider>
    );
  });
  it('renders app-keyboard', () => {

    expect(screen.getByTestId('app-keyboard')).toBeInTheDocument();
  });
  it('renders keys default', () => {
    let keys = document.querySelectorAll('.App-keyboard-content .key')
    let keys_mock = ['\'', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '´', '[', 'capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ç', '~', ']', 'shift 1', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', ';', 'shift 2', 'Ctrl+Alt', 'whitespace', 'Ctrl+Alt']

    for(let [index, key] of keys.entries()) {
      expect(key.textContent).toBe(keys_mock[index])
    }
  });
});
