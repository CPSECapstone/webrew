import { Switch, Route } from 'react-router-dom';
import CreateCourseDialog from '../CreateCourseDialog/CreateCourseDialog';
import Dashboard from '../Dashboard/Dashboard';
import StudentOverview from '../StudentOverview/StudentOverview';
import TaskSubmissionOverview from '../TaskSubmissionOverview';
import ViewTaskSubmission from '../ViewTaskSubmission';
import SingleStudentOverview from '../SingleStudentOverview/SingleStudentOverview';
import SingleStudentMasteryOverview from '../SingleStudentMasteryOverview/SingleStudentMasteryOverview';
import CourseHome from '../CourseHome/CourseHome';
import SingleTargetOverview from '../SingleTargetOverview/SingleTargetOverview';
import SingleMissionOverview from '../SingleStudentOverview/SingleMissionOverview';

import TaskView from '../../Screens/TaskView/TaskView';
import Mission from '../MissionOverview/Mission';
import TaskListView from '../TaskListView';
import TaskSubmissionSummaryView from '../TaskSubmissionSummaryView';
import { ClassMastery } from '../../Screens/ClassMastery';
import './Content.css';
import MissionsScreen from '../MissionOverview/MissionOverview';

export default function Content() {
   return (
      <div className="content">
         <Switch>
            <Route path="/courseHome/:className">
               <CourseHome />
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
            <Route path="/singleStudentOverview">
               <SingleStudentOverview />
            </Route>
            <Route path="/singleStudentMasteryOverview">
               <SingleStudentMasteryOverview />
            </Route>
            <Route path="/mission/:missionId">
               <Mission />
            </Route>
            <Route path="/missions">
               <MissionsScreen />
            </Route>
            <Route path="/viewTask">
               <Route path="/singleTargetOverview/:name">
                  <SingleTargetOverview />
               </Route>
               <Route path="/singleMissionOverview/:name">
                  <SingleMissionOverview />
               </Route>
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
