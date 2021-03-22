import React from 'react';
import { render, screen } from '@testing-library/react';
import Notfound from './Notfound';
import { BrowserRouter } from "react-router-dom";

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
        <Notfound />
      </BrowserRouter>
    );
    const text404 = screen.getByText((content, element) => {
      return content !== '' && element.textContent === '404. Esse é um erro.';
    });
    const textContentUrl = screen.getByText((content, element) => {
      return content !== '' && element.textContent === 'O URL /test solicitado não foi encontrado. Isso é tudo que sabemos.';
    });

    expect(screen.getByTestId('app-notfound')).toBeInTheDocument();
    expect(text404).toHaveTextContent('404. Esse é um erro.');
    expect(textContentUrl).toHaveTextContent('O URL /test solicitado não foi encontrado. Isso é tudo que sabemos.');
  });
});
