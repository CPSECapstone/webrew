import { Route, Switch } from 'react-router-dom';
import './App.css';
import Amplify, { Auth, Hub } from 'aws-amplify';
import { useState, useEffect } from 'react';
import CreateCourseDialog from './course/create-course-dialog';
import Dashboard from './scenes/teacher/Dashboard';
import StudentOverview from './student-overview/student-overview';
import TaskOverview from './task-overview/task-overview';
import TaskSubmission from './view-task-submission/view-task-submission';
import Navigation from './navigation/Navigation';
import SingleStudentOverview from './single-student-overview/single-student-overview';
import Login from './Login/Login';
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

   const [user, setUser] = useState(null);

   function storeToken(): void {
      Auth.currentSession()
         .then((userSession) => {
            const accessToken = userSession.getAccessToken();
            const jwt = accessToken.getJwtToken();
            localStorage.setItem('accessToken', JSON.stringify(accessToken));
            localStorage.setItem('jwt', jwt);
         })
         .catch(() => console.log('Not signed in'));
   }

   useEffect(() => {
      Hub.listen('auth', ({ payload: { event, data } }) => {
         switch (event) {
            case 'signIn':
            case 'cognitoHostedUI':
               storeToken();
               break;
            case 'signOut':
               setUser(null);
               break;
            case 'signIn_failure':
            case 'cognitoHostedUI_failure':
               console.log('Sign in failure', data);
               break;
            default:
               break;
         }
      });

      storeToken();
   }, []);

   return (
      <div className="App">
         <Navigation />
         <Switch>
            <Route path="/login">
               <Login authClient={authClient} />
            </Route>
            <Route path="/addNewCourse">
               <CreateCourseDialog />
            </Route>
            <Route path="/addTaskSubmission">
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
            <Route path="/">
               <Dashboard />
            </Route>
         </Switch>
      </div>
   );
}

export default App;
