import React from 'react';
// import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";
import { ApolloProvider } from '@apollo/client';
import apolloClient from './clients/apollo-client';
import './App.css';
import WelcomeUsers from './WelcomeUsers';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
   return (
      <ApolloProvider client={apolloClient}>
         <div>
            <h2>My first Apollo app 🚀</h2>
            <WelcomeUsers />
         </div>
      </ApolloProvider>
   );
}

// export default withAuthenticator(App);
export default App;
