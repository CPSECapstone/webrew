import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent, waitFor, screen } from './test-utils';
import '@testing-library/jest-dom/extend-expect';

import SingleStudentOverview from '../Components/SingleStudentOverview/SingleStudentOverview';

test('Single Student Overview', () => {
   const history = createMemoryHistory();
   const route = '/singleStudentOverview';
   history.push(route);
   render(
      <Router history={history}>
         <SingleStudentOverview />
      </Router>
   );
   expect(screen.getByTestId('single-student-overview')).toHaveTextContent('Mission Progress');
});
