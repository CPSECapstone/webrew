/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState, useEffect } from 'react';
import Amplify, { Auth, Hub } from 'aws-amplify';

import './App.scss';
import { RedirectLogin } from './RedirectLogin';
import { SignedIn } from './SignedIn';

Amplify.configure({
   Auth: {
      identityPoolId: 'us-west-1:b359cdf7-6859-42f1-a056-80faa938cd5b',
      region: 'us-west-1',
      userPoolId: 'us-west-1_n2IuxZvzt',
      userPoolWebClientId: '15vb9m813qrqdlu68e7anqr4fp',
      oauth: {
         domain: 'webrew2426b7b3-2426b7b3-destin.auth.us-west-1.amazoncognito.com',
         scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
         redirectSignIn: 'https://destin-flipted.herokuapp.com/',
         redirectSignOut: 'https://destin-flipted.herokuapp.com/',
         responseType: 'token',
      },
   },
});

// Entry point of the Flitped App
function App() {
   const [user, setUser] = useState(null);
   const [isLoadingUser, setIsLoadingUser] = useState(true);

   function storeToken(): void {
      console.log('Calling store token!');

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
      Auth.currentAuthenticatedUser()
         .then((aUser) => {
            setUser(aUser);
            setIsLoadingUser(false); // set bool upon completion
         })
         // eslint-disable-next-line @typescript-eslint/no-unused-vars
         .catch((_aUser) => {
            setUser(null);
            setIsLoadingUser(false); // set bool upon failure
         });

      Hub.listen('auth', ({ payload: { event, data } }) => {
         switch (event) {
            case 'signIn':
            case 'oauthSignIn':
            case 'cognitoHostedUI':
               storeToken();
               break;
            case 'signOut':
               console.log('Signed out');
               setUser(null);
               localStorage.removeItem('jwt');

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
      <div>
         {isLoadingUser ? (
            <>Loading User...</>
         ) : (
            <div>{user === null ? <RedirectLogin /> : <SignedIn />}</div>
         )}
      </div>
   );
}

export default App;
