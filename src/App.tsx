import React from 'react';
//import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";
import { ApolloProvider } from '@apollo/client';
import apolloClient from './clients/apollo-client';
import './App.css';
import WelcomeUsers from './WelcomeUsers';
import { Button } from '@material-ui/core';
import FormDialog from './add-course-form/create-course-dialog';



function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div>
        <h2>My first Apollo app Robert🚀</h2>
        <WelcomeUsers></WelcomeUsers>
        <FormDialog></FormDialog>
        {/* <Button variant="contained" onClick={() => { FormDialog() }}>Show Course Dialog</Button> */}
      </div>
    </ApolloProvider>
  );
}

//export default withAuthenticator(App);
export default App;
