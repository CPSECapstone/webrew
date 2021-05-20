import React from 'react';
import { render, fireEvent, waitFor, screen } from './test-utils';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import SingleStudentOverview from '../Components/SingleStudentOverview/SingleStudentOverview';

test('overview changes', async () => {
   const history = createMemoryHistory();
   history.push('/singleStudentOverview');
   render(
      <Router history={history}>
         <SingleStudentOverview />
      </Router>
   );

   expect(screen.getByTestId('mission-container')).toBeVisible();
   fireEvent.click(screen.getByTestId('view-mastery-btn'));

   await waitFor(() => screen.getByTestId('mastery-container'));

   // Assert
   expect(screen.getByTestId('mastery-container')).toBeVisible();
});
