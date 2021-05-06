import { Switch, Route } from 'react-router-dom';
import CreateCourseDialog from '../CreateCourseDialog/CreateCourseDialog';
import Dashboard from '../Dashboard/Dashboard';
import StudentOverview from '../StudentOverview/StudentOverview';
import TaskSubmissionOverview from '../TaskSubmissionOverview';
import ViewTaskSubmission from '../ViewTaskSubmission';
import SingleStudentOverview from '../SingleStudentOverview/SingleStudentOverview';
import SingleStudentMasteryOverview from '../SingleStudentMasteryOverview/SingleStudentMasteryOverview';

import './Content.css';
import TaskView from '../../Screens/TaskView/TaskView';

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
            <Route path="/studentOverview/:className">
               <StudentOverview />
            </Route>
            <Route path="/singleStudentOverview">
               <SingleStudentOverview />
            </Route>
            <Route path="/singleStudentMasteryOverview">
               <SingleStudentMasteryOverview />
            </Route>
            <Route path="/viewTask">
               <TaskView taskId="90e0c730e56" />
            </Route>
            <Route path="/">
               <Dashboard />
            </Route>
         </Switch>
      </div>
   );
}