import { render, screen } from '@testing-library/react';
import App from '../../app/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Desarrollado por Rodrigo López/i);
  expect(linkElement).toBeInTheDocument();
});
