import React from 'react';
import { render, waitFor, screen } from './test-utils';
import '@testing-library/jest-dom/extend-expect';

import TaskNavbar from '../Screens/TaskView/TaskNavbar/TaskNavbar';

test('displays task nav bar', async () => {
   render(<TaskNavbar />);

   // Act
   await waitFor(() => screen.getByTestId('task-left'));
   await waitFor(() => screen.getByTestId('task-rubric'));

   // Assert
   expect(screen.getByTestId('hand-task')).toBeVisible();
   expect(screen.getByTestId('task-rubric')).toBeVisible();
});
