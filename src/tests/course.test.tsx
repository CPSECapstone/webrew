import React from 'react';
import { render, fireEvent, waitFor, screen } from './test-utils';
import '@testing-library/jest-dom/extend-expect';

import CreateCourseDialog from '../course/create-course-dialog';

test('displays modal', async () => {
   // Arrange
   render(<CreateCourseDialog />);

   // Act
   fireEvent.click(screen.getByTestId('create-btn'));

   await waitFor(() => screen.getByTestId('create-dialog'));

   // Assert
   expect(screen.getByTestId('create-dialog')).toBeVisible();
});
