import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Keyboard from './Keyboard';
import noKeysChar from './utils'
import { Provider } from 'react-redux';
import store from '../../store';

let keys_mock = ['\'', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '´', '[', 'capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ç', '~', ']', 'shift 1', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', ';', 'shift 2', 'Ctrl+Alt', 'whitespace', 'Ctrl+Alt']
let keys_mock_shift = ['"', '!', '@', '#', '$', '%', '¨', '&', '*', '(', ')', '_', '+', 'backspace', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '`', '{', 'capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ç', '^', '}', 'shift 1', '\|', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', ':', 'shift 2', 'Ctrl+Alt', 'whitespace', 'Ctrl+Alt']
let keys_mock_ctrl_alt = ['\'', '¹', '²', '³', '£', '¢', '¬', '7', '8', '9', '0', '-', '§', 'backspace', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '´', 'ª', 'capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ç', '~', 'º', 'shift 1', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', ';', 'shift 2', 'Ctrl+Alt', 'whitespace', 'Ctrl+Alt']

function keyMockCheck(keys, mock, config) {
  for(let [index, key] of keys.entries()) {
    if(!noKeysChar.includes(key.textContent)) {
      if(!config.upper) return expect(key.textContent).toBe(mock[index])
      expect(key.textContent).toBe(mock[index].toUpperCase())
    }
  }
}

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

    for(let [index, key] of keys.entries()) {
      expect(key.textContent).toBe(keys_mock[index])
    }
  });
  it('keyboard action capslock', () => {
    fireEvent.click(screen.getByTestId('capslock'))
    let keys = document.querySelectorAll('.App-keyboard-content .key')
    keyMockCheck(keys, keys_mock, { upper: true} )
  });
  it('keyboard action shift', () => {
    // active shift_1
    fireEvent.click(screen.getByTestId('shift_1'))
    let keys = document.querySelectorAll('.App-keyboard-content .key')
    keyMockCheck(keys, keys_mock_shift, { upper: true} )

    // disabled shift_1
    fireEvent.click(screen.getByTestId('shift_1'))

    // active shift_2
    fireEvent.click(screen.getByTestId('shift_2'))
    keys = document.querySelectorAll('.App-keyboard-content .key')
    keyMockCheck(keys, keys_mock_shift, { upper: true} )
  });
  it('keyboard action ctrl-alt', () => {
    // active ctrl_alt_1
    fireEvent.click(screen.getByTestId('ctrl_alt_1'))
    let keys = document.querySelectorAll('.App-keyboard-content .key')
    keyMockCheck(keys, keys_mock_ctrl_alt, { upper: false} )

    // disabled ctrl_alt_1
    fireEvent.click(screen.getByTestId('ctrl_alt_1'))

    // active ctrl_alt_2
    fireEvent.click(screen.getByTestId('ctrl_alt_2'))
    keys = document.querySelectorAll('.App-keyboard-content .key')
    keyMockCheck(keys, keys_mock_ctrl_alt, { upper: false} )
  });
});
