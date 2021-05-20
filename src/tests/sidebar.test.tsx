import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent, waitFor, screen } from './test-utils';

import '@testing-library/jest-dom/extend-expect';
import Sidebar from '../Components/Sidebar/Sidebar';

test('Sidebar Rendering', async () => {
   const history = createMemoryHistory();
   const route = '/';
   history.push(route);
   render(
      <Router history={history}>
         <Sidebar />
      </Router>
   );
   expect(screen.getByTestId('sb')).toBeVisible();
   fireEvent.click(screen.getByTestId('item'));
   await waitFor(() => screen.getByTestId('sb'));
   expect(screen.getByTestId('item')).toBeVisible();
});
