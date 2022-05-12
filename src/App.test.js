import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "Hello', () => {
  render(<App />);
  const element = screen.getByText(/Hello/i);
  expect(element).toBeInTheDocument();
});
