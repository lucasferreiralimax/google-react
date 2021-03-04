import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from './Loading';


describe("Should render <Loading/>", () => {
  it('renders valid text', () => {
    render(<Loading />);
    const loadingText = screen.getByText(/Loading.../i);

    expect(loadingText).toHaveTextContent('Loading...');
    expect(screen.getByTestId('app-loading-loader')).toBeInTheDocument();
  });
});
