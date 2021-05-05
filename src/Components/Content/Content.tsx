import { Switch, Route } from 'react-router-dom';
import CreateCourseDialog from '../CreateCourseDialog/CreateCourseDialog';
import Dashboard from '../Dashboard/Dashboard';
import StudentOverview from '../StudentOverview/StudentOverview';
import TaskSubmissionOverview from '../TaskSubmissionOverview';
import ViewTaskSubmission from '../ViewTaskSubmission';
import SingleStudentOverview from '../SingleStudentOverview/SingleStudentOverview';
import SingleStudentMasteryOverview from '../SingleStudentMasteryOverview/SingleStudentMasteryOverview';

import './Content.css';

export default function Content() {
   return (
      <div className="content">
         <Switch>
            <Route path="/addNewCourse">
               <CreateCourseDialog />
            </Route>
            <Route path="/taskSubmissionOverview">
               <TaskSubmissionOverview />
            </Route>
            <Route path="/viewTaskSubmission">
               <ViewTaskSubmission />
            </Route>
            <Route path="/studentOverview">
               <StudentOverview />
            </Route>
            <Route path="/singleStudentOverview">
               <SingleStudentOverview />
            </Route>
            <Route path="/singleStudentMasteryOverview">
               <SingleStudentMasteryOverview />
            </Route>
            <Route path="/">
               <Dashboard />
            </Route>
         </Switch>
      </div>
   );
}
