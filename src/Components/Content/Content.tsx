import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import './Content.css';
import MarketHomeInstructor from '../MarketHome/MarketHome';
import { CourseInfoFieldsFragment, Role, useUserQuery } from '../../__generated__/types';
import { Settings } from '../Settings/Settings';
import { MarketHomeStudent } from '../MarketHome/Student/MarketHomeStudent';

type Props = {
   courses: CourseInfoFieldsFragment[];
   refetchCourses: any;
};

export default function Content({ courses, refetchCourses }: Props) {
   const { loading, error, data } = useUserQuery();

   if (loading || error || !data) {
      return <></>;
   }

   const { getUser } = data;

   return (
      <div className="content">
         <Switch>
            <Route path="/courseHome/:classId/:className">
               {getUser.role === Role.Instructor ? <MarketHomeInstructor /> : <MarketHomeStudent />}
            </Route>
            <Route path="/settings">
               <Settings user={getUser} />
            </Route>
            <Route path="/">
               <Dashboard courses={courses} refetchCourses={refetchCourses} role={getUser.role} />
            </Route>

            {/*  <Route path="/taskSubmissionOverview">
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
            </Route> */}
         </Switch>
      </div>
   );
}
