import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test("renders Progress Bars Demo", () => {
  render(<App />);
  const linkElement = screen.getByText(/progress bars demo/i);
  expect(linkElement).toBeInTheDocument();
});
