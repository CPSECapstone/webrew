/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState, useEffect } from 'react';
import { withAuthenticator } from 'aws-amplify-react';
import Amplify, { Auth, Hub } from 'aws-amplify';
import { ApolloError } from '@apollo/client/errors';

import Sidebar from '../Components/Sidebar';
import Content from '../Components/Content';
import Navigation from '../Navigation/Navigation';

import './App.scss';
import { useGetCoursesQuery } from '../__generated__/types';

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
   const [, setUser] = useState(null);
   const [fname, setFirstName] = useState('');

   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const handleError = (_error: ApolloError) => {
      // eslint-disable-next-line
      void refetch();
   };

   const {
      loading,
      error,
      data: courseData,
      refetch,
   } = useGetCoursesQuery({
      onError: handleError,
   });

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
            setFirstName(authUser.attributes.given_name);
         })
         .catch(() => console.log('Not signed in'));
   }
   useEffect(() => {
      Hub.listen('auth', ({ payload: { event, data } }) => {
         switch (event) {
            case 'signIn':
            case 'oauthSignIn':
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

   if (loading) return <div>Loading...</div>;
   if (error) {
      return <></>;
   }
   if (!courseData) {
      return <></>;
   }
   const { courses } = courseData;

   return (
      <div className="App">
         <Navigation />
         <div className="main container-fluid">
            <div className="row h-100">
               <div className="sidebar-container col-md-2 p-0 side">
                  <div className="pl-2 pt-2 pr-2">{fname}</div>
                  <Sidebar courses={courses} />
               </div>
               <div className="content-container col-md-10 p-0">
                  <Content courses={courses} refetchCourses={refetch} />
               </div>
            </div>
         </div>
      </div>
   );
}

export default withAuthenticator(App, undefined, undefined, undefined, undefined, {
   hiddenDefaults: ['phone_number'],
});
