import React from 'react';
import CourseHome from '../Components/CourseHome/CourseHome';
import { render, fireEvent, waitFor, screen } from './test-utils';

test('my tets', async () => {
   // Arange
   render(<CourseHome />);

   // Act
   await waitFor(() => screen.getByTestId('courseHomeViewSelector'));

   fireEvent.change(screen.getByTestId('courseHomeViewSelector'), {
      target: { value: 'Chart' },
   });

   await waitFor(() => screen.queryByTestId('Chart'));

   // Assert
   expect(screen.queryByTestId('Chart')).toBeTruthy();
});
