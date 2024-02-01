import React from 'react';
import { render, screen } from '@testing-library/react';
import Notfound from './Notfound';
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

describe("Should render <Notfound/>", () => {
  let location;
  const mockLocation = new URL("https://example.com/test");

  beforeEach(() => {
    location = window.location;
    delete window.location;
    window.location = mockLocation;
  });

  afterEach(() => {
    window.location = location;
  });

  it('renders valid link and text', () => {
    render(
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <Notfound />
        </I18nextProvider>
      </BrowserRouter>
    );
    const text404 = screen.getByText((content, element) => {
      return content !== '' && element.textContent === '404. notfound.text1';
    });
    const textContentUrl = screen.getByText((content, element) => {
      return content !== '' && element.textContent === 'notfound.text2 /test notfound.text3';
    });

    expect(screen.getByTestId('app-notfound')).toBeInTheDocument();
    expect(text404).toHaveTextContent('404. notfound.text1');
    expect(textContentUrl).toHaveTextContent('notfound.text2 /test notfound.text3');
  });
});
