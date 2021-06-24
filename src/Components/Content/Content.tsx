import { Switch, Route } from 'react-router-dom';
import CreateCourseDialog from '../CreateCourseDialog/CreateCourseDialog';
import Dashboard from '../Dashboard/Dashboard';
import StudentOverview from '../StudentOverview/StudentOverview';
import TaskSubmissionOverview from '../TaskSubmissionOverview';
import ViewTaskSubmission from '../ViewTaskSubmission';
import SingleStudentOverview from '../SingleStudentOverview/SingleStudentOverview';
import SingleStudentMasteryOverview from '../SingleStudentMasteryOverview/SingleStudentMasteryOverview';
import SingleTargetOverview from '../SingleTargetOverview/SingleTargetOverview';
import SingleMissionOverview from '../SingleStudentOverview/SingleMissionOverview';
import TaskView from '../../Screens/TaskView/TaskView';
import TaskListView from '../TaskListView';
import TaskSubmissionSummaryView from '../TaskSubmissionSummaryView';
import { ClassMastery } from '../../Screens/ClassMastery';
import './Content.css';
import MarketHome from '../MarketHome/MarketHome';

export default function Content() {
   return (
      <div className="content">
         <Switch>
            <Route path="/courseHome/:className">
               <MarketHome />
            </Route>
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
            <Route path="/singleStudentOverview/:username">
               <SingleStudentOverview />
            </Route>
            <Route path="/singleStudentMasteryOverview">
               <SingleStudentMasteryOverview />
            </Route>
            <Route path="/singleTargetOverview/:name">
               <SingleTargetOverview />
            </Route>
            <Route path="/singleMissionOverview/:name/:username">
               <SingleMissionOverview />
            </Route>
            <Route path="/taskList">
               <TaskListView />
            </Route>
            <Route path="/taskSubmissionSummary/:taskId">
               <TaskSubmissionSummaryView />
            </Route>
            <Route path="/viewTask/:taskId/:username">
               <TaskView />
            </Route>
            <Route path="/classMastery">
               <ClassMastery />
            </Route>
            <Route path="/">
               <Dashboard />
            </Route>
         </Switch>
      </div>
   );
}
