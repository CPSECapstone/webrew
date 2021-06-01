import { fireEvent, render, screen, waitFor } from './test-utils';
import '@testing-library/jest-dom/extend-expect';
// import CreateCourseDialog from '../course/create-course-dialog';
import SingleStudentMasteryOverview from '../Components/SingleStudentMasteryOverview/SingleStudentMasteryOverview';

test('displays student overview', async () => {
   // Arrange
   render(<SingleStudentMasteryOverview />);

   // Act
   fireEvent.click(screen.getByText('Target 1'));

   await waitFor(() => screen.getByTestId('mastery-overview'));

   // Assert
   expect(screen.getAllByLabelText('all-objectives')).toHaveLength(4);
});