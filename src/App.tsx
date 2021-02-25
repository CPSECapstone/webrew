import React from 'react';
//import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";
import { ApolloProvider } from '@apollo/client';
import apolloClient from './clients/apollo-client';
import './App.css';
import WelcomeUsers from './WelcomeUsers';



function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div>
        <h2>My first Apollo app 🚀</h2>
        <WelcomeUsers></WelcomeUsers>
      </div>
    </ApolloProvider>
  );
}

//export default withAuthenticator(App);
export default App;
