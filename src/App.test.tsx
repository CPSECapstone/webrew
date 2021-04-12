import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('My first test case', () => {
   render(<App />);
   const linkElement = screen.getByText(/Dashboard/i);
   expect(linkElement).toBeInTheDocument();
});
