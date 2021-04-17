import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Auth, Hub } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { withAuthenticator } from 'aws-amplify-react';
import CreateCourseDialog from './course/create-course-dialog';
import Dashboard from './scenes/teacher/Dashboard';
import StudentOverview from './student-overview/student-overview';
import TaskOverview from './task-overview/task-overview';
import TaskSubmission from './view-task-submission/view-task-submission';
import Navigation from './navigation/Navigation';
import SingleStudentOverview from './single-student-overview/single-student-overview';

function App() {
   const [user, setUser] = useState(null);

   function storeToken(): void {
      Auth.currentSession()
         .then((userSession) => {
            const accessToken = userSession.getAccessToken();
            const jwt = accessToken.getJwtToken();
            localStorage.setItem('accessToken', JSON.stringify(accessToken));
            localStorage.setItem('jwt', jwt);

            return Auth.currentAuthenticatedUser();
         })
         .then((authUser) => {
            setUser(authUser);
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

export default withAuthenticator(App);
