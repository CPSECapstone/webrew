import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Auth, Hub } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { withAuthenticator } from 'aws-amplify-react';
import CreateCourseDialog from './Components/CreateCourseDialog/CreateCourseDialog';
import Dashboard from './Screens/Dashboard/Dashboard';
import StudentOverview from './Components/StudentOverview/StudentOverview';
import TaskSubmissionOverview from './Components/TaskSubmissionOverview';
import ViewTaskSubmission from './Components/ViewTaskSubmission';
import Navigation from './Navigation/Navigation';
import SingleStudentOverview from './Components/SingleStudentOverview/SingleStudentOverview';
import SingleStudentMasteryOverview from './Components/SingleStudentMasteryOverview/SingleStudentMasteryOverview';

// Entry point of the Flitped App
function App() {
   const [, setUser] = useState(null);

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
         <div className="main">
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
      </div>
   );
}

export default withAuthenticator(App);
