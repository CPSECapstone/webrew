/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState, useEffect } from 'react';
import { ApolloError } from '@apollo/client';
import { withAuthenticator } from 'aws-amplify-react';
import { Auth, Hub } from 'aws-amplify';

import Content from '../Components/Content';
import Navigation from '../Navigation/Navigation';

import './App.scss';
import { useGetCoursesQuery } from '../__generated__/types';
import { environment } from '../environment';
import Sidebar from '../Components/Sidebar';

Auth.configure({
   identityPoolId: 'us-east-1:07057d76-612a-4045-8522-f38a759cf216',
   region: 'us-east-1',
   userPoolId: 'us-east-1_POfbbYTKF',
   userPoolWebClientId: '24sdf1brebo58s89ja0b63c51d',
   oauth: {
      domain: 'https://flipted-ios-test.auth.us-east-1.amazoncognito.com',
      scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
      redirectSignIn: 'https://destin-flipted.herokuapp.com/',
      redirectSignOut: 'https://destin-flipted.herokuapp.com/',
      responseType: 'token',
   },
});

console.log(`Redirect Sign In ${environment.redirectSignIn}`);
console.log(`Redirect Sign Out ${environment.redirectSignout}`);

const federated = {
   google_client_id: '993811506351-76rvcgqvlsg96vvr0fio76p0il5t4quq.apps.googleusercontent.com',
};

// Entry point of the Flitped App
function App() {
   const [, setUser] = useState(null);
   const [fname, setFirstName] = useState('');

   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const handleError = (_error: ApolloError) => {
      // eslint-disable-next-line
      void refetch();
   };

   const { loading, error, data: courseData, refetch } = useGetCoursesQuery({
      onError: handleError,
   });

   function storeToken(): void {
      Auth.currentSession()
         .then((userSession) => {
            const accessToken = userSession.getAccessToken();
            const jwt = accessToken.getJwtToken();

            localStorage.setItem('accessToken', JSON.stringify(accessToken));
            localStorage.setItem('jwt', jwt);
            console.log('Obtained user session and saved JWT');

            return Auth.currentAuthenticatedUser();
         })
         .then((authUser) => {
            console.log('Set auth user');

            setUser(authUser);
            setFirstName(authUser.attributes.given_name);
         })
         .catch((e) => console.log(`Error!!: ${e}`));
   }
   useEffect(() => {
      Hub.listen('auth', ({ payload: { event, data } }) => {
         switch (event) {
            case 'signIn':
            case 'oauthSignIn':
            case 'cognitoHostedUI':
               console.log('Signed in!');
               storeToken();
               break;
            case 'signOut':
               console.log('Signed out!');
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

export default withAuthenticator(App, undefined, undefined, federated, undefined, {
   hiddenDefaults: ['phone_number'],
});
