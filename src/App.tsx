import { Route, Switch } from 'react-router-dom';
import './App.css';
import Amplify from 'aws-amplify';
import CreateCourseDialog from './course/create-course-dialog';
import Dashboard from './scenes/teacher/Dashboard';
import StudentOverview from './student-overview/student-overview';
import TaskOverview from './task-overview/task-overview';
import TaskSubmission from './view-task-submission/view-task-submission';
import Navigation from './navigation/Navigation';
import SingleStudentOverview from './single-student-overview/single-student-overview';
import Login from './Login/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import authClient from './clients/authClient';

function App() {
   Amplify.configure({
      Auth: {
         identityPoolId: 'us-east-1:07057d76-612a-4045-8522-f38a759cf216',
         region: 'us-east-1',
         userPoolId: 'us-east-1_POfbbYTKF',
         userPoolWebClientId: '24sdf1brebo58s89ja0b63c51d',
         oauth: {
            domain: 'flipted-ios-test.auth.us-east-1.amazoncognito.com',
            scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
            redirectSignIn: 'http://localhost:3000/',
            redirectSignOut: 'http://localhost:3000/',
            responseType: 'token',
         },
      },
   });

   return (
      <div className="App">
         <Navigation />
         <Switch>
            <Route path="/login">
               <Login authClient={authClient} />
            </Route>
            <PrivateRoute authClient={authClient} path="/addNewCourse">
               <CreateCourseDialog />
            </PrivateRoute>
            <PrivateRoute authClient={authClient} path="/addTaskSubmission">
               <TaskSubmission />
            </PrivateRoute>
            <PrivateRoute authClient={authClient} path="/taskOverview">
               <TaskOverview />
            </PrivateRoute>
            <PrivateRoute authClient={authClient} path="/studentOverview">
               <StudentOverview />
            </PrivateRoute>
            <PrivateRoute authClient={authClient} path="/singleStudentOverview">
               <SingleStudentOverview />
            </PrivateRoute>
            <PrivateRoute authClient={authClient} path="/">
               <Dashboard />
            </PrivateRoute>
         </Switch>
      </div>
   );
}

export default App;
