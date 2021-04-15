import React from 'react';
import { render, fireEvent, waitFor, screen } from './test-utils';
import '@testing-library/jest-dom/extend-expect';

import TaskSubmission from '../view-task-submission/view-task-submission';

test('displays modal', async () => {
   // Arrange
   render(<TaskSubmission />);

   //    // Act
   //    fireEvent.click(screen.getByTestId('return-objective'));

   //    await waitFor(() => screen.getByTestId('return-objective'));

   //    // Assert
   //    expect(screen.getByTestId('return-objective')).toBeVisible();
   // })
});
