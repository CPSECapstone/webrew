import React from 'react';
//import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";
import { ApolloProvider, useMutation } from '@apollo/client';
import apolloClient from './clients/apollo-client';
import './App.css';
import WelcomeUsers from './WelcomeUsers';
import { Button } from '@material-ui/core';
import FormDialog from './add-course-form/create-course-dialog';
import Dashboard from './scenes/teacher/Dashboard';
import MakeUser from './add-user-form/make-fake-user';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

// import { useMutation, useQuery } from '@apollo/client';

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
                     <Link to="/newUser">Make Fake User</Link>
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
               <Route path="/newUser">
                  <MakeUser></MakeUser>
               </Route>
               <Route path="/">
            
                  <Dashboard />
               </Route>
               
            </Switch>
         </BrowserRouter>
      </ApolloProvider>
   );
}

//export default withAuthenticator(App);
export default App;
