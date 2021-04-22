import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from './Search';
import { Provider } from 'react-redux';
import store from '../../store';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

describe("Should render <Search/>", () => {
  it('renders valid buttons', () => {
    render(
    <Provider store={store}>
      <I18nextProvider i18n={i18n}></I18nextProvider>
      <Search />
    </Provider>
    );
    const buttonClean = screen.getByRole('button', { name: 'search_component.clean' })
    const buttonKeyboard = screen.getByRole('button', { name: 'search_component.alt_keyboard search_component.keyboard' })
    const buttonVoice = screen.getByRole('button', { name: 'search_component.search_voice' })
    const buttonSearch = screen.getByRole('button', { name: 'search_component.search' })
    const buttonLucky = screen.getByRole('button', { name: 'search_component.lucky' })

    expect(buttonClean).toHaveTextContent('search_component.clean');
    expect(buttonKeyboard).toHaveTextContent('search_component.keyboard');
    expect(buttonVoice).toHaveTextContent('search_component.search_voice');
    expect(buttonSearch).toHaveTextContent('search_component.search');
    expect(buttonLucky).toHaveTextContent('search_component.lucky');
  });
});
