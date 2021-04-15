import React from 'react';
import { render, fireEvent, waitFor, screen } from './test-utils';
import '@testing-library/jest-dom/extend-expect';

import Navigation from '../navigation/Navigation';

test('displays modal', async () => {
   // Arrange
   render(<Navigation />);

   // Act
   await waitFor(() => screen.getByTestId('navbar-test'));

   // Assert
   expect(screen.getByTestId('nav-link-first')).toBeVisible();
   expect(screen.getByTestId('nav-link-second')).toBeVisible();
   expect(screen.getByTestId('nav-link-third')).toBeVisible();
   expect(screen.getByTestId('nav-link-fourth')).toBeVisible();
   expect(screen.getByTestId('nav-link-fifth')).toBeVisible();
   expect(screen.getByTestId('nav-link-sixth')).toBeVisible();
});
