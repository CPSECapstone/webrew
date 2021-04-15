import React from 'react';
import { render, fireEvent, waitFor, screen } from './test-utils';
import '@testing-library/jest-dom/extend-expect';
import StudentOverview from '../student-overview/student-overview';

test('Table Loaded Users', async () => {
   // Arrange
   render(<StudentOverview />);

   // Act
   await waitFor(() => screen.getAllByTestId('tablerow'));

   // Assert
   expect(screen.getAllByTestId('tablerow').length > 0).toBeTruthy();
});
