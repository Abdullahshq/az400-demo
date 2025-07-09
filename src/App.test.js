import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Deployment Demo header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Deployment Demo/i);
  expect(headerElement).toBeInTheDocument();
});
