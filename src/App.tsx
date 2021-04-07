import Amplify, { Auth, Hub } from 'aws-amplify';
import { ApolloProvider } from '@apollo/client';
import { useEffect, useState } from 'react';
import apolloClient from './clients/apollo-client';
import './App.css';
import WelcomeUsers from './WelcomeUsers';

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

function App() {
   const [user, setUser] = useState<any>(null);
   function getUser() {
      return Auth.currentAuthenticatedUser()
         .then((userData) => userData)
         .catch(() => console.log('Not signed in'));
   }

   useEffect(() => {
      Hub.listen('auth', ({ payload: { event, data } }) => {
         switch (event) {
            case 'signIn':
            case 'cognitoHostedUI':
               getUser()
                  .then((userData) => setUser(userData))
                  .catch(() => console.log('Failed to set user.'));
               Auth.currentSession()
                  .then((res) => {
                     const accessToken = res.getAccessToken();
                     const jwt = accessToken.getJwtToken();

                     localStorage.setItem('accessToken', JSON.stringify(accessToken));
                     localStorage.setItem('jwt', jwt);
                  })
                  .catch(() => console.log('Failed to collect token.'));
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
      getUser()
         .then((userData) => setUser(userData))
         .catch(() => console.log('Failed to get user.'));
   }, []);

   return (
      <ApolloProvider client={apolloClient}>
         <div>
            <p>User: {user ? JSON.stringify(user.attributes) : 'None'}</p>
            <div>{user ? <WelcomeUsers /> : 'Please Sign in.'}</div>
            {user ? (
               <button type='submit' onClick={() => Auth.signOut()}>
                  Sign Out
               </button>
            ) : (
               <button type='submit' onClick={() => Auth.federatedSignIn()}>
                  Federated Sign In
               </button>
            )}
         </div>
      </ApolloProvider>
   );
}

export default App;
