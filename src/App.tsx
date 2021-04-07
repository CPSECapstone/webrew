import React from 'react';
// import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";
import { ApolloProvider } from '@apollo/client';
import apolloClient from './clients/apollo-client';
import './App.css';
import WelcomeUsers from './WelcomeUsers';
import { Button } from '@material-ui/core';
import FormDialog from './add-course-form/create-course-dialog';
import Dashboard from './scenes/teacher/Dashboard';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import QuizSubmission from './view-quiz-submission/view-quiz-submission';
import QuizOverview from './quiz-overview/quiz-overview';
import StudentOverview from './student-overview/student-overview';

function App() {
   return (
      <ApolloProvider client={apolloClient}>
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
                     <Link to="/quizSubmission">Quiz Submission</Link>
                  </li>
                  <li>
                     <Link to="/quizOverview">Quiz Overview</Link>
                  </li>
                  <li>
                     <Link to="/studentOverview">Student Overview</Link>
                  </li>
               </ul>
            </nav>
            <Switch>
               <Route path="/create">
                  <div>
                     <h2>My first Apollo app</h2>
                     <WelcomeUsers></WelcomeUsers>
                     <FormDialog></FormDialog>
                     {/* <Button variant="contained" onClick={() => { FormDialog() }}>Show Course Dialog</Button> */}
                  </div>
               </Route>

               <Route path="/quizSubmission">
                  <div>
                     <h2>My first Apollo app quiz</h2>
                     <QuizSubmission></QuizSubmission>
                  </div>
               </Route>
               <Route path="/quizOverview">
                  <div>
                     {/* <h2>Quiz Overview</h2> */}
                     <QuizOverview></QuizOverview>
                  </div>
               </Route>
               <Route path="/studentOverview">
                  <div>
                     <StudentOverview></StudentOverview>
                  </div>
               </Route>



               <Route path="/">
                  <Dashboard />
               </Route>
            </Switch>
         </BrowserRouter>
      </ApolloProvider>
   );
}

// export default withAuthenticator(App);
export default App;
