import React from 'react';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './clients/apollo-client';
import './App.css';
import NavigationRouter from './navigation/navigation-router';

function App() {
   return (
      <ApolloProvider client={apolloClient}>
         <NavigationRouter />
      </ApolloProvider>
   );
}

export default App;
