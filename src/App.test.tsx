import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders wardrobe nav', () => {
  render(<App />);
  const nav = screen.getByText(/wardrobe/i);
  expect(nav).toBeInTheDocument();
});
