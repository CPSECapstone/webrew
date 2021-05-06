import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import Amplify from 'aws-amplify';
import App from './App';
import reportWebVitals from './reportWebVitals';
import apolloClient from './clients/apollo-client';

Amplify.configure({
   Auth: {
      identityPoolId: 'us-east-1:07057d76-612a-4045-8522-f38a759cf216',
      region: 'us-east-1',
      userPoolId: 'us-east-1_POfbbYTKF',
      userPoolWebClientId: '24sdf1brebo58s89ja0b63c51d',
      oauth: {
         domain: 'flipted-ios-test.auth.us-east-1.amazoncognito.com',
         scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
         redirectSignIn: 'https://webrew.herokuapp.com/',
         redirectSignOut: 'https://webrew.herokuapp.com/',
         responseType: 'token',
      },
   },
});

ReactDOM.render(
   <React.StrictMode>
      <link
         rel="stylesheet"
         href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
         integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
         crossOrigin="anonymous"
      />
      <ApolloProvider client={apolloClient}>
         <Router>
            <App />
         </Router>
      </ApolloProvider>
   </React.StrictMode>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
