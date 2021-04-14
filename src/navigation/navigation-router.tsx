import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import WelcomeUsers from '../WelcomeUsers';
import CreateCourseDialog from '../course/create-course-dialog';
import Dashboard from '../scenes/teacher/Dashboard';
import TaskOverview from '../task-overview/task-overview';
import StudentOverview from '../student-overview/student-overview';
import SingleStudentOverview from '../single-student-overview/single-student-overview';
import SingleStudentMasteryOverview from '../single-student-mastery-overview/single-student-mastery-overview';
import TaskSubmission from '../view-task-submission/view-task-submission';

export default function NavigationRouter() {
   return (
      <BrowserRouter>
         <nav>
            <ul>
               <li>
                  <Link to="/">Dashboard</Link>
               </li>
               <li>
                  <Link to="/create">New Course</Link>
               </li>
               <li>
                  <Link to="/taskSubmission">Task Submission</Link>
               </li>
               <li>
                  <Link to="/taskOverview">Task Overview</Link>
               </li>
               <li>
                  <Link to="/studentOverview">Student Overview</Link>
               </li>
               <li>
                  <Link to="/studentMasteryOverview">Student Mastery Overview</Link>
               </li>
            </ul>
         </nav>
         <Switch>
            <Route path="/create">
               <WelcomeUsers />
               <CreateCourseDialog />
            </Route>
            <Route path="/taskSubmission">
               <TaskSubmission />
            </Route>
            <Route path="/taskOverview">
               <TaskOverview />
            </Route>
            <Route path="/studentOverview">
               <StudentOverview />
            </Route>
            <Route path="/singleStudentOverview">
               <SingleStudentOverview />
            </Route>
            <Route path="/studentMasteryOverview">
               <SingleStudentMasteryOverview />
            </Route>
            <Route path="/">
               <Dashboard />
            </Route>
         </Switch>
      </BrowserRouter>
   );
}
